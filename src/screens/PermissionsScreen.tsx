import { useCallback, useEffect, useState, ReactElement } from "react";
import { Linking, View, Text } from "react-native";
import { Camera, CameraPermissionStatus } from "react-native-vision-camera";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PressableOpacity } from "react-native-pressable-opacity";
import tw, { useDeviceContext } from "twrnc";
import type { Routes } from "../types";
import { permissionStyles as styles } from "../styles";

type Props = NativeStackScreenProps<Routes, "PermissionsScreen">;

const PermissionsScreen = ({ navigation }: Props): ReactElement => {
  const [cameraPermissionStatus, setCameraPermissionStatus] =
    useState<CameraPermissionStatus>("not-determined");

  const handleOnClick = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === "denied") {
      await Linking.openSettings();
    }
    setCameraPermissionStatus(permission);
  }, []);

  const handleOnLoad = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    setCameraPermissionStatus(permission);
  }, []);

  useDeviceContext(tw);

  useEffect(() => {
    if (cameraPermissionStatus === "authorized") {
      navigation.replace("CameraScreen");
    }
  }, [cameraPermissionStatus, navigation]);

  useEffect(() => {
    handleOnLoad();
  }, []);

  return (
    <View
      style={{
        ...styles.container,
        ...tw`flex-1 bg-gray-500 dark:bg-gray-700`
      }}
    >
      <View style={styles.permissionsContainer}>
        {cameraPermissionStatus !== "authorized" && (
          <PressableOpacity
            style={tw`flex items-center justify-center p-2 pb-1 border border-gray-500 rounded-full shadow-sm hover:bg-gray-500 focus:outline-none`}
            onPress={handleOnClick}
          >
            <Text
              style={{
                ...styles.fontFamily,
                ...tw`m-0 text-xl font-bold text-white`
              }}
            >
              Grant
            </Text>
          </PressableOpacity>
        )}
      </View>
    </View>
  );
};

export { PermissionsScreen };
