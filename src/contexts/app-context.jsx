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
      const todoIndex = prevState.findIndex(todo => todo.id === todoId);

      if(todoIndex === -1) return prevState;

      const newTodos = [...prevState];
      newTodos[todoIndex].completed = false;
      return newTodos
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