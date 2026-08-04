// imports
import editIcon from "./assets/Vector.svg";
import trashIcon from "./assets/trash.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // states e variáveis

  // ------ ATIVIDADE -------
  // criar um state chamado
  // tasklist como iniciando com um array de
  // objetos [{id: 1, descricao: "zuuuz"}]
  // já preenchido com 4 tarefas

  // em seguida fazer um map e gerar os cards (article)
  // com todas as tarefas

  const [tasklist, setTasklist] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [idToEdit, setIdToEdit] = useState(0);
  // funções e effects
  // CRUD

  // Read (Get)
  const getTaks = async () => {
    try {
      // chamar a api
      const APIReturn = await axios.get("http://localhost:3000/taskpoin")
      const dataAPI = await APIReturn.data
      console.log(dataAPI);

      // e armazenar os dados no state (tasklist)
      setTasklist(dataAPI)
    } catch (error) {
      alert("Erro ao carregar os dados")
      console.log(error);
    }
  }

  // Create (Post)
  const createTask = async (e) => {
    e.preventDefault(); //parar o comportamento padrão do form (recarregar a página)

    if (taskValue.trim().length === 0) {
      alert("Preencha o texto da tarefa")
      return false
    }

    try {
      const APIReturn = await axios.post("http://localhost:3000/taskpoin",
        { descricao: taskValue })

      alert("Tarefa criada com sucesso")
      getTaks() // atualizar a lista de tarefas

    } catch (error) {
      alert("Erro ao criar a tarefa")
      console.log(error);
    }




  };

  // Update (Put/Patch)
  const putTask = (taskItem) => { 
    setTaskValue(taskItem.descricao)
  setEditMode(true)
  setIdToEdit(taskItem.id)
  }

  

  const confirmPutTask = async(e) => { 
    e.preventDefault();
    if(taskValue.trim().length === 0){
      alert("Preencha o texto da tarefa")
      return false
    }

    try {
      axios.put(`http://localhost:3000/taskpoin/${idToEdit}`, { descricao: taskValue })
    alert("Tarefa editada com sucesso")
    getTaks() // atualizar a lista de tarefas
    setEditMode(false)
    settoEdit(0)
    setTaskValue("")
    }
    
    catch (error) {
      alert("Erro ao editar a tarefa")
      
    }
  };

  // Delete (Delete)
  const deleteTask = async (id) => {

    const querApagar = window.confirm("Deseja realmente apagar a tarefa?")
    if (!querApagar) {
      return false
    }

    try {
      await axios.delete(`http://localhost:3000/taskpoin/${id}`)
      alert("Tarefa deletada com sucesso")
      getTaks() // atualizar a lista de tarefas
    }
    catch (error) {
      alert("Erro ao deletar a tarefa")
      console.log(error);
    }
  }
    // roda na montagem do componente - ciclo de vida dos componentes React
    useEffect(() => {
      getTaks()
    }, [])

    return (
      <>
        <header className="header-section">
          <h1 className="header-section__title">React List</h1>
        </header>

        <main className="body-section">
          <form className="cad-task" onSubmit={editMode ? confirmPutTask : createTask}>
            <input
              type="text"
              className="cad-task__entry"
              placeholder="Adicione uma tarefa"
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
            />
            <p>State:{taskValue}</p>
            <p>ID para edição: {idToEdit}</p>
            <button className="cad-task__btn-confirm">Adicionar</button>
            {editMode && (
              <button 
              className="cad-task__btn-confirm" 
              type="button"
              onClick={() => {
                setEditMode(false)
                setIdToEdit(0)
                setTaskValue("")
              }}
              >
                Cancelar Edição
              </button>
            )}
            
          </form>

          <section className="cardlist">
            {tasklist.map((task) => {
              return (
                <article className="cardtask" key={task.id}>
                  <p className="cardtask__task-text">
                    {task.descricao}
                  </p>

                  <div className="cardtask__icon-box">
                    <div className="cardlist__icon">
                      <img
                        src={editIcon}
                        alt="Imagem de uma caneta - ação editar tarefa"
                        onClick={() => putTask(task)}
                      />
                    </div>
                    <div className="cardlist__icon">
                      <img
                        src={trashIcon}
                        alt="Imagem de uma lixeira - ação excluir tarefa"
                        onClick={() => deleteTask(task.id)}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </main>

        <footer className="footer-section">
          <p className="footer-section__right-text">
            2026 React List - Todos os direitos reservados
          </p>
        </footer>
      </>
    );
  }

  export default App;
