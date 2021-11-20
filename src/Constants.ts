import { Dimensions, Platform } from "react-native";
import StaticSafeAreaInsets from "react-native-static-safe-area-insets";

export const CONTENT_SPACING = 1;

const SAFE_BOTTOM =
  Platform.select({
    ios: StaticSafeAreaInsets.safeAreaInsetsBottom
  }) ?? 0;

export const SAFE_AREA_PADDING = {
  paddingLeft: StaticSafeAreaInsets.safeAreaInsetsLeft,
  paddingTop: StaticSafeAreaInsets.safeAreaInsetsTop,
  paddingRight: StaticSafeAreaInsets.safeAreaInsetsRight,
  paddingBottom: SAFE_BOTTOM
};

// The maximum zoom _factor_ you should be able to zoom in
export const MAX_ZOOM_FACTOR = 20;

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Platform.select<number>({
  android:
    Dimensions.get("screen").height - StaticSafeAreaInsets.safeAreaInsetsBottom,
  ios: Dimensions.get("window").height
}) as number;

// Capture Button
export const CAPTURE_BUTTON_SIZE = 78;
