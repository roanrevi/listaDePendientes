import React from 'react'
import '../css/TodoItem.css'
import { FaTrash } from "react-icons/fa";


const TodoItem = ({text, completed,  deletedTodo,onComplete,dateClose,dateOpen,daysTotal}) => {


    return (
    <>
    <li className='list_item'>
    {!completed&&
        <input className="check" type="checkbox"  onChange={onComplete} />  }  
        <p className={`tarea_pendiente ${completed && "completed"}`}>{text}</p>
        <div className='fechas'>
            <label >Apertura:</label>
            <label >{dateOpen}</label>            
        </div>
        <div className='fechas'>
            <label >Cierre:</label>
            <label >{dateClose}</label>             
        </div>
        <div className='fechas'>
            <label >Dias</label>
            <label >50</label>
        </div>
        {/* <img className={`trash delete`} src="../img/icons8.svg"  alt="borrar" onClick={deletedTodo}/> */}
        <FaTrash className={`trash delete`} onClick={deletedTodo}/>

    </li>
            
    </>
    )
}

export default TodoItem