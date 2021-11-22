import {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  ReactElement
} from "react";
import { observer } from "mobx-react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
  TapGestureHandler
} from "react-native-gesture-handler";
import {
  CameraDeviceFormat,
  sortFormats,
  useCameraDevices,
  Camera,
  frameRateIncluded
} from "react-native-vision-camera";
import Reanimated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useSharedValue
} from "react-native-reanimated";
import {
  useScanBarcodes,
  BarcodeFormat,
  Barcode
} from "vision-camera-qrcode-scanner/src";
import { PressableOpacity } from "react-native-pressable-opacity";
import { useIsFocused } from "@react-navigation/core";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TranslateIcon, QrcodeIcon } from "react-native-heroicons/outline";
import Orientation from "react-native-orientation-locker";
import { verifyPassURIOffline } from "@vaxxnz/nzcp";
import { useInterval } from "react-interval-hook";
import { Freeze } from "react-freeze";
import { useBottomModal, BottomModal, FlipCameraIcon } from "../components";
import { MAX_ZOOM_FACTOR, SAFE_AREA_PADDING } from "../Constants";
import {
  StatusBarBlurBackground,
  VerificationResultsDialog,
  LanguageSelectDialog
} from "../views";
import { useIsForeground } from "../hooks";
import { verificationStatus } from "../stores";
import { useStores } from "../hooks/useStores";
import type { Routes, VerificationStatus } from "../types";
import { LanguageOption, languageOptions } from "../data";
import tw from "../../lib/tw";

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true
});

const SCALE_FULL_ZOOM = 3;
const fps = 30;
const BACKGROUND = require("../img/background.png");

type Props = NativeStackScreenProps<Routes, "PermissionsScreen">;

const CameraScreen = observer(({ navigation }: Props): ReactElement => {
  const camera = useRef<Camera>(null);
  const [cameraPosition, setCameraPosition] = useState<"front" | "back">(
    "back"
  );
  const [qrFound, setQRfound] = useState<boolean>(true);
  const [latestVerificationStatus, setLatestVerificationStatus] =
    useState<VerificationStatus>(verificationStatus);
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const zoom = useSharedValue(0);
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isCameraActive = isFocussed && isForeground;
  const devices = useCameraDevices();
  const verificationResultsModal = useBottomModal();
  const languageSelectModal = useBottomModal();
  const {
    uiStore: { localization }
  } = useStores();

  const device = devices?.[cameraPosition] ?? null;

  const formats = useMemo<CameraDeviceFormat[]>(() => {
    if (!device?.formats) {
      return [];
    }
    return device?.formats?.sort(sortFormats);
  }, [device?.formats]);

  const supportsCameraFlipping = useMemo(
    () => devices?.back !== null && devices?.front !== null,
    [devices.back, devices.front]
  );

  const format = useMemo(
    () =>
      formats.find(f => f.frameRateRanges.some(r => frameRateIncluded(r, fps))),
    [formats]
  );

  const minZoom = device?.minZoom ?? 1;
  const maxZoom = Math.min(device?.maxZoom ?? 1, MAX_ZOOM_FACTOR);

  const cameraAnimatedProps = useAnimatedProps(() => {
    const newZoom = Math.max(Math.min(zoom.value, maxZoom), minZoom);
    return {
      zoom: newZoom
    };
  }, [maxZoom, minZoom, zoom]);

  const onError = useCallback(() => {}, []);

  const onFlipCameraPressed = useCallback(() => {
    setCameraPosition(p => (p === "back" ? "front" : "back"));
  }, []);

  const onDoubleTap = useCallback(() => {
    onFlipCameraPressed();
  }, [onFlipCameraPressed]);

  const neutralZoom = device?.neutralZoom ?? 1;

  const onPinchGesture = useAnimatedGestureHandler<
    PinchGestureHandlerGestureEvent,
    { startZoom?: number }
  >({
    onStart: (_, context) => {
      context.startZoom = zoom.value;
    },
    onActive: (event, context) => {
      const startZoom = context.startZoom ?? 0;
      const scale = interpolate(
        event.scale,
        [1 - 1 / SCALE_FULL_ZOOM, 1, SCALE_FULL_ZOOM],
        [-1, 0, 1],
        Extrapolate.CLAMP
      );
      zoom.value = interpolate(
        scale,
        [-1, 0, 1],
        [minZoom, startZoom, maxZoom],
        Extrapolate.CLAMP
      );
    }
  });

  const handleBarcode = async (barcodes: Barcode[]) => {
    const raw = barcodes?.[0]?.displayValue;
    if (
      raw &&
      !qrFound &&
      !(verificationResultsModal.isActive || languageSelectModal.isActive)
    ) {
      const verification = verifyPassURIOffline(raw);
      const timestamp = new Date();
      const verificationStatus = { verification, raw, timestamp };
      setLatestVerificationStatus(verificationStatus);
      setQRfound(true);
      verificationResultsModal.show();
    }
  };

  const handleClose = async () => {
    await new Promise(resolve => {
      setTimeout(() => resolve(true), 500);
    });
    setQRfound(false);
  };

  useEffect(() => {
    zoom.value = neutralZoom;
  }, [neutralZoom, zoom]);

  useEffect(() => {
    handleBarcode(barcodes);
  }, [barcodes]);

  useEffect(() => {
    /*
      Start checking for QR code until
      navigation event has finished
    */
    const unsubscribe = navigation.addListener("focus", async () => {
      await new Promise(resolve => {
        setTimeout(() => resolve(true), 500);
      });
      setQRfound(false);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!(verificationResultsModal.isActive || languageSelectModal.isActive)) {
      handleClose();
    }
  }, [verificationResultsModal.isActive, languageSelectModal.isActive]);

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const { code }: LanguageOption = localization;

  const before = languageOptions.filter(option => option.code === code);
  const after = languageOptions
    .filter(option => option.code !== code)
    .sort((a, b) => a.name.localeCompare(b.name));

  const options = [...before, ...after];

  const { stop } = useInterval(() => {
    const newIndex = languageIndex + 1;
    if (newIndex >= languageOptions.length) {
      setLanguageIndex(0);
      stop();
      return;
    }
    setLanguageIndex(newIndex);
  }, 4000);

  return (
    <View style={tw`flex-1 bg-gray-500 dark:bg-gray-700`}>
      {device !== null && (
        <PinchGestureHandler
          enabled={isCameraActive}
          onGestureEvent={onPinchGesture}
        >
          <Reanimated.View style={StyleSheet.absoluteFill}>
            <TapGestureHandler numberOfTaps={2} onEnded={onDoubleTap}>
              <ReanimatedCamera
                ref={camera}
                video
                animatedProps={cameraAnimatedProps}
                audio={false}
                device={device}
                enableZoomGesture={false}
                format={format}
                fps={fps}
                frameProcessor={frameProcessor}
                frameProcessorFps={5}
                isActive={isCameraActive}
                style={StyleSheet.absoluteFill}
                onError={onError}
              />
            </TapGestureHandler>
          </Reanimated.View>
        </PinchGestureHandler>
      )}
      <StatusBarBlurBackground />
      <View
        style={tw`absolute flex items-end top-[${
          SAFE_AREA_PADDING.paddingTop + 10 ?? 10
        }px] left-4 right-4`}
      >
        <ImageBackground
          imageStyle={{
            ...tw`rounded-3xl`
          }}
          source={BACKGROUND}
          style={tw`flex-1 w-full mb-4 rounded-3xl`}
        >
          <View style={tw`flex flex-row items-center justify-between p-2`}>
            <View
              style={tw`flex flex-row items-center justify-center p-2 bg-white rounded-2xl`}
            >
              <QrcodeIcon
                style={tw`w-6 h-6 ${
                  localization.isRTL ? "ml-2" : "mr-2"
                } text-gray-600`}
              />
              <Text style={tw`font-sans text-lg text-gray-600`}>Vaxxed As</Text>
            </View>
            <PressableOpacity
              disabledOpacity={0.4}
              style={tw`flex ${
                localization.isRTL ? "flex-row-reverse" : "flex-row"
              } items-center justify-center px-3 py-2 bg-indigo-900 rounded-2xl`}
              onPress={() => {
                languageSelectModal.show();
              }}
            >
              <TranslateIcon
                style={tw`w-6 h-6 ${
                  localization.isRTL ? "ml-2" : "mr-2"
                } text-white`}
              />
              {options.map(({ changeLanguage, code }, index) => {
                if (index === languageIndex) {
                  return (
                    <Text key={code} style={tw`font-sans text-base text-white`}>
                      {changeLanguage}
                    </Text>
                  );
                }
                return null;
              })}
            </PressableOpacity>
          </View>
        </ImageBackground>
        {supportsCameraFlipping && (
          <PressableOpacity
            disabledOpacity={0.4}
            style={tw`items-center justify-center w-20 h-20 mb-2 bg-gray-800 rounded-full bg-opacity-40`}
            onPress={onFlipCameraPressed}
          >
            <FlipCameraIcon className="text-white w-7 h-7" />
          </PressableOpacity>
        )}
      </View>
      <BottomModal
        animation="spring"
        height={610}
        {...verificationResultsModal.modalProps}
        style={tw`pb-12`}
      >
        <Freeze freeze={!verificationResultsModal.isActive}>
          <VerificationResultsDialog
            verificationStatus={latestVerificationStatus}
            onClose={async () => {
              verificationResultsModal.dismiss();
              // reset back to initial value to prevent flickering on next show
              await new Promise(resolve => {
                setTimeout(() => resolve(true), 500);
              });
              setLatestVerificationStatus(verificationStatus);
            }}
          />
        </Freeze>
      </BottomModal>
      <BottomModal
        height={620}
        {...languageSelectModal.modalProps}
        style={tw`pb-12`}
      >
        <Freeze freeze={!languageSelectModal.isActive}>
          <LanguageSelectDialog
            onClose={() => {
              languageSelectModal.dismiss();
            }}
          />
        </Freeze>
      </BottomModal>
    </View>
  );
});

export { CameraScreen };
