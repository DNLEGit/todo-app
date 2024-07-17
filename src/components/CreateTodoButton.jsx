import React from 'react'
import '../styles/CreateTodoButton.css'

/* Compoente todo button */


function CreateTodoButton() {
  return (
    <button 
      className='CreateTodoButton'
      /* La funcion onClick se encarga de capturar el evento de hacerle clicl al boton para luego poder usar el input con la finalidad
      que le querramos dar */
      onClick={() => console.log('Hiciste click')}
    >+</button>
  )
}

export default CreateTodoButton;