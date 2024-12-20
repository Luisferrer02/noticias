import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import './general.css';

function Analisis({  volver,irAGuias, irATrivia, irASeries,iraLogin }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Datos de los artículos
  const articulosDestacados = [
    {
      title: "OMORI: Cómo contar una historia a través de un estilo artístico",
      image: require('../recursos/Analisis_Omori_Portada.jpg'),
      author: "Juan Pérez",
      date: "12 de Diciembre de 2024",
      content: "OMORI utiliza un estilo artístico único para narrar una historia emocionalmente impactante. En este análisis exploramos cómo el diseño gráfico contribuye a la narrativa."
    },
    {
      title: "Qué hace tan especial a Mouthwashing, el nuevo juego de horror surrealista que está arrasando",
      image: require('../recursos/Analisis_Mouthwashing_Portada.jpg'),
      author: "María García",
      date: "10 de Diciembre de 2024",
      content: "Mouthwashing redefine el género de horror con su enfoque surrealista. Descubre qué lo hace destacar en este análisis detallado."
    }
  ];

  const articulosNormales = [
    {
      title: "Journey y la conexión con otras personas",
      image: require('../recursos/Analisis_Journey_Portada.jpg'),
      author: "Carlos Ruiz",
      date: "8 de Diciembre de 2024",
      content: "Journey ofrece una experiencia única al conectar a jugadores de manera anónima. Analizamos cómo esta mecánica impacta emocionalmente al jugador."
    },
    {
      title: "Análisis del tráiler de \"Death Note: Killer Within\": lo que sabemos hasta ahora",
      image: require('../recursos/Analisis_DeathNote_Portada.jpg'),
      author: "Sofía López",
      date: "5 de Diciembre de 2024",
      content: "El tráiler de 'Death Note: Killer Within' ha generado muchas expectativas. Exploramos sus posibles implicaciones narrativas y lo que podría venir."
    },
    {
      title: "Hades II: Novedades, similitudes y diferencias respecto a su predecesor",
      image: require('../recursos/Analisis_Hades2_Portada.jpg'),
      author: "Ana Martínez",
      date: "1 de Diciembre de 2024",
      content: "Hades II trae nuevas mecánicas y una narrativa fresca. En este análisis comparamos sus diferencias y similitudes con el primer juego."
    }
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
              <button onClick={volver}>Main</button>
              <button onClick={irAGuias}>Guias y Trucos</button>
              <button onClick={irATrivia}>Trivia</button> 
              <button onClick={irASeries}>Series</button>
              <button onClick={iraLogin} id="login">Login</button>
            </div>
            <h1 id="tituloPag"> ANALISIS </h1>
          </nav>
        </header>

        {/* Artículos destacados */}
        <section id="articulo-destacados-area">
          <h2 className="articulos-seccion-titulo">Artículos Destacados</h2>
          <div className="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div
                key={index}
                className="articulo-destacado"
                onClick={() => abrirModal(articulo)}
              >
                <img src={articulo.image} alt={articulo.title} className="articulo-foto" />
                <div className="articulo-texto">
                  <h3 className="articulo-titulo">{articulo.title}</h3>
                  <p className="articulo-detalles">
                    Por {articulo.author} | {articulo.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resto de artículos */}
        <section id="articulo-area">
          <h2 className="articulos-seccion-titulo">Más Artículos</h2>
          <div className="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div
                key={index}
                className="articulo"
                onClick={() => abrirModal(articulo)}
              >
                <img src={articulo.image} alt={articulo.title} className="articulo-foto" />
                <div className="articulo-texto">
                  <h3 className="articulo-titulo">{articulo.title}</h3>
                  <p className="articulo-detalles">
                    Por {articulo.author} | {articulo.date}
                  </p>
                </div>
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
            <p className="articulo-detalles">
              Por {selectedArticle.author} | {selectedArticle.date}
            </p>
            <p>{selectedArticle.content}</p>
          </>
        )}
      </Modal>

      <PageFooter />
    </>
  );
}

export default Analisis;
