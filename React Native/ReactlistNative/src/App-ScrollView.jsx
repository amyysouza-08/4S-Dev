import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView 
        style={styles.safeArea} 
        contentContainerStyle={styles.content}
      >
        <ScrollView style={styles.container}>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>
          <Text style={styles.text}>
            Bem vindo ao React List, um aplicativo nativo feito com React Native
            e Expo
          </Text>

          <Text style={styles.text}>Eduardo Mendes da Costa</Text>
          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#fff",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  // conteúdo da SroWview
  content: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 30,
    marginBottom: 20,

  }
});
