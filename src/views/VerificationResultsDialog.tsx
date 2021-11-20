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
import { screen } from "../utils";
import type { VerificationStatus } from "../types";

const BACKGROUND = require("../img/background.png");

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
      verification: { success, credentialSubject }
    } = verificationStatus;

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
        <View style={tw`w-full pb-2 rounded-2xl dark:bg-gray-600`}>
          <View
            style={tw`${
              success
                ? "bg-teal-600 dark:bg-teal-700"
                : "bg-gray-600 dark:bg-gray-800"
            } rounded-2xl`}
          >
            <View style={tw`flex items-center justify-center`}>
              <Text
                style={tw`pt-12 pb-2 font-sans text-6xl font-extrabold text-white uppercase`}
              >
                {success ? "yes" : "\u00A0"}
              </Text>
            </View>
            <View style={tw`w-full bg-white dark:bg-gray-600 rounded-2xl`}>
              {success && <Badge />}
              <View style={tw`px-8 pb-8 pt-14`}>
                <Text
                  style={tw`px-3 mb-5 font-sans text-2xl font-bold text-center text-gray-700 dark:font-medium dark:text-gray-300`}
                >
                  Verification results
                </Text>
                <ScrollView style={tw`h-[250px]`}>
                  {isFlipped ? (
                    <Fragment>
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
                                {label}
                              </Text>
                              <Text
                                style={tw`mb-3 font-sans text-base text-gray-700 dark:font-medium dark:text-gray-300`}
                              >
                                {credentialSubject?.[key] ?? " . "}
                              </Text>
                              {index !== 2 && (
                                <View
                                  style={tw`w-full h-px mb-3 bg-gray-200 dark:bg-gray-500`}
                                />
                              )}
                            </Fragment>
                          ))}
                          <View
                            style={tw`px-4 py-3 rounded-2xl bg-sky-50 dark:bg-sky-900`}
                          >
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              Please use the results for verification purposes
                              only. It's a good thing to respect everybody's
                              privacy.
                            </Text>
                          </View>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <View
                            style={tw`px-4 py-3 my-6 rounded-2xl bg-orange-50 dark:bg-orange-900`}
                          >
                            <View style={tw`flex flex-row items-center mb-2`}>
                              <ExclamationIcon
                                aria-hidden="true"
                                size={24}
                                style={tw`text-orange-500 dark:text-orange-300`}
                              />
                              <Text
                                style={tw`mx-2 mt-1.5 font-sans text-base text-xl leading-tight text-center text-orange-500 dark:text-orange-300`}
                              >
                                Attention needed
                              </Text>
                            </View>
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              Sorry, we could not verify your COVIDpass. Please
                              contact the Ministry of Health
                            </Text>
                          </View>
                          <View
                            style={tw`px-4 py-3 rounded-2xl bg-sky-50 dark:bg-sky-900`}
                          >
                            <Text
                              style={tw`font-sans text-base leading-tight text-gray-700 dark:text-gray-300`}
                            >
                              Please use the results for verification purposes
                              only. It's a good thing to respect everybody's
                              privacy.
                            </Text>
                          </View>
                        </Fragment>
                      )}
                    </Fragment>
                  ) : (
                    <View>
                      <Text>{JSON.stringify(verificationStatus, null, 2)}</Text>
                    </View>
                  )}
                </ScrollView>
              </View>
              <View
                style={tw`flex flex-row w-full overflow-hidden bg-gray-500 shadow-md dark:bg-gray-700 rounded-2xl dark:text-gray-300`}
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
                      style={tw`mx-2 mt-1.5 font-sans text-base text-xl leading-tight text-center text-gray-200`}
                    >
                      View details
                    </Text>
                  </View>
                </PressableOpacity>
                <PressableOpacity
                  disabledOpacity={0.4}
                  style={tw`flex items-center justify-center w-1/2 px-2 py-5`}
                  onPress={onClose}
                >
                  <View style={tw`flex flex-row items-center`}>
                    <Text
                      style={tw`mx-2 mt-1.5 font-sans text-base text-xl leading-tight text-center text-gray-200`}
                    >
                      Close
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
