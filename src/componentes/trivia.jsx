import React, { useState } from "react";
import Modal from "./Modal";
import PageFooter from "./pageFooter";
import "./general.css";

const articulosDestacados = [
  {
    title: 'Ni Minecraft ni Fortnite, el primer videojuego que invadió los colegios se creó en 1971 y ahora Apple quiere crear una película sobre él',
    image: require('../recursos/The_Oregon_Trail.jpeg'),
    categoria: 'Videojuegos',
    detalles: '1 hora — María López — Sin comentarios',
    content: 'Este artículo analiza el impacto de The Oregon Trail como precursor en la gamificación educativa. Ahora, Apple planea llevar esta fascinante historia al cine.'
  },
  {
    title: 'El impacto de las redes sociales en las elecciones presidenciales: "Los mensajes en video son clave"',
    image: require('../recursos/trivia_trump.jpeg'),
    categoria: 'Tecnología',
    detalles: '5 horas — Guillermo Perez — 7 comentarios',
    content: 'Este análisis revela cómo las plataformas sociales influyen en los resultados electorales, con un énfasis en la efectividad de los mensajes en video.'
  },
];

const articulosNormales = [
  {
    title: 'El mayor bulo de la historia no es de internet, lo creó un rey que engañó a todos acabando con miles de personas',
    image: require('../recursos/trivia_rey.jpeg'),
    categoria: 'Historia',
    detalles: '3 horas — Juan García — 12 comentarios',
    content: 'Descubre cómo un rey logró manipular a toda una nación a través de un bulo histórico que cambió el curso de los acontecimientos.'
  },
  {
    title: 'Elon Musk anunciará que creará su propio correo electrónico capaz de competir con Gmail',
    image: require('../recursos/trivia_musk.jpeg'),
    categoria: 'Tecnología',
    detalles: '5 horas — Eduardo Rodriguez — 6 comentarios',
    content: 'Elon Musk ha comentado la posibilidad de crear un nuevo servicio de correo electrónico llamado Xmail. "Tendrá un diseño más simple que Gmail".'
  },
  {
    title: 'Se confirma la participación de Ucrania en el asesinato de un General ruso en Moscú.',
    image: require('../recursos/trivia_ucrania.jpeg'),
    categoria: 'Geopolítica',
    detalles: '6 horas — Jorge Casas — 1 comentario',
    content: 'Un general ruso fue asesinado en Moscú este martes en plena calle mediante el uso de un artefacto explosivo. El perpetrador ha sido detenido y ha confirmado la involucración del gobierno de Ucrania.'
  },
  {
    title: 'El principal sospechoso del asesinato del CEO de United Healthcare ha sido transferido a prisión federal.',
    image: require('../recursos/trivia-luigi.jpg'),
    categoria: 'Actualidad',
    detalles: '5 horas — Guillermo Perez — 2 comentarios',
    content: 'Luigi Mangione, principal sospechoso del asesinato del CEO de United Healthcare, Brian Thompson, ha sido transferido a prisión federal después de hallar nuevas pruebas en su contra.'
  },
  {
    title: 'Siria tiene un nuevo presidente.',
    image: require('../recursos/trivia-siria.jpg'),
    categoria: 'Geopolítica',
    detalles: '5 horas — Guillermo Perez — 9 comentarios',
    content: 'Tras el derrocamiento del gobierno de Bashar al-Assad, Siria ha anunciado la nombración temporal de un nuevo presidente, el general Hafez al-Assad.'
  },
];

function Trivia({ iraLogin, irAAnalisis, irAGuias, irASeries, volver }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const abrirModal = (articulo) => {
    setSelectedArticle(articulo);
    setIsModalOpen(true);
  };

  const cerrarModal = () => {
    setSelectedArticle(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="return">
        <header id="zonaSuperior">
          <div className="logo" />
          <nav id="cabecera">
            <div id="botones" className="botones">
              <button onClick={volver}>Main</button>
              <button onClick={irAGuias}>Guias y Trucos</button>
              <button onClick={irAAnalisis}>Análisis</button>
              <button onClick={irASeries}>Series</button>
              <button onClick={iraLogin} id="login">Login</button>
            </div>
            <h1 id="tituloPag">TRIVIA</h1>
          </nav>

          {/* Artículos destacados */}
          <section id="articulo-destacados-area">
            <h2 className="articulos-seccion-titulo">Artículo Destacado</h2>
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
                    <p className="articulo-categoria">{articulo.categoria}</p>
                    <p className="articulo-detalles">{articulo.detalles}</p>
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
                  <img
                    src={articulo.image}
                    alt={articulo.title}
                    className="articulo-foto"
                  />
                  <div className="articulo-texto">
                    <h3 className="articulo-titulo">{articulo.title}</h3>
                    <p className="articulo-categoria">{articulo.categoria}</p>
                    <p className="articulo-detalles">{articulo.detalles}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </header>
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
            <p>{selectedArticle.content}</p>
            <p>
              <strong>Categoría:</strong> {selectedArticle.categoria}
            </p>
            <p>
              <strong>Detalles:</strong> {selectedArticle.detalles}
            </p>
          </>
        )}
      </Modal>

      <PageFooter />
    </>
  );
}

export default Trivia;
