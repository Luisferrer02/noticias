import PageFooter from './pageFooter';

function Main({ irAAnalisis, irAGuias, irATrivia, irASeries,iraLogin }) {
  return (
    <>
      {/* COPIAD ESTO PARA TENER LA MISMA CABECERA */}
      <header id="zonaSuperior">
        <div className="logo">
          <div>
            hola
          </div>
        </div>
        <nav id="main-paginas">
          <div id="main-botones" className="botones">
            <button onClick={irAGuias}>Guias y Trucos</button>
            <button onClick={irAAnalisis}>Análisis</button>
            <button onClick={irATrivia}>Trivia</button>
            <button onClick={irASeries}>Series</button>
            <button onClick={iraLogin} id="login">Login</button>
          </div>
        </nav>
      </header>
      {/* COPIAD HASTA AQUÍ PARA TENER LA MISMA CABECERA */}

      <div id="noticias-destacadas">
        <h1 id="main-noticiaDestacada1">
          El mirage F1 llega a DCS de mano de una empresa Española
        </h1>
        <h1 id="main-noticiaDestacada2">
          La nueva serie 5000 de nvidia puede estar mucho más cerca de lo que parece
        </h1>
      </div>

      <div id="noticias-recientes">
        <h1 id="main-noticiaReciente1">
          ¿Será capaz de lograrlo? Activision se ha propuesto para Call of Duty Black Ops 6 acabar con los hackers en tiempo récord
        </h1>
        <h1 id="main-noticiaReciente2">
          Valve seguirá mejorando Steam Deck donde más lo necesita, y los jugadores lo agradecerán. Se avecinan mejoras en un futuro para la batería
        </h1>
        <h1 id="main-noticiaReciente3">
          El esperadísimo Modo Campaña del juego más caro de la historia recibe una fecha lejana. Squadron 42 de Star Citizen llegará en 2026
        </h1>
        <h1 id="main-noticiaReciente4">
          Los padres de Elden Ring están en racha y, tras lanzar el DLC mejor valorado de la historia, nos dan buenos motivos para seguirlos de cerca
        </h1>
        <h1 id="main-noticiaReciente5">
          Ahora puedes jugar gratis a Star Citizen, el ambicioso juego de mundo abierto de ciencia ficción  
        </h1>
        <h1 id="main-noticiaReciente6">
          Stalker 2 ya es un éxito comercial: Vende 1 millón de copias en su estreno, y eso sin contar con Xbox Game Pass
        </h1>
        <h1 id="main-noticiaReciente7">
        Microsoft escoge a Pimax como socio VR para el lanzamiento de MSFS 2024

        </h1>
        <h1 id="main-noticiaReciente8">
        Grok AI ya disponible: requisitos y cómo usar la inteligencia de X
        </h1>
        <h1 id="main-noticiaReciente9">
        INNengine: así es el motor español que podría cambiarlo todo, o no
        </h1>
      
      </div>
      <PageFooter/>
    </>
    
  );
}

export default Main;
