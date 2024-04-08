import CreateTodoButton from './componentes/CreateTodoButton'
import TodoCount from './componentes/TodoCount'
import TodoList from './componentes/TodoList'
import TodoSearch from './componentes/TodoSearch'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'


function App() {
  // cantidad de Todos por defecto 
  // const defaulTodos=[{text:"Estudiar React", completed:true, dateOpen:"25/3/24", dateClose:"1/4/24",daysTotal:""},{text:"Estudiar SmartBemmo", completed:true, dateOpen:"25/3/24", dateClose:"1/4/24",daysTotal:""},{text:"Limpiar la maquina de cafe", completed:false, dateOpen:"25/3/24", dateClose:"0/0/1900",daysTotal:""},{text:"Surtir las maquinas", completed:false, dateOpen:"25/3/24", dateClose:"0/0/1900",daysTotal:""}]
  // localStorage.setItem('PENDIENTES_V1',JSON.stringify(defaulTodos));
  // localStorage.removeItem('PENDIENTES_V1, defaulTodos');-----//Borrra el localStorage se debe hacer en el navegador
  //Estado del valor de busqueda
  //Define y trae lo que se tenga en el localStorage
  let parsedTodos;
//Estado de tareas
const [todos, setTodos] =useState([]);
const [loading, setLoadig] =useState([true]);
const [error, setError] =useState([false]);
  useEffect(()=>{
    //Traigo del localStorage el valor que se tiene en PENDIENTES_V1
    const localStorageTodos=localStorage.getItem('PENDIENTES_V1');    
      
    // genero la variable para hacer el parseo

    //condicional que pregunta si tiene algo en el localStorage
    if (!localStorageTodos){
      //envia al localstorage y define el array en caso de que este vacio para no crashear la aplicacion 
      localStorage.setItem('PENDIENTES_V1',JSON.stringify(initialValue));
      parsedTodos=initialValue;
    } else{
      //si localStorage no esta vacio trae la informacion para parsearla y poder verla como un array
      parsedTodos=JSON.parse(localStorageTodos)
      setTodos(parsedTodos);
      setLoadig(false);
    };
    const congrats = (()=>{
        
      if(totalTodos === completedTodos&!parsedTodos)
        {
        Swal.fire({
          title: "Felicidades!",
          text: "Ya completaste todos tus pendientes, continua con esta gran labor",
          icon: "success"
        });}
          
    })
    congrats()
  },[]);
  
  
  const [searchValue, setSearchValue]=useState('');
  
  //Cantidad de todos completados
  const completedTodos=todos.filter(todo=>!!todo.completed
  ).length;
  //Cantidad total de todos
  const totalTodos=todos.length;
  // buscardor de palabras transformando las palabras en minusculas
  const searchedTodos= todos.filter((todo)=>{
    const todoText=todo.text.toLocaleLowerCase();
    const searchText=searchValue.toLocaleLowerCase()
  return todoText.includes(searchText)
  });
  


  return (
    <>
      <TodoCount totalTodos={totalTodos} completedTodos={completedTodos}/>
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList loading={loading} setLoadig={setLoadig}
        todos={searchedTodos} setTodos={setTodos} parsedTodos={parsedTodos} />
      <CreateTodoButton/>
      
    </>
  )
}

export default App
