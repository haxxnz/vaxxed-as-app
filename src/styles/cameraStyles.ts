import { StyleSheet } from "react-native";
import { CONTENT_SPACING, SAFE_AREA_PADDING } from "../Constants";

const BUTTON_SIZE = 40;

const cameraStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  },
  captureButton: {
    position: "absolute",
    alignSelf: "center",
    bottom: SAFE_AREA_PADDING.paddingBottom
  },
  button: {
    marginBottom: CONTENT_SPACING,
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: "rgba(140, 140, 140, 0.3)",
    justifyContent: "center",
    alignItems: "center"
  },
  rightButtonRow: {
    position: "absolute",
    right: SAFE_AREA_PADDING.paddingRight,
    top: SAFE_AREA_PADDING.paddingTop
  },
  text: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
    textAlign: "center"
  },
  message: {
    position: "absolute",
    left: SAFE_AREA_PADDING.paddingLeft,
    bottom: SAFE_AREA_PADDING.paddingBottom
  }
});

export { cameraStyles };
