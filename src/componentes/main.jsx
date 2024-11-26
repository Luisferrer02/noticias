import { useState } from "react";

function Main({ irAAnalisis, irAGuias, irATrivia, irASeries }) {

    return (
      
      /* COPIAD ESTO PARA TENER LA MISMA CABECERA*/ 
      <header id="main-zonaSuperior">
        <div id="main-logo">
          <div>
            hola
          </div>
        </div>
        <nav id="main-paginas">
          <div id="main-botones" class="botones">
          <button onClick={irAGuias}>Ir a Guias y Trucos</button>
          <button onClick={irAAnalisis}>Ir a Análisis</button>
          <button onClick={irATrivia}>Ir a Trivia</button>
          <button onClick={irASeries}>Ir a Series</button>
          </div>
        </nav>
      {/* COPIAD HASTA AQUÍ PARA TENER LA MISMA CABECERA */}
      
      <div id="noticias-destacadas">
        <h1 id="main-noticiaDestacada1">El mirage F1 llega a DCS de mano de una empresa Española</h1>
        <h1 id="main-noticiaDestacada2">La nueva serie 5000 de nvidia puede estar mucho mas cerca de lo que parece</h1>
      </div>


      <div id="noticias-recientes">
        <h1 id="main-noticiaReciente1">¿Será capaz de lograrlo? Activision se ha propuesto para Call of Duty Black Ops 6 acabar con los hackers en tiempo récord</h1>
        <h1 id="main-noticiaReciente2">Valve seguirá mejorando Steam Deck donde más lo necesita, y los jugadores lo agradecerán. Se avecinan mejoras en un futuro para la batería</h1>
        <h1 id="main-noticiaReciente3">El esperadísimo Modo Campaña del juego más caro de la historia recibe una fecha lejana. Squadron 42 de Star Citizen llegará en 2026  </h1>
        
        <h1 id="main-noticiaReciente4">Los padres de Elden Ring están en racha y, tras lanzar el DLC mejor valorado de la historia, nos dan buenos motivos para seguirlos de cerca</h1>
        
        <h1 id="main-noticiaReciente5">Ahora puedes jugar gratis a Star Citizen, el ambicioso juego de mundo abierto de ciencia ficcion</h1>

        <h1 id="main-noticiaReciente6">Stalker 2 ya es un exito comercial: Vende 1 millón de copias en su estreno,y eso sin contar con Xbox Game Pass</h1>
        <h1 id="main-noticiaReciente7">Texto por defecto</h1>
        <h1 id="main-noticiaReciente8">Texto por defecto</h1>

        <h1 id="main-noticiaReciente9">Texto por defecto</h1>
      

      
      </div>

      </header>
    );
}

export default Main;