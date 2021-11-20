import { BlurView } from "@react-native-community/blur";
import { memo, ReactElement } from "react";
import { Platform, View } from "react-native";
import StaticSafeAreaInsets from "react-native-static-safe-area-insets";
import tw from "../../lib/tw";

const FALLBACK_COLOR = "rgba(55, 65, 81, 0.3)";

const StatusBarBlurBackgroundImpl = (): ReactElement | null => {
  if (Platform.OS !== "ios")
    return (
      <View
        style={tw`absolute top-0 left-0 right-0 h-[${
          StaticSafeAreaInsets.safeAreaInsetsTop ?? 0
        }px] bg-gray-700 bg-opacity-30`}
      />
    );

  return (
    <BlurView
      blurAmount={25}
      blurType="light"
      reducedTransparencyFallbackColor={FALLBACK_COLOR}
      style={tw`absolute top-0 left-0 right-0 h-[${
        StaticSafeAreaInsets.safeAreaInsetsTop ?? 0
      }px]`}
    />
  );
};

export const StatusBarBlurBackground = memo(StatusBarBlurBackgroundImpl);
