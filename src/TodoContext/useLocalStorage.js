import React from "react";

// Este custom hook maneja la lógica para almacenar y recuperar datos del localStorage

function useLocalStorage(itemName, initialValue) {
    // Estados para almacenar el item, manejar el estado de carga y errores
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            try {
                let localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                // Si no hay datos en localStorage, inicializa con valores por defecto
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    // Si hay datos, los parsea y actualiza el estado
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000); // Simula un retardo en la carga de datos (1000 ms)

        // Limpia el timeout cuando el componente se desmonte
        return () => clearTimeout(timeoutId);
    }, [initialValue, itemName]);

    // Función para guardar nuevos datos en localStorage y actualizar el estado
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    // Retorna los datos necesarios para ser usados en un componente
    return {
        item,
        saveItem,
        loading,
        error
    };
}

export { useLocalStorage }
