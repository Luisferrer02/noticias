import './main.css';

function Series({ volver }) {
  const articulos = [
    {
      titulo: '...',
      descripcion: 'Ahora yo...',
      categoria: 'Series de moda',
      fecha: 'Hace 1 hora',
      autor: 'Álvaro Pérez',
      comentarios: '3 comentarios',
      imagen: require('../recursos/42zardfyztqd1.jpeg'),
    },
    {
      titulo: 'The Walking Dead: Daryl Dixon',
      descripcion: 'Nueva Serie',
      categoria: 'Series',
      fecha: 'Hace 3 horas',
      autor: 'Álvaro Pérez',
      comentarios: '5 comentarios',
      imagen: require('../recursos/c1bb5f6f4a814f2ce4b46b9ebcbf57c649f87b2b06b115b0148e1fbf5dbbdf6a._BR-6_AC_SX720_FMjpg_.jpg'),
    },
    {
      titulo: 'Nuevo anime de donald trump en producción',
      descripcion: 'La serie constará de donald trump.',
      categoria: 'Series a estrenarse',
      fecha: 'Hace 6 horas',
      autor: 'Álvaro Pérez',
      comentarios: '8 comentarios',
      imagen: require('../recursos/animetrump-raises-fist-after-shooting.jpg'),
    },
  ];

  return (
    <div id="return-pagGuias">
      <header id="main-zonaSuperior">
        <div id="main-logo"></div>
        <nav id="guias-cabecera">
          <div id="guias-botones" className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="guias-titulo">SERIES</h1>
        </nav>
      </header>

      {/* Artículos */}

      <section id="guias-articulos-destacados-area">
          <h2 className="seccion-titulo">Artículos </h2>
          <div id="articulos-lista">
            {articulos.map((articulo, index) => (
              <div key={index} className="guias-articulo">
                <img src={articulo.imagen} alt={articulo.titulo} className="guias-art-foto"/>
                <div className="guias-art-texto">
                  <h3 className="guias-art-titulo">{articulo.titulo}</h3>
                  <p className="guias-art-descripcion">{articulo.descripcion}</p>
                  <span className="categoria">{articulo.categoria}</span>
                  <div className="detalles">
                  <span>{articulo.fecha}</span> - <span>{articulo.autor}</span> - <span>{articulo.comentarios}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Series;
