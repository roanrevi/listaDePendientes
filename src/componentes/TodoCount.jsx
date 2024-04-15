import React, { useContext} from 'react'
import { TodoCartContext } from '../context/TodoContext';
import '../css/TodoCount.css'


const TodoCount = () => {
    const {totalTodos,completedTodos}=useContext(TodoCartContext)
    
    return (
        

     <h1>Ya completaste {completedTodos} de {totalTodos} pendientes</h1>
    )
}

export default TodoCount