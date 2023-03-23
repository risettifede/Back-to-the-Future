import React from "react";
import "../style-sheets/Testimonio.css"

export function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require('../images/testimonio-Marty.png')}
        alt="Foto de Marty" />
      <div className="contenedor-texto-testimonio" >
        <p className="nombre-testimonio">Marty McFly</p>
        <p className="cargo-testimonio">Viajero en el tiempo</p>
        <p className="parrafo-testimonio">"Viajar en el tiempo es lo más loco que he hecho. Gracias al Doc he podido ver a mis padres de adolescentes y ¡evitar que mi madre se enamore de mí! Increíble"</p>
      </div>
    </div>
  );
}

