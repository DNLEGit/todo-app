import React from 'react'
import './TodoList.css'
/* Componente todo list, este recive como parametro props, esto sirve para poder retornar codigo js con el componente*/
function TodoList(props) {
  return (
    <ul className='TodoList'>
      {/* De esta manera podremos devolver items todo item de forma dinamica */}
      {props.children}

    </ul>
  )
}

export {TodoList};