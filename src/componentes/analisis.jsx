import PageFooter from "./pageFooter";
import './general.css'; 

function analisis({ volver }) {
  // Datos de los artículos
  const articulosDestacados = [
    {
        title: "OMORI: Cómo contar una historia a través de un estilo artístico",
        image: require('../recursos/Analisis_Omori_Portada.jpg')
    },
    {
        title: "Qué hace tan especial a Mouthwashing, el nuevo juego de horror surrealista que está arrasando",
        image: require('../recursos/Analisis_Mouthwashing_Portada.jpg')
    }
];

const articulosNormales = [
    {
        title: "Journey y la conexión con otras personas",
        image: require('../recursos/Analisis_Journey_Portada.jpg')
    },
    {
        title: "Análisis del tráiler de \"Death Note: Killer Within\": lo que sabemos hasta ahora",
        image: require('../recursos/Analisis_DeathNote_Portada.jpg')
    },
    {
        title: "Hades II: Novedades, similaridades y diferencias respecto a su predecesor",
        image: require('../recursos/Analisis_Hades2_Portada.jpg')
    }
];

  return (
    <>
    <div id="return">
      <header id="zonaSuperior">
        <div className="logo" />
        <nav id="cabecera">
          <div className="botones">
            <button onClick={volver}>Volver al Main</button>
          </div>
          <h1 id="tituloPag"> ANALISIS </h1>
        </nav>
      </header>
        
        {/* Artículos destacados */}
        <section id="articulo-destacados-area">
          <h2 className="articulos-seccion-titulo">Artículos Destacados</h2>
          <div className="articulos-destacados-lista">
            {articulosDestacados.map((articulo, index) => (
              <div key={index} className="articulo-destacado">
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
              <div key={index} className="articulo">
                <img src={articulo.image} alt={articulo.title} className="articulo-foto" />
                <h3 className="articulo-titulo">{articulo.title}</h3>
              </div>
            ))}
          </div>
        </section>
    </div>
    <PageFooter/>
    </>
  );
}

export default analisis;
