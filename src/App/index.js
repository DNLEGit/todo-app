import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// La función App es el componente principal
function App() {


    // Renderiza el componente AppUI pasando las props necesarias
    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
    );
}

export default App;

