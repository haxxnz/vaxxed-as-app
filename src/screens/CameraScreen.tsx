import {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
  ReactElement
} from "react";
import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
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
import tw from "../../lib/tw";
import { useBottomModal, BottomModal, FlipCameraIcon } from "../components";
import { MAX_ZOOM_FACTOR, SAFE_AREA_PADDING } from "../Constants";
import { StatusBarBlurBackground, VerificationResultsDialog } from "../views";
import { useIsForeground } from "../hooks";
import { verifyPassURIWithTrustedIssuers } from "../utils";
import { verificationStatus } from "../stores";
import type { Routes, VerificationStatus } from "../types";

const ReanimatedCamera = Reanimated.createAnimatedComponent(Camera);
Reanimated.addWhitelistedNativeProps({
  zoom: true
});

const SCALE_FULL_ZOOM = 3;
const fps = 30;

type Props = NativeStackScreenProps<Routes, "PermissionsScreen">;

const CameraScreen = observer(({ navigation }: Props): ReactElement => {
  const camera = useRef<Camera>(null);
  const [cameraPosition, setCameraPosition] = useState<"front" | "back">(
    "back"
  );
  const [qrFound, setQRfound] = useState<boolean>(true);
  const [latestVerificationStatus, setLatestVerificationStatus] =
    useState<VerificationStatus>(verificationStatus);
  const zoom = useSharedValue(0);
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isCameraActive = isFocussed && isForeground;
  const devices = useCameraDevices();
  const { dismiss, show, modalProps, isActive } = useBottomModal();

  const device = devices?.[cameraPosition] ?? null;

  const formats = useMemo<CameraDeviceFormat[]>(() => {
    if (device?.formats == null) return [];
    return device.formats.sort(sortFormats);
  }, [device?.formats]);

  const supportsCameraFlipping = useMemo(
    () => devices.back !== null && devices.front !== null,
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
    if (raw && !qrFound) {
      const verification = await verifyPassURIWithTrustedIssuers(raw, [
        "did:web:nzcp.identity.health.nz"
      ]);
      const timestamp = new Date();
      const verificationStatus = { verification, raw, timestamp };
      setLatestVerificationStatus(verificationStatus);
      setQRfound(true);
      show();
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
    const unsubscribe = navigation.addListener("focus", () => {
      setQRfound(false);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!isActive) {
      handleClose();
    }
  }, [isActive]);

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
        style={tw`absolute flex items-end bottom-[${
          SAFE_AREA_PADDING.paddingBottom ?? 0
        }px] right-4`}
      >
        {supportsCameraFlipping && (
          <PressableOpacity
            disabledOpacity={0.4}
            style={tw`items-center justify-center w-20 h-20 mb-1 bg-gray-800 rounded-full bg-opacity-40`}
            onPress={onFlipCameraPressed}
          >
            <FlipCameraIcon className="w-12 h-12 text-white" />
          </PressableOpacity>
        )}
      </View>
      <BottomModal height={800} {...modalProps} style={tw`pb-2`}>
        <VerificationResultsDialog
          verificationStatus={latestVerificationStatus}
          onClose={() => {
            dismiss();
          }}
        />
      </BottomModal>
    </View>
  );
});

export { CameraScreen };
