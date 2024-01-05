import { StyleSheet } from "react-native";
import { border, color, font, spacing } from "../../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45);",
  },
  modal: {
    backgroundColor: color.white,
    padding: spacing.padding.medium,
    borderRadius: border.radius.normal,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
    elevation: 10
  },
  icon: {
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontSize: font.title.size,
    padding: spacing.padding.extraSmall,
    fontFamily: 'Poppins-SemiBold',
    color: font.title.color,
  },
  message: {
    marginHorizontal: spacing.margin.extraSmall,
    marginVertical: spacing.margin.small,
    fontSize: font.text.size,
    color: font.text.color,
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing.margin.medium,
  },
  actionsButton: {
    borderRadius: border.radius.extraSmall,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  actionsText: {
    padding: 12,
    fontFamily: 'Poppins-SemiBold',
    fontSize: font.text.size
  },
  secondary: {
    backgroundColor: color.white,
    borderWidth: border.size.medium,
    borderColor: color.primary,
  },
  cancel: {
    backgroundColor: color.white,
    borderWidth: border.size.medium,
    borderColor: border.color.red,
  },
  singleAction: {
    width: "92%",
  },
  multipleAction: {
    width: "45%",
  },
  disabled: {
    opacity: 0.5,
  },
});
