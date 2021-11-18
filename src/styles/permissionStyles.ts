import { StyleSheet } from "react-native";
import { CONTENT_SPACING, SAFE_AREA_PADDING } from "../Constants";

const permissionStyles = StyleSheet.create({
  fontFamily: { fontFamily: "Baloo2-Regular" },
  banner: {
    position: "absolute",
    opacity: 0.4,
    bottom: 0,
    left: 0
  },
  container: {
    ...SAFE_AREA_PADDING
  },
  permissionsContainer: {
    marginTop: CONTENT_SPACING * 2
  },
  permissionText: {
    fontSize: 17,
    fontFamily: "Baloo2-Regular"
  },
  bold: {
    fontWeight: "bold",
    fontFamily: "Baloo2-Regular"
  }
});

export { permissionStyles };
