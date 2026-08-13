import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Styles } from "./Styles";
import { Header} from "./componets/header/Header.jsx";
import { FormTask } from "./componets/frmCadTask/FormTask.jsx";
import { TaskList } from "./componets/taskList/TaskList";

import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={Styles.safeArea}>
        <TaskProvider>
          <View style={Styles.container}>
            <Header />
            <FormTask />
            <TaskList />

            <StatusBar style="auto" />
          </View>
        </TaskProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;