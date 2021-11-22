import { useCallback, useEffect, useState, ReactElement } from "react";
import { observer } from "mobx-react";
import { Linking, View, Text } from "react-native";
import { Camera, CameraPermissionStatus } from "react-native-vision-camera";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import FastStorage from "react-native-fast-storage";
import { SquircleView } from "react-native-figma-squircle";
import { useInterval } from "react-interval-hook";
import { useBottomModal, BottomModal } from "../components";
import type { Routes } from "../types";
import { CameraPermissionDialog } from "../views";
import { VaxxedAsIcon } from "../components/icons";
import { SAFE_AREA_PADDING } from "../Constants";
import { useStores } from "../hooks/useStores";
import { LanguageOption, languageOptions } from "../data";
import tw from "../../lib/tw";

type Props = NativeStackScreenProps<Routes, "PermissionsScreen">;

const PermissionsScreen = observer(({ navigation }: Props): ReactElement => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");
  const requestCameraPermissionsModal = useBottomModal();
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const {
    uiStore: { localization }
  } = useStores();

  const handleOnClick = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    await FastStorage.setItem("cameraPermission", permission);
    if (permission === "denied") {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  }, []);

  const handleOnLoad = useCallback(async () => {
    const current = await FastStorage.getItem("cameraPermission");
    if (current === "authorized") {
      setCameraPermissionStatus(current);
      return;
    }
    requestCameraPermissionsModal.show();
  }, []);

  useEffect(() => {
    if (cameraPermissionStatus === "authorized") {
      navigation.replace("CameraScreen");
    }
  }, [cameraPermissionStatus, navigation]);

  useEffect(() => {
    handleOnLoad();
  }, []);

  useEffect(() => {
    if (!requestCameraPermissionsModal.isActive) {
      requestCameraPermissionsModal.show();
    }
  }, [requestCameraPermissionsModal.isActive]);

  const { name }: LanguageOption = localization;

  const before = languageOptions.filter(option => option.name === name);
  const after = languageOptions
    .filter(option => option.name !== name)
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
    <View
      style={{
        ...SAFE_AREA_PADDING,
        ...tw`flex-1 bg-gray-500 dark:bg-gray-700`
      }}
    >
      <View style={tw`flex items-center w-full h-full pt-8`}>
        <View style={tw`w-72`}>
          <View style={tw`items-center justify-center w-72`}>
            <SquircleView
              squircleParams={{
                cornerSmoothing: 0.7,
                cornerRadius: 30
              }}
              style={tw`w-48 h-48 mb-4`}
            >
              <VaxxedAsIcon style={tw`w-48 h-48`} />
            </SquircleView>
          </View>
          <View style={tw`w-72`}>
            <Text
              style={tw`px-2 font-sans text-3xl font-bold text-center text-gray-300`}
            >
              Vaxxed As
            </Text>
            <Text
              key={name}
              style={tw`px-2 mb-16 font-sans text-xl font-bold text-center text-gray-300`}
            >
              {options.map(({ title }, index) => {
                if (index === languageIndex) {
                  return title;
                }
                return "";
              })}
            </Text>
          </View>
        </View>
      </View>
      <BottomModal
        height={620}
        {...requestCameraPermissionsModal.modalProps}
        style={tw`pb-12`}
      >
        <CameraPermissionDialog onRequestPermission={handleOnClick} />
      </BottomModal>
    </View>
  );
});

export { PermissionsScreen };
