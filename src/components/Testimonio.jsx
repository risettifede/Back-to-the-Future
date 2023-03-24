import React from "react";
import "../style-sheets/Testimonio.css"


export function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../images/Testimonio de Personajes/testimonio-${props.imagen}.png`)}
        alt="Foto de Marty" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="rol-testimonio"><strong>{props.rol}</strong> en {props.pelicula}</p>
        <p className="parrafo-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

