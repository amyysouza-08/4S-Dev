import { Text, View } from "react-native"
import { FormTaskstyles } from "./FormTaskStyles"

export const FormTask = () => {
    return (
        <View style={FormTaskstyles.frmCadTask}>
            <Text style={FormTaskstyles.frmCadTitle}>Cadastro de Tarefas</Text>
        </View>
    )
}