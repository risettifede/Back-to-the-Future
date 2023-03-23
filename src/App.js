import './App.css';
import { Testimonio } from './components/Testimonio'; // EXPORTACIÓN NOMBRADA. Dentro de testimonio podrías exportar mas funciones. Lamando a {Testimonio} le decimos a APP que queremos especificamente esa funcion.

function App() {
  return (
    <div className="App">
    <div className="contenedor-principal">
      <h1>
      BACK TO THE FUTURE: LAS OPINIONES DE LOS PROTAGONISTAS
      </h1>
    <Testimonio />
    </div>
    </div>
  );
}

export default App;

