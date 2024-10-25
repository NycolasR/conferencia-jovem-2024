import { useEffect, useState } from "react";

import arteTag from "./assets/images/art-tag.png";
import arteNome from "./assets/images/art-nome.png";
import arteGlobo from "./assets/images/art-globo.png";
// import arteConferencia from "./assets/images/arte-conf.png";

import "./App.css";

const MAX_DOTS = 400;

function App() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gera um ângulo aleatório entre 0 e 2π radianos
      const angle = Math.random() * 2 * Math.PI;

      // Calcula a posição x e y usando a trigonometria e uma distância aleatória
      const x = Math.cos(angle) * Math.random() * 900; // Distância aleatória da origem
      const y = Math.sin(angle) * Math.random() * 900;

      setDots((prevDots) => {
        // Mantém o número de pontos até o máximo definido
        if (prevDots.length >= MAX_DOTS) {
          return [...prevDots.slice(1), { id: Math.random(), x, y }];
        }
        return [...prevDots, { id: Math.random(), x, y }];
      });
    }, 500); // Intervalo entre os pontos emitidos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="foto">
        <img src={arteGlobo} alt="arteGlobo" />
      </div>
      <div className="foto-sem-rotacionar">
        <img
          src={arteNome}
          alt="arteNome"
          style={{ width: "310px", height: "auto" }}
        />
      </div>
      <div className="foto-tag foto-tag1">
        <img
          src={arteTag}
          alt="arteTag"
          style={{ width: "900px", height: "auto" }}
        />
      </div>
      <div className="foto-tag foto-tag2">
        <img
          src={arteTag}
          alt="arteTag"
          style={{ width: "900px", height: "auto" }}
        />
      </div>
      <div className="foto-tag foto-tag3">
        <img
          src={arteTag}
          alt="arteTag"
          style={{ width: "900px", height: "auto" }}
        />
      </div>
      <div className="foto-tag foto-tag4">
        <img
          src={arteTag}
          alt="arteTag"
          style={{ width: "900px", height: "auto" }}
        />
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
        <div className="dot" style={{ opacity: 0 }} />
      </div>
    </div>
  );
}

export default App;
