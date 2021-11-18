import { StyleSheet } from "react-native";
import StaticSafeAreaInsets from "react-native-static-safe-area-insets";

const blurViewStyles = StyleSheet.create({
  statusBarBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: StaticSafeAreaInsets.safeAreaInsetsTop
  }
});

export { blurViewStyles };
