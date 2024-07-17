import React from 'react'
import '../styles/TodoCounter.css'

/* Componente todo counter, Este esta reciviendo los parametros total y completed que son props que vienen de otros componentes
para de esta manera poder hacer que el todo counter muestre de forma dinamica la cantidad de todos completados y la cantidad total*/

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>

      {/* De esta manera insertamos las propiedades en el jsx */}
    Has completado <span>{completed}</span> de <span>{total}</span> TODOs

    </h1>
  )
}

export default TodoCounter;