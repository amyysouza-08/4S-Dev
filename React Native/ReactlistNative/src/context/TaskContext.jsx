import axios from "axios";
import { createContext, useState } from "react";
import api from "../services/FakeAPIServices";

export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    
    const [listagemTarefas, setListagemTarefas] = useState([])
    const [taskValue, setTaskValue] = useState("")
    const [editMode, setEditMode] = useState(false)
 

    const getTasks = async () => {
        try {
            const APIReturn = await api.get("http://172.16.36.46:3000/taskpoint")
            const APIData = await APIReturn.data

            setListagemTarefas(APIData)
            
        } catch (error) {
            console.log("Deu ruim na chamada da api");
            console.log(error);
        }
    };

    // cadTask
    const postTask = async (taskValue) => {
        try{
        await api.post("http://172.16.36.46:3000/taskpoint", {descricao: taskValue});

        await getTasks()
        setTaskValue("")

        } catch (error){ 
        console.log("Problemas na chamada da API")
        console.log(error)
        }
    }

    // putTask
    const putTaskPreview = (tarefa) => {
         setTaskValue(tarefa.descricao)
        setEditMode(true)
        setIdToEdit(tarefa.id)
    }

    const putTask = async () => {
     try{
        await axios.post(`http:////172.16.36.37:8081/taskpoint/${idToEdit}`, {descricao: taskValue})
     } catch (error) {
        console.log("Erro ao editar os dados, verifique o erro")
        console.log(error)
     }
    }

    // deleteTask
    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://172.16.36.46:3000/taskpoint/${id}`)
            await getTasks()
            
        } catch (error) {
            console.log("Problemas ao apagar na API")
            console.log(error)
            
        }
        
    }

    return (
        <TaskContext.Provider
            value={{listagemTarefas, 
                setListagemTarefas, 
                getTasks, 
                postTask, 
                putTask,
                putTaskPreview,
                deleteTask,
                taskValue,
                setTaskValue,
                editMode,
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}