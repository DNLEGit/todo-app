import React from "react";
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider( {children} ){
        // Usamos el custom hook para manejar el estado de los todos
        const {
            item: todos,
            saveItem: saveTodos,
            loading,
            error
        } = useLocalStorage('TODOS_V1', []);
    
        // Estado para el valor de búsqueda
        const [searchValue, setSearchValue] = React.useState('');
        //Estadp para la ventana modal de add todos
        const [openModal, setOpenModal] = React.useState(false);

    
        // Calcula la cantidad de todos completados
        const completedTodos = todos.filter(todo => !!todo.completed).length;
    
        // Calcula la cantidad total de todos
        const totalTodos = todos.length;
    
        // Filtra los todos según el valor de búsqueda
        const searchedTodos = todos.filter(todo => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase());
        });

        const addTodo = (text) => {
            const newTodos = [...todos];
            newTodos.push({
                text: text,
                completed: false,
            });
            saveTodos(newTodos)
        }
    
        // Marca un todo como completado
        const completeTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(todo => todo.text === text);
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
        };
    
        // Elimina un todo
        const deleteTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex(todo => todo.text === text);
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos);
        };

    return (
    <TodoContext.Provider value={{
        completeTodo,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completedTodos,
        deleteTodo,
        loading,
        error,
        openModal,
        setOpenModal,
        addTodo,
    }}>
        {children}
    </TodoContext.Provider>
)
}

export { TodoContext , TodoProvider};