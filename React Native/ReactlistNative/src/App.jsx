import { StatusBar } from "expo-status-bar";
import {  Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles";
import { Header } from "./componets/header/Header";
import { FormTask } from "./componets/formTask/FormTask";


function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeArea}>
        <Header />
        <FormTask />
        <View style={Styles.container}>
          <Text>My App</Text>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}



export default App;
