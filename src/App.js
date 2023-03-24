import './App.css';
import { Testimonio } from './components/Testimonio'; // EXPORTACIÓN NOMBRADA. Dentro de testimonio podrías exportar mas funciones. Lamando a {Testimonio} le decimos a APP que queremos especificamente esa funcion.

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>
          BACK TO THE FUTURE: LAS OPINIONES DE LOS PROTAGONISTAS
        </h1>
        <Testimonio
          nombre="Marty McFly"
          pais="EE.UU"
          imagen="Marty"
          rol="Viajero en el tiempo"
          pelicula="Back to the future - Parte I II y III"
          testimonio="Viajar en el tiempo es lo más loco que he hecho. Gracias al Doc he podido ver frente a frente a mis padres de adolescentes, ver cómo eran los autos (y las patinetas) del futuro. ¡Hasta pude ver un tren a carbón desaparecer en el aire y transportarse! Sin dudas, haber tenido que lograr que mi madre no se encamore de mí, fue la parte más dificil de mantener mi existencia en este planeta."
        />
        <Testimonio
          nombre="Doc Brown"
          pais="EE.UU"
          imagen="Doc"
          rol="Científico loco"
          pelicula="Back to the Future - Parte I II y III"
          testimonio="¡Claro! 5 de noviembre de 1955. En esa fecha inventé los viajes a través del tiempo. Y lo recuerdo bien. Yo estaba en el baño colgando un reloj, me resbalé, me pegué en la cabeza con el borde del lavabo y cuando volví en mí, había tenido una visión. Una imagen en mi mente. Un retrato de esto. Esto es lo que permite viajar por el tiempo. El Condensador de Flujo. ¡Al fin inventé algo que funciona!"
        />
        <Testimonio
          nombre="Einstein"
          pais="EE.UU"
          imagen="Einstein"
          rol="Mascota"
          pelicula="Back to the Future - Parte II"
          testimonio="¡Guau! Me gustria poder decir algo mas interesante que esto, pero el Doc Brown no logró que los animales hablaran."
          />
      </div>
    </div>
  );
}

export default App;

