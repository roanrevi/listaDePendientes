import CreateTodoButton from './componentes/CreateTodoButton'
import TodoCount from './componentes/TodoCount'
import TodoList from './componentes/TodoList'
import TodoSearch from './componentes/TodoSearch'
import TodoContext from './context/TodoContext'



function App() {
  return (
    <>
      <TodoContext>
        <TodoCount/>
        <TodoSearch/>      
        <TodoList/>
        <CreateTodoButton/>
      </TodoContext>
    </>
  )
}

export default App
