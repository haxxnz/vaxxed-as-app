/* eslint-disable react/jsx-no-useless-fragment */
import { ReactElement, Fragment, useState } from "react";
import { observer } from "mobx-react";
import { View, ImageBackground, Text, ScrollView } from "react-native";
import {
  XIcon,
  ExclamationIcon,
  SwitchHorizontalIcon
} from "react-native-heroicons/outline";
import { PressableOpacity } from "react-native-pressable-opacity";
import tw from "../../lib/tw";
import { Badge } from "../components";
import { screen, formatDate } from "../utils";
import { useStores } from "../hooks/useStores";
import { locales, LanguageOption } from "../data";
import type { VerificationStatus } from "../types";

const BACKGROUND = require("../img/background.png");
const BACKGROUND2 = require("../img/background-2.png");

export type VerificationResultsDialogProps = {
  verificationStatus: VerificationStatus;
  onClose: () => void;
};

const VerificationResultsDialog = observer(
  ({
    verificationStatus,
    onClose
  }: VerificationResultsDialogProps): ReactElement => {
    const [isFlipped, setIsFlipped] = useState<boolean>(true);
    const {
      uiStore: { localization }
    } = useStores();

    const {
      verification: { success, credentialSubject, violates }
    } = verificationStatus;

    const getTranslation = (errorCode: string): string => {
      switch (errorCode) {
        case "2.1.0.4.3":
          return "expired";
        case "4.4":
          return "notAcovidPass";
        default:
          return "invalid";
      }
    };

    const { code }: LanguageOption = localization;

    return (
      <ImageBackground
        imageStyle={{
          ...tw`rounded-3xl`,
          width: Math.min(screen.width - 20, 500)
        }}
        source={success ? BACKGROUND2 : BACKGROUND}
        style={{
          ...tw`flex-1 p-2 rounded-3xl`,
          width: Math.min(screen.width - 20, 500)
        }}
      >
        <View style={tw`w-full rounded-3xl dark:bg-gray-600`}>
          <View
            style={tw`${
              success
                ? "bg-teal-600 dark:bg-teal-700"
                : "bg-gray-600 dark:bg-gray-800"
            } rounded-3xl`}
          >
            <View style={tw`flex items-center justify-center`}>
              <Text
                style={tw`pt-10 pb-1 font-sans text-6xl font-bold text-white uppercase`}
              >
                {success
                  ? locales?.[code]?.verificationDialog?.yes ?? "Yes"
                  : "\u00A0"}
              </Text>
            </View>
            <View style={tw`w-full bg-white dark:bg-gray-600 rounded-3xl`}>
              {success && <Badge />}
              <View style={tw`py-6`}>
                <Text
                  style={tw`mb-5 font-sans text-2xl font-bold text-center text-gray-700 dark:font-medium dark:text-gray-300`}
                >
                  {locales?.[code]?.verificationDialog?.[
                    "Verification results"
                  ] ?? "Verification results"}
                </Text>
                <ScrollView style={tw`h-[270px]`}>
                  {isFlipped ? (
                    <View style={tw`px-6`}>
                      {success ? (
                        <Fragment>
                          {[
                            { label: "First name", key: "givenName" },
                            { label: "Last name", key: "familyName" },
                            { label: "Date of birth", key: "dob" }
                          ].map(({ label, key }, index) => (
                            <Fragment key={key}>
                              <Text
                                style={tw`font-sans text-sm text-gray-700 dark:font-medium dark:text-gray-300`}
                              >
                                {locales?.[code]?.verificationDialog?.[label] ??
                                  label}
                              </Text>
                              <Text
                                style={tw`mb-3 font-sans text-base font-bold text-gray-700 dark:font-medium dark:text-gray-300`}
                              >
                                {key === "dob"
                                  ? formatDate({
                                      dateString: credentialSubject[key],
                                      languageName: code
                                    })
                                  : credentialSubject?.[key] ?? " . "}
                              </Text>
                              {index !== 2 && (
                                <View
                                  style={tw`w-full h-px mb-3 bg-gray-200 dark:bg-gray-500`}
                                />
                              )}
                            </Fragment>
                          ))}
                          <View
                            style={tw`px-4 py-3 rounded-3xl bg-sky-50 dark:bg-sky-900`}
                          >
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              {locales?.[code]?.verificationDialog
                                ?.onlyForVerificationPurposes ??
                                "Please use the results for verification purposes only. It's a good thing to respect everybody's privacy."}
                            </Text>
                          </View>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <View
                            style={tw`px-4 py-3 my-6 rounded-3xl bg-orange-50 dark:bg-orange-900`}
                          >
                            <View style={tw`flex flex-row items-center mb-2`}>
                              <ExclamationIcon
                                aria-hidden="true"
                                size={24}
                                style={tw`text-orange-500 dark:text-orange-300`}
                              />
                              <Text
                                style={tw`mx-2 mt-1.5 font-sans text-xl leading-tight text-center text-orange-500 dark:text-orange-300`}
                              >
                                {locales?.[code]?.verificationDialog?.[
                                  "Attention needed"
                                ] ?? "Attention needed"}
                              </Text>
                            </View>
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              {locales?.[code]?.invalidCodes?.[
                                getTranslation(violates?.section)
                              ] ??
                                "Sorry, we could not verify your COVIDpass. Please contact the Ministry of Health"}
                            </Text>
                          </View>
                          <View
                            style={tw`px-4 py-3 rounded-3xl bg-sky-50 dark:bg-sky-900`}
                          >
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              {locales?.[code]?.verificationDialog
                                ?.onlyForVerificationPurposes ??
                                "Please use the results for verification purposes only. It's a good thing to respect everybody's privacy."}
                            </Text>
                          </View>
                        </Fragment>
                      )}
                    </View>
                  ) : (
                    <View style={tw`px-6`}>
                      <Text
                        style={tw`font-mono text-xs text-base leading-tight text-gray-700 dark:text-gray-300`}
                      >
                        {JSON.stringify(verificationStatus, null, 2)}
                      </Text>
                    </View>
                  )}
                </ScrollView>
              </View>
              <View
                style={tw`flex flex-row w-full overflow-hidden bg-gray-500 shadow-md dark:bg-gray-700 rounded-3xl dark:text-gray-300`}
              >
                <PressableOpacity
                  disabledOpacity={0.4}
                  style={tw`flex items-center justify-center w-1/2 px-2 py-5`}
                  onPress={() => {
                    setIsFlipped(!isFlipped);
                  }}
                >
                  <View style={tw`flex flex-row items-center`}>
                    <SwitchHorizontalIcon
                      aria-hidden="true"
                      size={24}
                      style={tw`text-gray-200`}
                    />
                    <Text
                      style={tw`mx-2 mt-1.5 font-sans text-base leading-tight text-center text-gray-200`}
                    >
                      {locales?.[code]?.verificationDialog?.["View details"] ??
                        "View details"}
                    </Text>
                  </View>
                </PressableOpacity>
                <PressableOpacity
                  disabledOpacity={0.4}
                  style={tw`flex items-center justify-center w-1/2 px-2 py-5`}
                  onPress={async () => {
                    onClose();
                    setIsFlipped(true);
                  }}
                >
                  <View style={tw`flex flex-row items-center`}>
                    <Text
                      style={tw`mx-2 mt-1.5 font-sans text-base leading-tight text-center text-gray-200`}
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
        </View>
      </ImageBackground>
    );
  }
);

export { VerificationResultsDialog };
