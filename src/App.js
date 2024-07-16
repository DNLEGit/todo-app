import logo from './logo.svg';
import './App.css';


//Esta es la forma de los componentes en reac, todo lo que esta aca abajo son componentes que si bien
//son parecidos a la sintaxis que ocupamos con html es XML que utiliza etiquetas para estructurar y organizar los datos dentro de un 
//documento

//La funcion App es el componente principal 
function App() {
  return (
    <div className="App">

      {/* Este es el llamado al componente TodoItem que creamos en la parte de abajo, javascript permite la creacion de 
      componentes que pueden ser llamados desde otros para poder mostrarse en pantalla */}

      <TodoItems/>
      <TodoItems/>
      <TodoItems/>

      {/* Podemos llamar al componente varias veces para ahorrar lineas de codigo y hacer que este sea mas comprensible
      en vez de poner mas lineas lo reemplazamos por las llamadas al componente TodoItems */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//Aca estamos creando un nuevo componente que vamos a llamar dentro del primero que ya teniamos para que se muestre en pantalla

function TodoItems(){
  return (
    <li>
      <span>v</span>
      <p>Llorar con la llorona</p>
      <span>x</span>
    </li>
  );
} 

export default App;
