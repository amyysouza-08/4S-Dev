import { Text, View, Image, TouchableOpacity, Alert } from "react-native"
import { TaskItemStyles } from "./TaskItemStyles"
import { useContext } from "react"
import { TaskContext } from "../../context/TaskContext"

// recebe o objeto do item como prop
export const TaskItem = ( { id, descricao } ) => {
    // states globais
    const{ deleteTask, putTaskPreview} = useContext(TaskContext)

    // states
    const deleteTaskConfirm = (tarefa) => {
        // aqui vamos verificar se o usaurio quer apagar
        Alert.alert("Apagar", `Voce quer apagar "${tarefa.descricao}"`, [
            {text: "Nao"},
            {text: "Sim", onPress: () => {deleteTask(id)}},
        ])

    }

    return(
        <View style={TaskItemStyles.cardBox}>
            <Text style={TaskItemStyles.cardText}>
                {descricao}
            </Text>

            <TouchableOpacity style={[
                TaskItemStyles.cardButton, 
                TaskItemStyles.cardButtonEditColor
                ]}
                onPress={() => {
                    putTaskPreview({id, descricao})
                }}
                
                >
                <Image
                source={require("../../../assets/edit.png")}
                style={TaskItemStyles.cardButtonImage}
                />
            </TouchableOpacity>

            <TouchableOpacity style={[
                TaskItemStyles.cardButton,
                TaskItemStyles.cardButtonTrashColor
                ]}
                onPress={() => {
                    deleteTaskConfirm( {id, descricao} )
                }}>
                <Image
                style={TaskItemStyles.cardButtonImage}
                source={require("../../../assets/trash.png")}
                />
            </TouchableOpacity>

            
        </View>

        
    )
}