import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from "react";
import Swal from 'sweetalert2'


export const TodoCartContext=createContext();
const TodoContext = ({children}) => {
    
    let parsedTodos;
    const [todos, setTodos] =useState([]);
    const [loading, setLoadig] =useState(true);
    const [error, setError] =useState(false);
    const [openModal, setOpenModal]=useState(false)

    

    //Traigo la informacion de localStorage
    useEffect(()=>{
        setTimeout(() => {
        try {
        const localStorageTodos=localStorage.getItem('PENDIENTES_V1');    
        if (!localStorageTodos){
            localStorage.setItem('PENDIENTES_V1',JSON.stringify(initialValue));
            parsedTodos=initialValue;
        } else{
            parsedTodos=JSON.parse(localStorageTodos)
            
            setTodos(parsedTodos);
            setLoadig(false);
        };
        const congrats = (()=>{
        if(totalTodos === completedTodos&!parsedTodos)
                {Swal.fire({
                title: "Felicidades!",
                text: "Ya completaste todos tus pendientes, continua con esta gran labor",
                icon: "success"
                });}                
            })
            congrats()        
        } catch (error) {
            setLoadig(false);
            setError(true);
        }
        }, 3000);    
    },[]);

    //Realizo busqueda de ToDos
    const [searchValue, setSearchValue]=useState('');
        const searchedTodos= todos.filter((todo)=>{
        const todoText=todo.text.toLocaleLowerCase();
        const searchText=searchValue.toLocaleLowerCase()
        return todoText.includes(searchText)
        });
        
        const saveTodos=(newTodos)=>{
            localStorage.setItem('PENDIENTES_V1', JSON.stringify(newTodos));
            setTodos(newTodos);
        }
        const addTodo=((text)=>{
            const newTodos = [...searchedTodos]; 
            newTodos.push({
                text, 
                completed:false,
                dateOpen:new Date().toString(),                
            })
            saveTodos(newTodos);
            
        })

             // buscar el pendiente completado, lo que hace es cambiar el estado para poder enviarlo nuevamente al itemlist
        const deletedTodo= (text)=>{
            const newTodos = [...searchedTodos]; 
            const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
            newTodos.splice(todoIndex,1);        
            saveTodos(newTodos);       
        };
        const completeTodo = (text) => {
            const newTodos = [...searchedTodos];
            const todoIndex = newTodos.findIndex((todo) => todo.text == text);
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
            };   
    
 
    //defino la cantidad de pendientes 
        const completedTodos=todos.filter(todo=>todo.completed
        ).length;
        const totalTodos=todos.length;
    return (
        <TodoCartContext.Provider value={{setTodos,searchValue, setSearchValue,
            loading,error,searchedTodos,completedTodos,totalTodos,parsedTodos, openModal, setOpenModal,saveTodos,completeTodo,deletedTodo,addTodo}}>
            {children}
        </TodoCartContext.Provider>
    )
};
export default TodoContext;

  // cantidad de Todos por defecto 
  // const defaulTodos=[{text:"Estudiar React", completed:true, dateOpen:"25/3/24", dateClose:"1/4/24",daysTotal:""},{text:"Estudiar SmartBemmo", completed:true, dateOpen:"25/3/24", dateClose:"1/4/24",daysTotal:""},{text:"Limpiar la maquina de cafe", completed:false, dateOpen:"25/3/24", dateClose:"0/0/1900",daysTotal:""},{text:"Surtir las maquinas", completed:false, dateOpen:"25/3/24", dateClose:"0/0/1900",daysTotal:""}]
  // localStorage.setItem('PENDIENTES_V1',JSON.stringify(defaulTodos));
  // localStorage.removeItem('PENDIENTES_V1, defaulTodos');-----//Borrra el localStorage se debe hacer en el navegador
  //Estado del valor de busqueda
  //Define y trae lo que se tenga en el localStorage