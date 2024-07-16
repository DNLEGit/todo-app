import TodoItems from './components/TodoItems';
import TodoCounter from './components/TodoCounter';
import TodoSearch from './components/TodoSearch';
import TodoList from './components/TodoList';
import CreateTodoButton from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text : 'Terminar el curso de reat', completed : false },
  { text : 'Cortar cebolla', completed : true },
  { text : 'Labar la ropa', completed : false },
  { text : 'Hacer ejercicio', completed : false }
];



//Esta es la forma de los componentes en reac, todo lo que esta aca abajo son componentes que si bien
//son parecidos a la sintaxis que ocupamos con html es XML que utiliza etiquetas para estructurar y organizar los datos dentro de un 
//documento que luego react interpreta y renderiza en la pagina como etiquetas html

//La funcion App es el componente principal 
function App() {
  return (
    <React.Fragment>

      {/* Este es el llamado al componente TodoItem que creamos en la parte de abajo, javascript permite la creacion de 
      componentes que pueden ser llamados desde otros para poder mostrarse en pantalla */}

      {/* Esta es una forma de pasar parametros al componente para que este los muestre */}
      <TodoCounter completed={12} total={50} />

      <TodoSearch/>

      <TodoList>

        {/* En este caso, si vamos a la implementacion del componente todolist podemos ver que se le asigna como prop
        el prop.children en el return, esto funciona ya que todo lo que este dentro de las etiquetas de apretura y cierre
        se vera denominado automaticamente por react como la prop.children, en este caso serian los TodoItems, pero podria ser
        con cualquier otro componente que estemos usando dentro de la etiqueta TodoList */}

        {/* Aca lo que estamos haciendo es crear un arreglo que contiene los todos y se los estamos pasando al componente
        TodoItem para que este lo procese y lo renderice de forma adecuada, tambien generamos que le podamos pasar todos
        los Todos que se quieran de manera dinamica ya que la funcion defaultTodos.map se encarga de iterar por todos los
        elementos que hay dentro del arrego defaultTodos */}
      {defaultTodos.map(todo => (
        <TodoItems key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}

   {/* Podemos llamar al componente varias veces para ahorrar lineas de codigo y hacer que este sea mas comprensible
      en vez de poner mas lineas lo reemplazamos por las llamadas al componente TodoItems */}

      </TodoList>
      
    <CreateTodoButton/>

   

      
    </React.Fragment>
  );
}
//Aca estamos creando un nuevo componente que vamos a llamar dentro del primero que ya teniamos para que se muestre en pantalla



export default App;
