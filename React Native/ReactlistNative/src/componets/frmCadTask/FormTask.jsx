import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { FormTaskStyles } from "./FormTaskStyles"
import { useContext, useState } from "react"
import { TaskContext } from "../../context/TaskContext"
import { putTask } from "../../context/TaskContext"

export const FormTask = () => {
    const { setIdToEdit, postTask, getTasks, taskValue, setTaskValue, editMode, setEditMode} = useContext(TaskContext)

    const saveTask = () => {
        console.log(`Texto Digitado ${taskValue}`)
        // chama o cadastrar global da task
        postTask(taskValue)
        getTasks() // lista as tarefas novamnete

        Alert.alert(
            "Adicionar Tarefa", 
            "Tarefa adicionada!",[ 
                {text: "ok"},
                {text: "ok 2", 
                onPress: () => 
                setTaskValue ('ok 2 Pressed')}
            ]
        )
    }

    return (
        <View style={FormTaskStyles.formTaskBox}>
            <TextInput 
                style={FormTaskStyles.taskInputName}
                placeholder="Adicione uma tarefa"
                value={taskValue}
                onChangeText={(textoDigitado) => {
                    setTaskValue(textoDigitado)
                }}
            />
            <TouchableOpacity
                style={FormTaskStyles.taskButton}
                onPress={() => {
                    if(editMode)
                        putTask();
                    else
                    saveTask()
                    }}>
                <Text style={FormTaskStyles.taskButtonText}>Salvar</Text>
            </TouchableOpacity>

                {/*botão cancelar*/}
                {editMode && (
                <TouchableOpacity
                style={FormTaskStyles.taskButton}
                onPress={() => {
                    setEditMode(false)
                    setTaskValue("")
                    setIdToEdit(0)
                }}
            >
                <Text style={FormTaskStyles.taskButtonText}>Cancelar</Text>
            </TouchableOpacity>)}

            
                <Text style={FormTaskStyles.taskButtonText}
                >{taskValue}</Text>
        </View>
    )
}