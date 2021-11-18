import { BlurView, BlurViewProperties } from "@react-native-community/blur";
import { memo, ReactElement } from "react";
import { Platform } from "react-native";
import { blurViewStyles as styles } from "../styles";

const FALLBACK_COLOR = "rgba(140, 140, 140, 0.3)";

const StatusBarBlurBackgroundImpl = ({
  style,
  ...props
}: BlurViewProperties): ReactElement | null => {
  if (Platform.OS !== "ios") return null;

  return (
    <BlurView
      blurAmount={25}
      blurType="light"
      reducedTransparencyFallbackColor={FALLBACK_COLOR}
      style={[styles.statusBarBackground, style]}
      {...props}
    />
  );
};

export const StatusBarBlurBackground = memo(StatusBarBlurBackgroundImpl);
