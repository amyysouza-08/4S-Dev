import { StyleSheet } from "react-native";
// style do header
export const HeaderStyles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 100,
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "green",
    backgroundColor: "#1D2135"
  },

  headerTitle: {
    width: "30%",
    fontSize: 24,
    paddingBottom: 15,
    textAlign: "center",
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderBottomColor: "green",
    color: "#fff"
  },
});