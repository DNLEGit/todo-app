import React from 'react'
import './TodoForm.css'
import { TodoContext } from '../TodoContext'
 
function TodoForm( {onClick} ) {

  const {
    setOpenModal,

  } = React.useContext;
  
  const onSubmit = (event) =>{
    event.preventDefault(TodoContext);
    setOpenModal(false);
}
  const onCancel = (event) => {
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea
            placeholder='Ingrese el TODO'
        ></textarea>
        <div className='Btn-container'>
            {/* Boton para agregar el todo desde el formulario */}
        <button className="Btn  Btn--add">
            <div className="sign">+</div>
            <div className="text">Create</div>
        </button>
          
          {/* Boton para cancelar el formulario */}
        <button className="Btn Btn--cancel"
                onClick={onCancel}>
            <div className="sign">x</div>
            <div className="text">Cancel</div>
        </button>
        </div>
    </form>
  )
}

export { TodoForm };