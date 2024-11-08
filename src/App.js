import { useState } from 'react';
import './App.css';
import Analisis from './componentes/analisis';
import GuiasYTrucos from './componentes/guiasYTrucos';
import Main from './componentes/main';
import Trivia from './componentes/trivia';
import Series from './componentes/Series'; // Importar el componente Series

function App() {
  const [pantalla, setPantalla] = useState('main');  // Controla la pantalla actual

  const renderizarPantalla = () => {
    switch (pantalla) {
      case 'main':
        return <Main irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} irATrivia={() => setPantalla('trivia')} irASeries={() => setPantalla('series')} />;
      case 'guias':
        return <GuiasYTrucos volver={() => setPantalla('main')} />;
      case 'analisis':
        return <Analisis volver={() => setPantalla('main')} />;
      case 'trivia':
        return <Trivia volver={() => setPantalla('main')} />;
      case 'series': // Añadir el caso para Series
        return <Series volver={() => setPantalla('main')} />;
      default:
        return <Main irAGuias={() => setPantalla('guias')} irAAnalisis={() => setPantalla('analisis')} irATrivia={() => setPantalla('trivia')} irASeries={() => setPantalla('series')} />;
    }
  };

  return (
    <div className="App">
      {renderizarPantalla()}
    </div>
  );
}

export default App;