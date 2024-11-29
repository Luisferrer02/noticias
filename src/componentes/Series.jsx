import PageFooter from './pageFooter';
import './general.css'; 

function Series({ volver }) {
  const articulos = [
    {
      titulo: 'Cancelan el anime de Transformers por recortes en presupuesto',
      descripcion: 'Ahora yo...',
      categoria: 'Series de moda',
      fecha: 'Hace 1 hora',
      autor: 'Álvaro Pérez',
      comentarios: '3 comentarios',
      imagen: require('../recursos/42zardfyztqd1.jpeg'),
    },
    {
      titulo: 'The Walking Dead: Daryl Dixon: La nueva serie de la saga',
      descripcion: '¿Qué podemos esperar de la primera temporada?',
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
    <>
    <div id="return">
      <header id="zonaSuperior">
        <div className="logo"/>
        <nav id="cabecera">
          <div className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="tituloPag">SERIES</h1>
        </nav>
      </header>

      {/* Artículos */}

      <section id="articulo-area">
          <h2 className="articulos-seccion-titulo">Artículos </h2>
          <div className="articulos-lista">
            {articulos.map((articulo, index) => (
              <div key={index} className="articulo">
                <img src={articulo.imagen} alt={articulo.titulo} className="articulo-foto"/>
                  <h3 className="articulo-titulo">{articulo.titulo}</h3>
                  {/*<p className="articulo-descripcion">{articulo.descripcion}</p>
                  <span className="articulo-categoria">{articulo.categoria}</span>
                  <div className="articulo-detalles">
                  <span>{articulo.fecha}</span> - <span>{articulo.autor}</span> - <span>{articulo.comentarios}</span>
                  </div>*/}
            </div>
          ))}
        </div>
      </section>
    </div>
    <PageFooter/>
    </>
  );
}

export default Series;
