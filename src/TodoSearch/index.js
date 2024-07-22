import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
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
