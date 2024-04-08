import React from 'react'
import TodoItem from './TodoItem'
import '../css/TodoList.css'
import { useEffect } from 'react'

const TodoList = ({setTodos, todos,loading, setLoading}) => {
    useEffect(()=>{
    
    })
    const saveTodos=(newTodos)=>{
        localStorage.setItem('PENDIENTES_V1', JSON.stringify(newTodos));
        setTodos(newTodos);

    }
     // buscar el pendiente completado, lo que hace es cambiar el estado para poder enviarlo nuevamente al itemlist
    const deletedTodo= (text)=>{
        const newTodos = [...todos]; 
        const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
        console.log(todoIndex)
        newTodos.splice(todoIndex,1);        
        saveTodos(newTodos);       
    };
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text == text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);

    };

    return (
    < >
    <div className='container'> 
        <div className='contenedor'>
        {loading && <p>Estamos cargando......</p>}
        
        {(!loading && todos.length===0 ) ?<h2>¡Crea tu primer pendiente!</h2> : <h2>Estos son tus pendientes</h2>}    
        
            <ul className='listas'>
                {/* renderiza todos los componentes que esten dentro de este componente con la estructura que tenga en contenedor */}
                    {todos.map(todo=>(
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