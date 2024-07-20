import React from 'react'
import './TodoSearch.css';
/* Componente todo search */
function TodoSearch({searchValue, setSearchValue}) {
  return (
    <input 
      className='TodoSearch'
      placeholder='Buscar TODO'

      value={searchValue}

      /* la funcion onChange se encarga de captar la modificacion del estado de el input en todo momento tanto cuando escribimos
      como cuando borramos dentro de la barra del input */
      onChange={(event) => {setSearchValue(event.target.value)}}
       />
  )
}

export {TodoSearch};