import { useState } from 'react';
import Layout from './componentes/layout/layout.jsx';
import Finish from './componentes/layout/Finish.jsx';
import Header from './componentes/layout/Header.jsx';
import './App.css';

function App() {
  const [showFinish, setShowFinish] = useState(false);

  const handleGenerate = () => {
    setShowFinish(true);
  };

  const handleBack = () => {
    setShowFinish(false);
  };

  return (
    <>
      <Header />
      {!showFinish ? (
        <Layout onGenerate={handleGenerate} />
      ) : (
        <Finish onBack={handleBack} />
      )}
    </>
  );
}

export default App;
