import React from 'react'
import './TodoItems.css'
import { FaDeleteLeft } from "react-icons/fa6";
import { BsBookmarkCheckFill } from "react-icons/bs";

/* Este es el componente todo items  */


function TodoItems({ text, completed, onComplete, onDelete}) {
  return (
    <li className="TodoItem">
      <BsBookmarkCheckFill
      className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}
      onClick={onComplete}
       />
        {/*   <span 
            className={`Icon Icon-check ${completed ? 'Icon-check--active' : ''}`}
            onClick={onComplete}
            >V</span> */}

      <p className={`TodoItem-p ${completed ? 'TodoItem-p--complete' : ''}`}>{text}</p>
      <FaDeleteLeft 
        className="Icon Icon-delete"
        onClick={onDelete}
      />
    </li>
  );
}

export { TodoItems };



