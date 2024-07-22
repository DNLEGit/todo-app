import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext)
  return (
    <input 
      className='TodoSearch'
      placeholder='Buscar TODO'
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log("Search Value:", event.target.value); // Verifica que searchValue se actualiza
      }}
    />
  );
}

export { TodoSearch };
