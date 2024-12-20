import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import "./general.css";

function Series({ volver }) {
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
    {
      titulo: "Nueva serie de star wars",
      imagen: require("../recursos/Star_Wars_Tripulaciaon_Perdida_Serie_de_TV-630742343-large.jpg"),
      autor: "Pablo motos",
      fecha: "19 de Diciembre de 2024",
      comentarios: "27 comentarios",
      contenido: "La nueva serie ya ha sido criticada por muchos fans",
    },
    {
      titulo: "Rambo: New Blood",
      imagen: require("../recursos/MV5BMWM5NzVlNzMtMDNhNy00OGMxLTlmYTktOGIwMzRlZmE0ZWVmXkEyXkFqcGc@._V1_.jpg"),
      autor: "Pablo motos",
      fecha: "21 de Diciembre de 2024",
      comentarios: "27 comentarios",
      contenido: "Los fans estan atonitos ante esta nueva noticia",
    },
    {
      titulo: "La tercera temporada de la serie From Deja un sabor agridulce",
      imagen: require("../recursos/From_S3_premiere.png"),
      autor: "Pablo motos",
      fecha: "17 de Diciembre de 2024",
      comentarios: "27 comentarios",
      contenido: "Muchos episodios tienen mas de un 8 pero algunos no llegan al 6",
    },
    {
      titulo: "Hacen la primera serie basado en la famosa saga de juegos yakuza.",
      imagen: require("../recursos/Yakuza_Like_a_Dragon_Miniserie_de_TV-133792825-large.jpg"),
      autor: "Pablo motos",
      fecha: "20 de Diciembre de 2024",
      comentarios: "27 comentarios",
      contenido: "Solo han sacado 6 episodios pero muchos espectadores estan decepcionados ya que ningun episodio ha superado el 7.",
    },
    {
      titulo: "La serie de the penguin ha sido un exito",
      imagen: require("../recursos/MV5BYmU3MzYzOWEtOTdkZi00YzA1LTliMzQtNDdiZDBjY2FiNmFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
      autor: "Pablo motos",
      fecha: "19 de Diciembre de 2024",
      comentarios: "27 comentarios",
      contenido: "con muy buenas criticas y miles de espectadores.",
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



