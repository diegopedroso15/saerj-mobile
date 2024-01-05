import { StyleSheet } from "react-native";
import { border, color, font } from "../../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 15,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 12,
    marginBottom: 10,
    width: "100%",
    borderRadius: 12,
  },
  focusedInput: {
    borderColor: "#272D2F",
  },
});
