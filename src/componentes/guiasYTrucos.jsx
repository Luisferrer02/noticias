import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import "./general.css";

function GuiasYTrucos({ volver }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Datos de los artículos
  const articulosDestacados = [
    {
      title:
        "God of War Ragnarok: Los reinos en guerra, cómo dominar cada batalla",
      image: require("../recursos/gow.jpg"),
      author: "Juan Pérez",
      date: "12 de Diciembre de 2024",
      comments: "5 comentarios",
      content:
        "Explora los nueve reinos en profundidad y desentraña los secretos más oscuros de God of War Ragnarok. Aprende estrategias clave para enfrentar a los dioses y cómo desbloquear el final oculto para una experiencia completa.",
    },
    {
      title:
        "Red Dead Redemption 2: Resuelve el misterio de Emerald Ranch y su inquietante habitante",
      image: require("../recursos/red2.jpeg"),
      author: "María García",
      date: "10 de Diciembre de 2024",
      comments: "8 comentarios",
      content:
        "Emerald Ranch guarda un oscuro secreto relacionado con una misteriosa chica que observa desde la ventana. Descubre cada pista, resuelve el enigma y adéntrate en una de las historias más intrigantes del salvaje oeste.",
    },
    {
      title:
        "Cyberpunk 2077: Phantom Liberty - Todo lo que necesitas saber sobre la nueva expansión",
      image: require("../recursos/cyberpunk.jpg"),
      author: "Sofía Martínez",
      date: "15 de Diciembre de 2024",
      comments: "10 comentarios",
      content:
        "La esperada expansión Phantom Liberty lleva a los jugadores de Cyberpunk 2077 a una nueva zona llena de peligros y conspiraciones. Aprende sobre las nuevas mecánicas, personajes y cómo influirán en la narrativa general del juego.",
    },
  ];

  const articulosNormales = [
    {
      title:
        "Rainbow Six Siege Año 9 Temporada 2: Guía completa para dominar a los nuevos operadores",
      image: require("../recursos/r6.avif"),
      author: "Carlos Ruiz",
      date: "8 de Diciembre de 2024",
      comments: "3 comentarios",
      content:
        "Conoce a los nuevos operadores de Rainbow Six Siege y aprende a maximizar su potencial. Descubre tácticas efectivas y cómo integrarlos en tu equipo para asegurar la victoria en cada partida.",
    },
    {
      title:
        "Dragon Age: The Veilguard - Todo lo que necesitas saber sobre los Recuerdos",
      image: require("../recursos/dragon.jpeg"),
      author: "Ana Martínez",
      date: "5 de Diciembre de 2024",
      comments: "6 comentarios",
      content:
        "En Dragon Age: The Veilguard, los Recuerdos son piezas clave para entender la historia y sus misterios. Aprende a encontrarlos, desbloquearlos y aprovechar su poder para cambiar el destino del mundo.",
    },
    {
      title: "Hollow Knight: Silksong - Fecha de lanzamiento y novedades",
      image: require("../recursos/silksong.jpg"),
      author: "Luis Hernández",
      date: "13 de Diciembre de 2024",
      comments: "15 comentarios",
      content:
        "Hollow Knight: Silksong está a la vuelta de la esquina y promete expandir el universo del juego original. Descubre las nuevas habilidades de Hornet, enemigos únicos y los impresionantes paisajes que podrás explorar.",
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
              <div
                key={index}
                className="articulo-destacado"
                onClick={() => abrirModal(articulo)}
              >
                <img
                  src={articulo.image}
                  alt={articulo.title}
                  className="articulo-foto"
                />
                <div className="articulo-texto">
                  <h3 className="articulo-titulo">{articulo.title}</h3>
                  <p className="articulo-detalles">
                    Por {articulo.author} | {articulo.date} |{" "}
                    {articulo.comments}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Más artículos */}
        <section id="articulo-area">
          <h2 className="articulos-seccion-titulo">Más Artículos</h2>
          <div className="articulos-lista">
            {articulosNormales.map((articulo, index) => (
              <div
                key={index}
                className="articulo"
                onClick={() => abrirModal(articulo)}
              >
                <img
                  src={articulo.image}
                  alt={articulo.title}
                  className="articulo-foto"
                />
                <div className="articulo-texto">
                  <h3 className="articulo-titulo">{articulo.title}</h3>
                  <p className="articulo-detalles">
                    Por {articulo.author} | {articulo.date} |{" "}
                    {articulo.comments}
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
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="modal-imagen"
            />
            <p className="articulo-detalles">
              Por {selectedArticle.author} | {selectedArticle.date} |{" "}
              {selectedArticle.comments}
            </p>
            <p>{selectedArticle.content}</p>
          </>
        )}
      </Modal>

      <PageFooter />
    </>
  );
}

export default GuiasYTrucos;
