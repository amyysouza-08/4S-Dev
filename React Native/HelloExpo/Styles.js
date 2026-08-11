import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    backgroundColor: "#ccc",
    // justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  teste: {
    color: "red",
  },
  textoHello: {
    color: "blue",
  },
});

// npx expo install react-dom react-native-web @expo/metro-runtime
// npx expo install react-native-safe-area-context