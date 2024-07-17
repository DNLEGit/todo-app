import React from 'react'
import '../styles/TodoSearch.css';
/* Componente todo search */
function TodoSearch() {
  return (
    <input 
      className='TodoSearch'
      placeholder='Cortar cebollas'
      onChange={(event) => console.log(event.target.value)}
       />
  )
}

export default TodoSearch;