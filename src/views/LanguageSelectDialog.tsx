/* eslint-disable react/jsx-no-useless-fragment */
import { ReactElement, Fragment } from "react";
import { observer } from "mobx-react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import { XIcon } from "react-native-heroicons/outline";
import { CheckIcon } from "react-native-heroicons/solid";
import FastStorage from "react-native-fast-storage";
import { PressableOpacity } from "react-native-pressable-opacity";
import tw from "../../lib/tw";
import { screen } from "../utils";
import { useStores } from "../hooks/useStores";
import { locales, languageOptions, LanguageOption } from "../data";

const BACKGROUND = require("../img/background-2.png");

export type LanguageSelectDialogProps = {
  onClose: () => void;
};

export type ItemProps = {
  isCurrent: boolean;
  isLast: boolean;
} & LanguageOption &
  LanguageSelectDialogProps;

export const LanguageItem = ({
  isLast,
  isRTL,
  callToAction,
  name,
  isCurrent,
  onClose
}: ItemProps) => (
  <Fragment>
    <PressableOpacity
      disabled={isCurrent}
      style={tw`w-full px-6 pb-3`}
      onPress={() => {
        onClose();
      }}
    >
      <View
        style={tw`flex items-center ${
          isRTL ? "flex-row" : "flex-row-reverse w-full"
        }`}
      >
        {isCurrent && (
          <CheckIcon
            aria-hidden="true"
            size={24}
            style={tw`absolute text-gray-700 dark:text-gray-300`}
          />
        )}
        <View style={tw`w-full`}>
          <Text
            style={tw`mx-2 mt-1.5 font-sans text-sm leading-tight ${
              isRTL ? "text-right" : "text-left"
            } text-gray-700 dark:text-gray-300`}
          >
            {name}
          </Text>
          <Text
            style={tw`mx-2 mt-1.5 font-sans text-sm leading-tight ${
              isRTL ? "text-right" : "text-left"
            } text-gray-700 dark:text-gray-300`}
          >
            {callToAction}
          </Text>
        </View>
      </View>
    </PressableOpacity>
    {!isLast && (
      <View style={tw`px-3`}>
        <View style={tw`w-full h-px mb-3 bg-gray-200 dark:bg-gray-500`} />
      </View>
    )}
  </Fragment>
);

const LanguageSelectDialog = observer(
  ({ onClose }: LanguageSelectDialogProps): ReactElement => {
    const {
      uiStore,
      uiStore: { localization }
    } = useStores();

    const before = languageOptions.filter(
      ({ code }) => localization?.code === code
    );
    const after = languageOptions
      .filter(({ code }) => localization?.code !== code)
      .sort((a, b) => a.name.localeCompare(b.name));

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
        onClose={async () => {
          const selectedLocalization = {
            code,
            isRTL,
            changeLanguage,
            callToAction,
            name
          };

          uiStore.setLocalization(selectedLocalization);
          await FastStorage.setItem(
            "selectedLocalization",
            JSON.stringify(selectedLocalization)
          );
          onClose();
        }}
      />
    );

    const { code }: LanguageOption = localization;

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
          <View>
            <Text
              style={tw`pt-4 mb-5 font-sans text-2xl font-bold text-center text-gray-700 dark:font-medium dark:text-gray-300`}
            >
              {locales?.[code]?.header?.["Change language"] ??
                "Change language"}
            </Text>
            <ScrollView style={tw`h-[420px] py-3`}>
              {options.map(renderItem)}
            </ScrollView>
            <View
              style={tw`flex flex-row w-full overflow-hidden bg-gray-500 shadow-md dark:bg-gray-700 rounded-3xl dark:text-gray-300`}
            >
              <PressableOpacity
                disabledOpacity={0.4}
                style={tw`flex items-center justify-center w-full px-2 py-5`}
                onPress={onClose}
              >
                <View style={tw`flex flex-row items-center`}>
                  <Text
                    style={tw`mr-2 mt-1.5 font-sans text-base leading-tight text-center text-gray-200`}
                  >
                    {locales?.[code]?.verificationDialog?.Close ?? "Close"}
                  </Text>
                  <XIcon
                    aria-hidden="true"
                    size={24}
                    style={tw`text-gray-200`}
                  />
                </View>
              </PressableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
);

export { LanguageSelectDialog };
