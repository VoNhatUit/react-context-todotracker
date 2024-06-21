import React from "react";

const ToDoContext = React.createContext();

export const ToDoProvider = ({ children }) => {
    const [toDos, setToDos] = React.useState([]);
    const lengthToDo = toDos.length;
  
    function addToDo() {
      const toDoItem = {
        id : id,
        todo : todo,
      }
      setToDos(prevState => ([...prevState, toDoItem]));
    }
    function onDelete(id){
        setToDos(prevState => {
          const newToDo = prevState.filter(item => item.id !== id)
          return newToDo
  
        })
      }
    function handleDeleteAll(){
        setToDos([]);
      };
    return (
      <ToDoContext.Provider
        value={{
          toDos,
          lengthTodo,
          addToDo
        }}
      >
        {children}
      </ToDoContext.Provider>
    )
  }
  
  export const useToDoContext = () => React.useContext(ToDoContext);