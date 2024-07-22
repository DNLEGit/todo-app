import {TodoItems} from '../TodoItems'
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    return (
        <>
            <TodoContext.Consumer>
                {() =>(
                
                <>
                {/* Llamamos al componente TodoCounter y le pasamos las props necesarias */}
                <TodoCounter />

                {/* Llamamos al componente TodoSearch y le pasamos las props necesarias */}
                <TodoSearch/>       
                
                <TodoList>
                    {loading && <TodosLoading />}
                    {error && <TodosError />}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                   
                    {searchedTodos.map(todo => (
                        <TodoItems
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>

               {/*  /* Llamamos al componente CreateTodoButton, Cuando se hace click en este se cambia el estado de la ventana modal  */ }
                <CreateTodoButton setOpenModal = {setOpenModal}/>

                {/* Verificamos el estado del componente modal y lo llamamos */}
                {openModal && (
                    <Modal>
                        <TodoForm setOpenModal = {setOpenModal}/>
                    </Modal>
                )}
                
                </>
                
                )}
            </TodoContext.Consumer>
            
        </>
    );
}

export { AppUI };
