import { useState } from 'react';
import './App.css';
import Analisis from './componentes/analisis';
import GuiasYTrucos from './componentes/guiasYTrucos';
import Main from './componentes/main';
import Trivia from './componentes/trivia';
import Series from './componentes/Series'; // Importar el componente Series
import Login from './componentes/login';

function App() {
  const [pantalla, setPantalla] = useState('main');  // Controla la pantalla actual

  const renderizarPantalla = () => {
    switch (pantalla) {
      case 'main':
        return <Main irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} irATrivia={() => setPantalla('trivia')} irASeries={() => setPantalla('series')} iraLogin={() => setPantalla('login')} />;
      case 'guias':
        return <GuiasYTrucos volver={() => setPantalla('main')} irATrivia={() => setPantalla('trivia')} irAAnalisis={() => setPantalla('analisis')} irASeries={() => setPantalla('series')} iraLogin={() => setPantalla('login')}   />;
      case 'analisis':
        return <Analisis volver={() => setPantalla('main')} irAGuias={() => setPantalla('guias')} irASeries={() => setPantalla('series')} irATrivia={() => setPantalla('trivia')} iraLogin={() => setPantalla('login')}    />;
      case 'trivia':
        return <Trivia volver={() => setPantalla('main')} irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} irASeries={() => setPantalla('series')} iraLogin={() => setPantalla('login')}    />;
      case 'series': // Añadir el caso para Series
        return <Series volver={() => setPantalla('main')} irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} irATrivia={() => setPantalla('trivia')} iraLogin={() => setPantalla('login')}    />;
        case 'login':
          return <Login volver={() => setPantalla('main')} />;
    }
  };

  return (
    <div className="App">
      {renderizarPantalla()}
    </div>
  );
}

export default App;