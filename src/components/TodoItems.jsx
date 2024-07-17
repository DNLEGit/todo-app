import React from 'react'
import '../styles/TodoItems.css'

/* Este es el componente todo items  */


function TodoItems({ text, completed }) {
  return (
    <li className="TodoItem">
      
      <span className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}>V</span>

      <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>

      <span className="Icon Icon-delete">X</span>
    </li>
  );
}

export default TodoItems;



