import React from "react";

// Este custom hook maneja la lógica para almacenar y recuperar datos del localStorage
function useLocalStorage(itemName, initialValue) {
     // Define el estado `item` para almacenar el valor recuperado o inicial.
    const [item, setItem] = React.useState(initialValue);
    
     // Define el estado `loading` para indicar si los datos aún se están cargando.
    const [loading, setLoading] = React.useState(true);
    
     // Define el estado `error` para capturar cualquier error que ocurra durante la carga de datos.
    const [error, setError] = React.useState(false);

     // Utiliza useEffect para ejecutar la lógica de carga de datos cuando se monta el componente.
    React.useEffect(() => {
         // Configura un timeout para simular un retardo en la carga de datos (2000 ms).
        const timeoutId = setTimeout(() => {
            try {
                 // Intenta obtener el valor almacenado en localStorage para `itemName`.
                let localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                 // Si no hay ningún dato almacenado bajo `itemName`, inicializa con el valor por defecto.
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                     // Si existe un valor en localStorage, lo parsea de JSON y lo almacena en el estado `item`.
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }
                 // Indica que la carga ha finalizado desactivando el estado `loading`.
                setLoading(false);
            } catch (error) {
                 // En caso de error durante la carga de datos, desactiva `loading` y activa `error`.
                setLoading(false);
                setError(true);
            }
        }, 2000); // // Espera de 2 segundos antes de ejecutar el código anterior.

        // // Limpia el timeout si el componente se desmonta antes de que el timeout finalice.
        return () => clearTimeout(timeoutId);
    }, [initialValue, itemName]); // // Ejecuta useEffect cuando cambian `initialValue` o `itemName`.

    // // Función para guardar un nuevo valor en localStorage y actualizar el estado `item`.
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    // // Retorna un objeto con `item`, `saveItem`, `loading`, y `error` para ser utilizados en el componente que use este hook.
    return {
        item,
        saveItem,
        loading,
        error
    };
}

// // Exporta el custom hook para que pueda ser utilizado en otros componentes.
export { useLocalStorage }
