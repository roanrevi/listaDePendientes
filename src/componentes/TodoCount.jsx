import React from 'react'
import '../css/TodoCount.css'

const TodoCount = ({totalTodos,completedTodos}) => {

    return (
    <h1>Ya completaste {completedTodos} de {totalTodos} pendientes</h1>
    )
}

export default TodoCount