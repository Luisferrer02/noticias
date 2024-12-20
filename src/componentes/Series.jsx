import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import "./general.css";

function Series({ iraLogin,irAAnalisis, irAGuias,irATrivia,volver  }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articulos = [
    {
      titulo: "Squid Game temporada 2 a estrenarse el 26 de diciembre",
      imagen: require("../recursos/squid-game-season-2-new-key-art-and-teaser-images_vfyn.jpg"),
      autor: "Álvaro Pérez",
      fecha: "12 de Diciembre de 2024",
      comentarios: "3 comentarios",
      contenido: "La segunda temporada de Squid Game promete ser aún más intensa...",
    },
    {
      titulo: "The Walking Dead: Daryl Dixon",
      imagen: require("../recursos/c1bb5f6f4a814f2ce4b46b9ebcbf57c649f87b2b06b115b0148e1fbf5dbbdf6a._BR-6_AC_SX720_FMjpg_.jpg"),
      autor: "María García",
      fecha: "10 de Diciembre de 2024",
      comentarios: "5 comentarios",
      contenido: "El spin-off de Daryl Dixon lleva al personaje a Europa...",
    },
    {
      titulo: "Ya ha empezado el rodaje de la 5ª temporada de The Boys",
      imagen: require("../recursos/dest_1.jpg"),
      autor: "Carlos Ruiz",
      fecha: "8 de Diciembre de 2024",
      comentarios: "8 comentarios",
      contenido: "La quinta temporada de The Boys está en producción...",
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
            <button onClick={volver}>Main</button>
              <button onClick={irAGuias}>Guias y Trucos</button>
              <button onClick={irAAnalisis}>Análisis</button> 
              <button onClick={irATrivia}>Trivia</button>
              <button onClick={iraLogin} id="login">Login</button>
            </div>
            <h1 id="tituloPag">SERIES</h1>
          </nav>
        </header>

        {/* Lista de artículos */}
        <section id="articulo-destacados-area">
          <h2 className="articulos-seccion-titulo">ARTÍCULOS</h2>
          <div className="articulos-destacados-lista">
            {articulos.map((articulo, index) => (
              <div
                key={index}
                className="articulo-destacado"
                onClick={() => abrirModal(articulo)}
              >
                <img
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  className="articulo-foto"
                />
                <div className="articulo-texto">
                  <h3 className="articulo-titulo">{articulo.titulo}</h3>
                  <p className="articulo-detalles">
                    Por {articulo.autor} | {articulo.fecha} |{" "}
                    {articulo.comentarios}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal con detalles */}
      <Modal isOpen={isModalOpen} onClose={cerrarModal}>
        {selectedArticle && (
          <>
            <h2>{selectedArticle.titulo}</h2>
            <img
              src={selectedArticle.imagen}
              alt={selectedArticle.titulo}
              className="modal-imagen"
            />
            <p className="articulo-detalles">
              Por {selectedArticle.autor} | {selectedArticle.fecha} |{" "}
              {selectedArticle.comentarios}
            </p>
            <p>{selectedArticle.contenido}</p>
          </>
        )}
      </Modal>

      <PageFooter />
    </>
  );
}

export default Series;
