import React from 'react';

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [todos, setTodos] = React.useState([]); // memory A

  function addTodo(title) {
    const todoItem = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos(prevState => [...prevState, todoItem])
  }
  function handleDeleteAll(){
    console.log('delete all')
    setTodos([]);
  }
  function handleDeleteCompleted(todoId){
    setTodos(prevState => {
      const newTodo = prevState.filter(todo => todo.id !== todoId)
      return newTodo

    })
  }
  function handleCompletedTodo(todoId, checked){
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if(todoIndex === -1) return;
    const clonedTodos = [...todos];
    clonedTodos[todoIndex].completed = true;
    setTodos(clonedTodos)
  }
 
  return (
    <AppContext.Provider
      value={{
        todos,
        addTodo,
        handleCompletedTodo,
        handleDeleteCompleted,
        handleDeleteAll
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);