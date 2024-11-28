import PageFooter from "./pageFooter";
import './analisis.css';

function Analisis({ volver }) {
  return <div id="return-pagAnalisis">
    <header id="zonaSuperior">
      <div className="logo">
      </div>
      <nav id="analisis-cabecera">
        <div className="botones">
          <button onClick={volver}>Volver al Main</button>
        </div>
        <h1 id="analisis-titulo"> ANÁLISIS </h1>
      </nav>
      <div className="fondo-dorado">
        <div id="an-articulos-area">
          <div className="analisis-articulo" id="an-art-omori">
            <div className="an-art-foto" id="an-art-foto-omori"/>
            <h1 className="an-art-titulo">OMORI: Como contar una historia a través de un estilo artístico</h1>
            <p className="an-art-datos">fecha - autor - comentarios</p> {/* POSIBLE: Añadir enlaces a campo comentarios */}
          </div>
          <div className="analisis-articulo" id="an-art-mouthwashing">
            <div className="an-art-foto" id="an-art-foto-mouthwashing"/>
            <h1 className="an-art-titulo">Que hace tan especial a Mouthwashing, el nuevo juego de horror surrealista que está arrasando</h1>
            <p className="an-art-datos">fecha - autor - comentarios</p>
          </div>
          <div className="analisis-articulo" id="an-art-journey">
            <div className="an-art-foto" id="an-art-foto-journey"/>
            <h1 className="an-art-titulo">Journey y la conexión con otras personas</h1>
            <p className="an-art-datos">fecha - autor - comentarios</p>
          </div>
          <div className="analisis-articulo" id="an-art-deathnote">
            <div className="an-art-foto" id="an-art-foto-deathnote"/>
            <h1 className="an-art-titulo">Análisis del tráiler de "Death Note: Killer Within": lo que sabemos hasta ahora</h1>
            <p className="an-art-datos">fecha - autor - comentarios</p>
          </div>
          <div className="analisis-articulo" id="an-art-hades2">
            <div className="an-art-foto" id="an-art-foto-hades2"/>
            <h1 className="an-art-titulo">Hades II: Novedades, similaridades y diferencias respecto a su predecesor</h1>
            <p className="an-art-datos">fecha - autor - comentarios</p>
          </div>
        </div>
      </div>
    </header>
    <PageFooter/>
  </div>
  }
  
  export default Analisis;
  