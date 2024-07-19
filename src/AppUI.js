import TodoItems from './components/TodoItems';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


function AppUI({
    completeTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    serachedTodos,
    completedTodos,
    deleteTodos,
    loading,
    error
}) {

return (
    <React.Fragment>

      {/* Este es el llamado al componente TodoItem que creamos en la parte de abajo, javascript permite la creacion de 
      componentes que pueden ser llamados desde otros para poder mostrarse en pantalla */}

      {/* Esta es una forma de pasar parametros al componente para que este los muestre */}
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

      <TodoList>

        {loading && <AiOutlineLoading3Quarters />}
        {error && <p>Error de carga!</p>}
        {(!loading && serachedTodos.lengt === 0) && <p>Crea tu primer TODO!</p>}

        {/* En este caso, si vamos a la implementacion del componente todolist podemos ver que se le asigna como prop
        el prop.children en el return, esto funciona ya que todo lo que este dentro de las etiquetas de apretura y cierre
        se vera denominado automaticamente por react como la prop.children, en este caso serian los TodoItems, pero podria ser
        con cualquier otro componente que estemos usando dentro de la etiqueta TodoList */}

        {/* Aca lo que estamos haciendo es crear un arreglo que contiene los todos y se los estamos pasando al componente
        TodoItem para que este lo procese y lo renderice de forma adecuada, tambien generamos que le podamos pasar todos
        los Todos que se quieran de manera dinamica ya que la funcion defaultTodos.map se encarga de iterar por todos los
        elementos que hay dentro del arrego defaultTodos */}
      {serachedTodos.map(todo => (
        <TodoItems
             key={todo.text}
             text={todo.text}
             completed={todo.completed}
             onComplete={() => completeTodos(todo.text)}
             onDelete={() => deleteTodos(todo.text)}/>
      ))}

   {/* Podemos llamar al componente varias veces para ahorrar lineas de codigo y hacer que este sea mas comprensible
      en vez de poner mas lineas lo reemplazamos por las llamadas al componente TodoItems */}

      </TodoList>
      
    <CreateTodoButton/>

    </React.Fragment>
)

}
export {AppUI};