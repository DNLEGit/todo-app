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

   /* la funcion React.useState es la que se encarga de agarrar los valores que detecta la funcion onChange y guardarlos en un arreglo.
   Esto funciona principalmente para que cuando la funcion onChange detecte el cambio este se vea impactado en la pantalla.
   Crea una copia del dom en una maquina virtual para luego del cambio de algun estado compararla con la original y solo
   renderizar los elementos que se modificaron*/
   const [searchValue, setSearchValue] = React.useState('');

  /* Creamos un arreglo que contenga los estados de los todos */
  const [todos, setTodos] = React.useState(defaultTodos);

  /* completed todos usa una funcion de maejo de arreglos que es filter que recive una arrow funtion que devuelve el estado de 
  la variable, en este caso especifico devuelve un arreglo con los valores verdaderos*/
  const completedTodos = todos.filter(todo => !!todo.completed).length;

  /* contamos la cantidad de todos totales en el arreglo de todos */
  const totalTodos = todos.length;

  const serachedTodos = todos.filter(
    (todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    }
  );
/* Esta funcion es la que se encarga de modificar el estado del todo a completado */
  const completeTodos = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }
/* Esta funcion se encarga de borrar de la pantalla los todos que querramos */
  const deleteTodos = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  
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
  );
}
//Aca estamos creando un nuevo componente que vamos a llamar dentro del primero que ya teniamos para que se muestre en pantalla



export default App;
