import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado';
import RecipeCard from './Components/RecipeCard';
import Buscador from './Components/Buscador';

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <div className='contenedor-encabezado'>
            <Encabezado
              logo={logo}
              titulo="Mi proyecto" />
          </div>
        <div className="contenedor">
          <div className="contenedor-buscador">
            <Buscador />
          </div>
          <div className="contenedor-carta">
            <RecipeCard />
          </div>
        </div>
        <img className="imagen-fondo" src={"https://images4.alphacoders.com/135/1358517.png"} />
      </header>
    </div>
  );
}

export default App;
