import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Styles";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>

        <View style={styles.container}>
          <Text style={styles.textoHello}>Hello Expo 2</Text>
          <Text style={styles.teste}>Eduardo Mendes da Costa</Text>
          <StatusBar style="auto" />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
