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
      contenido:
        "La segunda temporada de Squid Game promete ser aún más intensa y emocional, explorando nuevas dinámicas entre los personajes y presentando juegos aún más retorcidos. Los fans están ansiosos por descubrir cómo se desarrolla la trama tras el impactante final de la primera temporada.",
    },
    {
      titulo: "The Walking Dead: Daryl Dixon",
      imagen: require("../recursos/c1bb5f6f4a814f2ce4b46b9ebcbf57c649f87b2b06b115b0148e1fbf5dbbdf6a._BR-6_AC_SX720_FMjpg_.jpg"),
      autor: "María García",
      fecha: "10 de Diciembre de 2024",
      comentarios: "5 comentarios",
      contenido:
        "El spin-off de Daryl Dixon lleva al personaje a Europa, enfrentando nuevos desafíos en un entorno completamente diferente. La serie ha sido aclamada por su atmósfera única y su enfoque en el desarrollo profundo del personaje principal.",
    },
    {
      titulo: "Ya ha empezado el rodaje de la 5ª temporada de The Boys",
      imagen: require("../recursos/dest_1.jpg"),
      autor: "Carlos Ruiz",
      fecha: "8 de Diciembre de 2024",
      comentarios: "8 comentarios",
      contenido:
        "La quinta temporada de The Boys está en producción, y los primeros detalles indican que será la más explosiva hasta ahora. Con giros inesperados y un elenco lleno de talento, los fans pueden esperar un espectáculo que desafía las expectativas.",
    },
    {
      titulo: "Avatar 3: James Cameron revela nuevos detalles",
      imagen: require("../recursos/avatar_teaser.jpg"),
      autor: "Lucía Fernández",
      fecha: "15 de Diciembre de 2024",
      comentarios: "10 comentarios",
      contenido:
        "El director James Cameron ha compartido nuevos detalles sobre Avatar 3, prometiendo un enfoque más profundo en las culturas de Pandora y una historia que explorará las tensiones entre las tribus Na'vi y los humanos. El estreno está programado para diciembre de 2025.",
    },
    {
      titulo: "Stranger Things: Temporada final en camino",
      imagen: require("../recursos/stranger_things_final.jpg"),
      autor: "Pedro López",
      fecha: "14 de Diciembre de 2024",
      comentarios: "15 comentarios",
      contenido:
        "Netflix ha confirmado que la última temporada de Stranger Things está en producción. Con la promesa de resolver todos los misterios y un final épico, los fans están más emocionados que nunca por el regreso de Eleven y su grupo de amigos.",
    },
    {
      titulo: "Black Mirror: Nueva temporada explorará la IA",
      imagen: require("../recursos/black_mirror_ai.jpg"),
      autor: "Sofía Martínez",
      fecha: "13 de Diciembre de 2024",
      comentarios: "7 comentarios",
      contenido:
        "La próxima temporada de Black Mirror se centrará en historias relacionadas con inteligencia artificial y su impacto en la sociedad. Los creadores prometen episodios impactantes que plantearán preguntas éticas profundas sobre el uso de la tecnología.",
    },
    {
      titulo: "House of the Dragon: Temporada 2 tiene fecha",
      imagen: require("../recursos/hotd2.jpg"),
      autor: "Jorge Hernández",
      fecha: "12 de Diciembre de 2024",
      comentarios: "6 comentarios",
      contenido:
        "La segunda temporada de House of the Dragon se estrenará en abril de 2025. Los fans pueden esperar más drama, traiciones y batallas épicas mientras la lucha por el Trono de Hierro se intensifica.",
    },
    {
      titulo: "Misión Imposible 8: El tráiler rompe récords",
      imagen: require("../recursos/mi8.jpg"),
      autor: "Ana Torres",
      fecha: "11 de Diciembre de 2024",
      comentarios: "12 comentarios",
      contenido:
        "El tráiler de Misión Imposible 8 ha batido récords de visualizaciones en su primer día. Con Tom Cruise realizando acrobacias aún más impresionantes, esta entrega promete ser una de las mejores de la saga.",
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

