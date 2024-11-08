import { useState } from "react";

function guiasYTrucos({ volver }) {
  // Datos de los artículos
  const articulosDestacados = [
    { title: "God of War Ragnarok: Los reinos en guerra, como pasarlo", image: require('../recursos/gow.jpg')  },
    { title: "Red Dead Redemption 2, ¿cómo resolver el misterio de Emerald Ranch y la chica que mira por la ventana?", image: require('../recursos/red2.jpeg') },
  ];

  const articulosNormales = [
    { title: 'Rainbow Six Siege Año 9 Temporada 2: Todo lo que debes saber sobre los nuevos operadores: Guias y trucos', image: require('../recursos/r6.avif') },
    { title: "Dragon Age The Veilguard, qué son los Recuerdos y para qué sirven", image: require('../recursos/dragon.jpeg') },
  ];

  return (
    <div id="return-pagGuias">
      <header id="main-zonaSuperior">
        <div id="main-logo">
        </div>
        <nav id="guias-cabecera">
          <div id="guias-botones" className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="guias-titulo"> GUIAS </h1>
        </nav>
        
        {/* Artículos destacados */}
        <section id="guias-articulos-destacados-area">
          <h2 className="seccion-titulo">Artículos Destacados</h2>
          <div id="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div key={index} className="guias-articulo-destacado">
                <img src={articulo.image} alt={articulo.title} className="guias-art-foto" />
                <h3 className="guias-art-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resto de artículos */}
        <section id="guias-articulos-area">
          <h2 className="seccion-titulo">Más Artículos</h2>
          <div id="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div key={index} className="guias-articulo">
                <img src={articulo.image} alt={articulo.title} className="guias-art-foto" />
                <h3 className="guias-art-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </header>
    </div>
  );
}

export default guiasYTrucos;
