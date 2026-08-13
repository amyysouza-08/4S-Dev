import { ScrollView, Text } from "react-native";
import { TaskListStyle } from "./TaskListStyle";
import { TaskItem } from "../taskItem/TaskItem";
import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";


export const TaskList = () => {
  
  const {listagemTarefas, getTasks}= useContext(TaskContext)
  

  // criar as funções 

    // cadTask
    const cadTask = async () => {
      
      console.log("FUNÇÃO POST EM DESENVOLVIMENTO");
      
    }
    // putTask
   
  return (
    <ScrollView style={TaskListStyle.taskListContainer}>
      {
        listagemTarefas.map((tarefa)=> {
          return(

            <TaskItem 
            key={tarefa.id}
            id={tarefa.id} 
            descricao={tarefa.descricao} />
          )
        })
      }
    </ScrollView>
  );
};