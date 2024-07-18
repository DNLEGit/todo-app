import React from 'react'
import '../styles/TodoSearch.css';
/* Componente todo search */
function TodoSearch() {

  /* la funcion React.useState es la que se encarga de agarrar los valores que detecta la funcion onChange y guardarlos en un arreglo.
  Esto funciona principalmente para que cuando la funcion onChange detecte el cambio este se vea impactado en la pantalla.
  Crea una copia del dom en una maquina virtual para luego del cambio de algun estado compararla con la original y solo
  renderizar los elementos que se modificaron*/
  const [searchValue, setSearchValue] = React.useState('');

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

export default TodoSearch;