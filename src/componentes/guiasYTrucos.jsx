import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import './general.css';

function GuiasYTrucos({ volver }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Datos de los artículos
  const articulosDestacados = [
    { 
      title: "God of War Ragnarok: Los reinos en guerra, como pasarlo", 
      image: require('../recursos/gow.jpg'),
      content: "Explora los nueve reinos y descubre los secretos para derrotar a los dioses en God of War Ragnarok. Te explicamos estrategias clave para cada enemigo y cómo desbloquear el final oculto."
    },
    { 
      title: "Red Dead Redemption 2, ¿cómo resolver el misterio de Emerald Ranch y la chica que mira por la ventana?", 
      image: require('../recursos/red2.jpeg'),
      content: "Emerald Ranch oculta un oscuro secreto. Te llevamos paso a paso para descubrir la verdad detrás de la misteriosa chica en la ventana y cómo resolver este enigma del salvaje oeste."
    },
  ];

  const articulosNormales = [
    { 
      title: "Rainbow Six Siege Año 9 Temporada 2: Todo lo que debes saber sobre los nuevos operadores: Guias y trucos", 
      image: require('../recursos/r6.avif'),
      content: "Aprende a dominar a los nuevos operadores de Rainbow Six Siege. Descubre sus habilidades, estrategias y cómo integrarlos en tu equipo para ganar cada partida."
    },
    { 
      title: "Dragon Age The Veilguard, qué son los Recuerdos y para qué sirven", 
      image: require('../recursos/dragon.jpeg'),
      content: "En Dragon Age: The Veilguard, los Recuerdos son fragmentos del pasado que revelan secretos importantes sobre el mundo y su historia. Aprende a encontrarlos y utilizarlos."
    },
  ];

  const abrirModal = (articulo) => {
    setSelectedArticle(articulo);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  return (
    <>
      <div id="return">
        <header id="zonaSuperior">
          <div className="logo" />
          <nav id="cabecera">
            <div className="botones">
              <button onClick={volver}>Volver al Main</button>
            </div>
            <h1 id="tituloPag"> GUIAS </h1>
          </nav>
        </header>
          
        {/* Artículos destacados */}
        <section id="articulo-destacados-area">
          <h2 className="articulos-seccion-titulo">Artículos Destacados</h2>
          <div className="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div key={index} className="articulo-destacado" onClick={() => abrirModal(articulo)}>
                <img src={articulo.image} alt={articulo.title} className="articulo-foto" />
                <h3 className="articulo-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
        
        {/* Resto de artículos */}
        <section id="articulo-area">
          <h2 className="articulos-seccion-titulo">Más Artículos</h2>
          <div className="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div key={index} className="articulo" onClick={() => abrirModal(articulo)}>
                <img src={articulo.image} alt={articulo.title} className="articulo-foto" />
                <h3 className="articulo-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      {/* Modal con detalles del artículo */}
      <Modal isOpen={isModalOpen} onClose={cerrarModal}>
        {selectedArticle && (
          <>
            <h2>{selectedArticle.title}</h2>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-imagen" />
            <p>{selectedArticle.content}</p>
          </>
        )}
      </Modal>

      <PageFooter />
    </>
  );
}

export default GuiasYTrucos;
