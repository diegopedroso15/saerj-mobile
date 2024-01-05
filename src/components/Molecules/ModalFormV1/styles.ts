import { StyleSheet } from "react-native";
import { border, color, font } from "../../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45);",
  },
  modal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.1,
  },
  icon: {
    alignItems: "center",
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    color: "#272D2F",
  },
  message: {
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 13,
    color: "#272D2F",
    textAlign: "center",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 8,
  },
  actionsButton: {
    borderRadius: 8,
    backgroundColor: "#272D2F",
    width: "46%",
    alignItems: "center",
    justifyContent: "center",
  },
  actionsText: {
    fontWeight: "bold",
    paddingVertical: 12,
  },
  primary: {
    // default
  },
  secondary: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#272D2F",
  },
  cancel: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#F03636",
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
  inputs: {
    gap: 10,
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#272D2F",
    borderRadius: 8,
    padding: 10,
  }
});
