import { Fragment } from "react";
import { View } from "react-native";
import { BadgeCheckIcon } from "react-native-heroicons/solid";
import tw from "../../lib/tw";

const Badge = () => (
  <Fragment>
    <View
      style={tw`absolute right-0 items-center justify-center w-16 h-16 -mt-8`}
    >
      <BadgeCheckIcon size={60} style={tw`text-white dark:text-gray-100`} />
    </View>

    <View
      style={tw`absolute right-0 items-center justify-center w-16 h-16 -mt-8`}
    >
      <View style={tw`w-8 h-8 bg-white rounded-full dark:bg-gray-100`} />
    </View>
    <View
      style={tw`absolute right-0 items-center justify-center w-16 h-16 -mt-8`}
    >
      <BadgeCheckIcon size={56} style={tw`text-sky-500 dark:text-sky-600`} />
    </View>
  </Fragment>
);

export { Badge };
