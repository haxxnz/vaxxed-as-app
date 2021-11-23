/* eslint-disable react/jsx-no-useless-fragment */
import { ReactElement, useState } from "react";
import { observer } from "mobx-react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { CameraIcon, TranslateIcon } from "react-native-heroicons/outline";
import { PressableOpacity } from "react-native-pressable-opacity";
import { useInterval } from "react-interval-hook";
import tw from "../../lib/tw";
import { screen } from "../utils";
import { useStores } from "../hooks/useStores";
import { LanguageItem } from "./LanguageSelectDialog";
import { locales, languageOptions, LanguageOption } from "../data";

const BACKGROUND = require("../img/background-2.png");

export type CameraPermissionDialogProps = {
  onRequestPermission: () => void;
};

const CameraPermissionDialog = observer(
  ({ onRequestPermission }: CameraPermissionDialogProps): ReactElement => {
    const [showLanguageOptions, toggleLanguageOptions] = useState(false);
    const [languageIndex, setLanguageIndex] = useState<number>(0);
    const {
      uiStore,
      uiStore: { localization }
    } = useStores();

    const { code }: LanguageOption = localization;

    const before = languageOptions.filter(
      ({ code }) => localization?.code === code
    );
    const after = languageOptions.filter(
      ({ code }) => localization?.code !== code
    );

    const options = [...before, ...after];

    const renderItem = (
      { code, isRTL, changeLanguage, callToAction, name },
      index: number
    ) => (
      <LanguageItem
        key={code}
        callToAction={callToAction}
        changeLanguage={changeLanguage}
        code={code}
        isCurrent={localization?.code === code}
        isLast={index + 1 === languageOptions.length}
        isRTL={isRTL}
        name={name}
        onClose={() => {
          uiStore.setLocalization({
            code,
            isRTL,
            changeLanguage,
            callToAction,
            name
          });
        }}
      />
    );

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
      <ImageBackground
        imageStyle={{
          ...tw`rounded-3xl`,
          width: Math.min(screen.width - 20, 500)
        }}
        source={BACKGROUND}
        style={{
          ...tw`flex-1 p-2 rounded-3xl`,
          width: Math.min(screen.width - 20, 500)
        }}
      >
        <View style={tw`w-full bg-white rounded-3xl dark:bg-gray-600`}>
          {showLanguageOptions ? (
            <ScrollView style={tw`h-[420px] py-3`}>
              {languageOptions.map(renderItem)}
            </ScrollView>
          ) : (
            <View style={tw`h-[420px] py-3`}>
              <Text
                style={tw`px-2 pt-4 mb-5 font-sans text-2xl font-bold text-center text-gray-700 dark:font-medium dark:text-gray-300`}
              >
                {locales?.[code]?.cameraPermissionDialog?.title ??
                  "Please allow camera use"}
              </Text>
              <Text
                style={tw`px-6 mb-3 mb-4 font-sans text-base font-bold text-gray-700 dark:font-medium dark:text-gray-300`}
              >
                {locales?.[code]?.cameraPermissionDialog?.content
                  ?.replaceAll("{{appname}}", "Vaxxed As")
                  ?.replaceAll("{{passName}}", "NZ COVID Pass") ??
                  "The Vaxxed As app requires the use of your camera to capture the NZ Covid Pass"}
              </Text>
            </View>
          )}
          <View
            style={tw`flex flex-row w-full overflow-hidden bg-gray-500 shadow-md dark:bg-gray-700 rounded-3xl dark:text-gray-300`}
          >
            <PressableOpacity
              disabledOpacity={0.4}
              style={tw`w-1/2 px-3 py-5`}
              onPress={() => {
                toggleLanguageOptions(!showLanguageOptions);
              }}
            >
              <View style={tw`flex flex-row items-center justify-start`}>
                <TranslateIcon
                  aria-hidden="true"
                  style={tw`w-6 h-6 mr-3 text-gray-200`}
                />
                <Text
                  style={tw`mt-1.5 font-sans text-base leading-tight text-gray-200`}
                >
                  {options.map(({ changeLanguage }, index) => {
                    if (index === languageIndex) {
                      return changeLanguage;
                    }
                    return null;
                  })}
                </Text>
              </View>
            </PressableOpacity>
            <PressableOpacity
              disabledOpacity={0.4}
              style={tw`w-1/2 px-3 py-5`}
              onPress={onRequestPermission}
            >
              <View style={tw`flex flex-row items-center justify-end`}>
                <Text
                  style={tw`mt-1.5 font-sans text-base leading-tight text-gray-200 mr-3`}
                >
                  {locales?.[code]?.cameraPermissionDialog?.callToAction ??
                    "Allow"}
                </Text>
                <CameraIcon
                  aria-hidden="true"
                  style={tw`w-6 h-6 text-gray-200`}
                />
              </View>
            </PressableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
);

export { CameraPermissionDialog };
