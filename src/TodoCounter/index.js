import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext';

/* Componente todo counter, Este esta reciviendo los parametros total y completed que son props que vienen de otros componentes
para de esta manera poder hacer que el todo counter muestre de forma dinamica la cantidad de todos completados y la cantidad total*/

function TodoCounter() {
  
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className='TodoCounter'>

      {/* De esta manera insertamos las propiedades en el jsx */}
    Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs

    </h1>
  )
}

export {TodoCounter};