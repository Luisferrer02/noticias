import React from 'react';
import PageFooter from './pageFooter';
import './general.css'; 

// Datos de los artículos
const articulosDestacados = [
  {
    title: 'Ni Minecraft ni Fortnite, el primer videojuego que invadió los colegios se creó en 1971 y ahora Apple quiere crear una película sobre él',
    image: require('../recursos/The_Oregon_Trail.jpeg'),
    categoria: 'Juegos.Com',
    detalles: 'Tiempo — Autor — Sin comentarios',
  },
];

const articulosNormales = [
  {
    title: 'El mayor bulo de la historia no es de internet, lo creó un rey que engañó a todos acabando con miles de personas',
    image: require('../recursos/trivia_rey.jpeg'),
    categoria: 'Juegos.Com',
    detalles: 'Tiempo — Autor — Sin comentarios',
  },
  {
    title: 'El impacto de las redes sociales en las elecciones presidenciales: "Los mensajes en video son clave"',
    image: require('../recursos/trivia_trump.jpeg'),
    categoria: 'Juegos.Com',
    detalles: 'Tiempo — Guillermo Perez — 7 comentarios',
  },
];

function Trivia({ volver }) {
  return (
    <>
    <div id="return"> {/* ID compartido con GuiasYTrucos */}
      <header id="zonaSuperior">
        <div className="logo"/>
        <nav id="cabecera">
          <div id="botones" className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="tituloPag">TRIVIA</h1> {/* Usa el ID compartido */}
        </nav>

        {/* Artículos destacados */}
        <section id="articulo-destacados-area">
          <h2 className="articulos-seccion-titulo">Artículo Destacado</h2>
          <div className="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div key={index} className="articulo-destacado">
                <img
                  src={articulo.image}
                  alt={articulo.title}
                  className="articulo-foto"
                />
                <h3 className="articulo-titulo">{articulo.title}</h3>
                {/*<p className="guias-articulo-categoria">{articulo.categoria}</p>
                <p className="guias-articulo-detalles">{articulo.detalles}</p>*/}
              </div>
            ))}
          </div>
        </section>

        {/* Resto de artículos */}
        <section id="articulo-area">
          <h2 className="articulos-seccion-titulo">Más Artículos</h2>
          <div className="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div key={index} className="articulo">
                <img
                  src={articulo.image}
                  alt={articulo.title}
                  className="articulo-foto"
                />
                <h3 className="articulo-titulo">{articulo.title}</h3>
                {/*<p className="articulo-categoria">{articulo.categoria}</p>
                <p className="articulo-detalles">{articulo.detalles}</p>*/}
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
    <PageFooter/>
    </>
  );
}

export default Trivia;
