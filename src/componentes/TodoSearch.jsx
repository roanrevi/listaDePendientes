import '../css/TodoSearch.css'
import {useContext } from 'react'
import { TodoCartContext } from '../context/TodoContext';


const TodoSearch = () => {
    const {searchValue,setSearchValue}=useContext(TodoCartContext)
    return (
    <>
    <div className='todo_search'>
        <div className="form__group field">
            <input type="input"  value={searchValue}  onChange={(event)=>{
                setSearchValue(event.target.value)
            }} className="form__field" placeholder="........... " required=""/>
            <label  className="form__label">Busca tu pendiente</label>
        </div>
    </div>
    </>
    )
}

export default TodoSearch