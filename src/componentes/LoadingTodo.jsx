import React from 'react'
import '../css/LoadingTodo.css'

const LoadingTodo = () => {
  return (
    <div>
<p>Cargando</p>
        <div className="loadingspinner">
            
        <div id="square1"></div>
        <div id="square2"></div>
        <div id="square3"></div>
        <div id="square4"></div>
        <div id="square5"></div>
        </div>
    </div>
  )
}

export default LoadingTodo