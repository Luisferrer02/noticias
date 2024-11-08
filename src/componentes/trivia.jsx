import { useState } from "react";
import TheOregonTrail from "../recursos/The_Oregon_Trail.jpeg";
import rey from "../recursos/trivia_rey.jpeg";
import trump from "../recursos/trivia_trump.jpeg";

function Trivia({ volver }) {
    return (
      <div>
        <header id="main-zonaSuperior">
          <div id="main-logo">
            <div>hola</div>
          </div>
        </header>
        <div id="trivia-fondo">
          <nav id="guias-cabecera">
          <div id="guias-botones" className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>  
            <h1 id="trivia-titulo">Trivia</h1>
          </nav>
          <div id="trivia-articulos-contenedor">
            <div id="trivia-articulos">
              {/* Artículo similar al ejemplo */}
              <article className="trivia-articulo">
                <img
                  src={TheOregonTrail}  // URL de imagen de ejemplo
                  alt="The Oregon Trail"
                  className="trivia-articulo-imagen"
                />
                <h2 className="trivia-articulo-texto">
                  Ni Minecraft ni Fortnite, el primer videojuego que invadió los colegios se creó en 1971 y ahora Apple quiere crear una película sobre él
                </h2>
                <p className="trivia-articulo-categoria"> Juegos.Com</p>
                <p className="trivia-articulo-detalles">
                  Tiempo — Autor — Sin comentarios
                </p>
              </article>
              <article className="trivia-articulo">
                <img
                  src={rey}  // URL de imagen de ejemplo
                  alt="imagen-rey"
                  className="trivia-articulo-imagen"
                />
                <h2 className="trivia-articulo-texto">
                El mayor bulo de la historia no es de internet, lo creó un rey que engañó a todos acabando con miles de personas
                </h2>
                <p className="trivia-articulo-categoria"> Juegos.Com</p>
                <p className="trivia-articulo-detalles">
                  Tiempo — Autor — Sin comentarios
                </p>
              </article>
              <article className="trivia-articulo">
                <img
                  src={trump}  // URL de imagen de ejemplo
                  alt="imagen-rey"
                  className="trivia-articulo-imagen"
                />
                <h2 className="trivia-articulo-texto">
                
                El impacto de las redes socieles en las elecciones presidenciales: "Los mensajes en video son clave"
                </h2>
                <p className="trivia-articulo-categoria"> Juegos.Com</p>
                <p className="trivia-articulo-detalles">
                  Tiempo — Guillermo Perez — 7 comentarios
                </p>
              </article>  
            </div>
          </div>
        </div>
      </div>
    );
}

export default Trivia;
  