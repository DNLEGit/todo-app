import React from 'react'
/* Este es el componente todo items  */
function TodoItems({ text, completed }){
    return (
      <li>
        <span>v</span>
        <p>{text}</p>
        <span>x</span>
      </li>
    );
  } 

export default TodoItems;