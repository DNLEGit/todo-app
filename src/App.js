import React from 'react';
import { AppUI } from './AppUI';



      /* Esta es la manera de hacer un custom hook para evitar tanta logica dentro de el componente app,
      la logica detras de hacer este tipo de funciones es abstraer de la app la logica que se usa para el local storage
      para mejorar la experiencia nuestra como developers por que lo hace mas legible */

      /* Se podria, por cuestiones de orden, mover el custom hook a otro archivo e importarlo desde el archivo app, yo no tenia ganas
      de hacerlo =) */
    function useLocalStorage(itemName, initialValue) {

      /* Creamos una base de datos local para almacenar los todos */
    
      /* Creamos un arreglo que contenga los estados de los todos */
      const [item, setItem] = React.useState(initialValue);

      const [loading, setLoading] = React.useState(true);

      const [error, setError] = React.useState(false);

      React.useEffect(() => {
        const timeoutId = setTimeout(() => {
          try {
            let parsedItem;
            let localStorageItem = localStorage.getItem(itemName);
      
            /* Preguntamos si la base de datos local está vacía, y en caso de que lo esté se le asignan valores por defecto */
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }
            setLoading(false);
            } catch (error) {
            setLoading(false);
            setError(true);
            }
        }, 1000); // Cambia 1000 al tiempo deseado en milisegundos
      
        // Limpia el timeout cuando el componente se desmonte
        return () => clearTimeout(timeoutId);
      }, [initialValue, itemName]);

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
    return {
      item,
      saveItem,
      loading,
      error}
    };

      //Esta es la forma de los componentes en reac, todo lo que esta aca abajo son componentes que si bien
      //son parecidos a la sintaxis que ocupamos con html es XML que utiliza etiquetas para estructurar y organizar los datos dentro de un 
      //documento que luego react interpreta y renderiza en la pagina como etiquetas html

      //La funcion App es el componente principal 
function App() {
   
       /* Creamos un arreglo que contenga los estados de los todos */
    const {
      item: todos,
      saveItem: saveTodos,
      loading, 
      error
    } = useLocalStorage('TODOS_V1', []);

      /* la funcion React.useState es la que se encarga de agarrar los valores que detecta la funcion onChange y guardarlos en un arreglo.
      Esto funciona principalmente para que cuando la funcion onChange detecte el cambio este se vea impactado en la pantalla.
      Crea una copia del dom en una maquina virtual para luego del cambio de algun estado compararla con la original y solo
      renderizar los elementos que se modificaron*/
    const [searchValue, setSearchValue] = React.useState('');

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
      saveTodos(newTodos);
    }
      /* Esta funcion se encarga de borrar de la pantalla los todos que querramos */
    const deleteTodos = (text) => {
      const newTodos = [...todos]
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
  
  return (
    /* Este componente AppUI se encarga de todo lo que se muestra en pantalla, para mejorar el nivel de abstraccion, como
    tambien mejorar la legibilidad de la app  */
    <AppUI
    completeTodos={completeTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    serachedTodos={serachedTodos}
    completedTodos={completedTodos}
    deleteTodos={deleteTodos}
    loading={loading} 
    error={error}
    />
  );
}
//Aca estamos creando un nuevo componente que vamos a llamar dentro del primero que ya teniamos para que se muestre en pantalla



export default App;
