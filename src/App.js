import arteConferencia from "./assets/images/arte-conf.png";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gera um ângulo aleatório entre 0 e 2π radianos
      const angle = Math.random() * 2 * Math.PI;

      // Calcula a posição x e y usando a trigonometria
      const x = Math.cos(angle) * 800; // Distância da origem
      const y = Math.sin(angle) * 800;

      setDots((prevDots) => [...prevDots, { id: Math.random(), x, y }]);
    }, 50); // Intervalo entre os pontos emitidos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div id="foto">
        <img src={arteConferencia} alt="arteConferencia" />
      </div>
      <div className="dot-emitter">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="dot"
            style={{
              // Definindo as variáveis CSS para a animação
              "--x": `${dot.x}px`,
              "--y": `${dot.y}px`,
              animationDelay: `0.001s`, // Atraso aleatório para cada ponto
            }}
          />
        ))}
        {/* Aqui você pode colocar um ponto invisível, se desejar */}
        <div className="dot" style={{ opacity: 0 }} />
      </div>
      <div className="dot-emitter">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="dot"
            style={{
              // Definindo as variáveis CSS para a animação
              "--x": `${dot.x}px`,
              "--y": `${dot.y}px`,
              animationDelay: `0.001s`, // Atraso aleatório para cada ponto
            }}
          />
        ))}
        {/* Aqui você pode colocar um ponto invisível, se desejar */}
        <div className="dot" style={{ opacity: 0 }} />
      </div>
    </div>
  );
}

export default App;
