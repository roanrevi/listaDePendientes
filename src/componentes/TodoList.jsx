import React, { useContext, useState } from 'react'
import { TodoCartContext } from '../context/TodoContext';
import TodoItem from './TodoItem'
import '../css/TodoList.css'
import LoadingTodo from './LoadingTodo'
import ErrorTodo from './ErrorTodo'
import Modal from './Modal'



const TodoList = () => {
    const {setTodos,todos,loading,error,completeTodo,deletedTodo,searchedTodos,openModal}=useContext(TodoCartContext)

    return (
    < >
    {openModal && (<Modal/>)}
    <div className='container'> 
        <div className='contenedor'>
        {loading && <LoadingTodo/>}
        {error==true ? <h2><ErrorTodo/> </h2> : (!loading && searchedTodos.length===0 ) ?<h2>¡No tienes pendientes, crea el primero lo antes posible!</h2> : <h2>Tus pendientes al dia de hoy </h2>
        
        }  
        
            <ul className='listas'>
                {/* renderiza todos los componentes que esten dentro de este componente con la estructura que tenga en contenedor */}
                    {searchedTodos.map(todo=>(
                    <TodoItem key={todo.text}
                    text={todo.text}
                    daysTotal={todo.daysTotal}
                    completed={todo.completed}
                    todos={todos}
                    setTodos={setTodos}
                    dateOpen={todo.dateOpen}
                    dateClose={todo.dateClose}
                    deletedTodo={() =>deletedTodo(todo.text)}
                    onComplete={() => completeTodo(todo.text)}/>
                ))}
            </ul>
        </div>
    </div>


    </>
    )
}

export default TodoList