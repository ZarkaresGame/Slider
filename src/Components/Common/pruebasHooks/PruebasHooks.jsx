import React, { useState, useEffect } from "react";
import "./Prueba.css";

const PruebasHooks = ({ contador, setContador }) => {
  const arr = [
    "https://www.ggrecon.com/media/0b0pyosw/nazgul-mtg-card.jpg?mode=crop&width=682&quality=80&format=webp",
    "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2020/10/13014319/The-Art-of-Magic-The-Gathering-War-of-Spark-cover-Featured.jpg",
    "https://images.squarespace-cdn.com/content/v1/51360d4ee4b0f24e710ab469/1365449149191-MCPUGS7I1FP02CXMKDCG/art+id+121019+Mage-Controlled+Dragon+finished.jpg",
    "https://i.pinimg.com/736x/1c/95/e6/1c95e68404e6acd8fe2570909a57b4e0--fantasy-monster-mtg-art.jpg",
    "https://i.pinimg.com/originals/f4/64/fd/f464fd3604d3ad8c1813d1f6731caa3f.jpg",
  ];

  const [img, setImg] = useState(arr[contador - 1]);
  const maxContador = arr.length;

  useEffect(() => {
    setImg(arr[contador - 1]);
  }, [contador, arr]);

  const handleIzquierda = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setContador(maxContador);
    }
  };

  const handleDerecha = () => {
    if (contador < maxContador) {
      setContador(contador + 1);
    } else {
      setContador(1);
    }
  };

  return (
    <div className="container">
      <img src={img} alt="" className="img" />
      <h4 className="cont">{contador}</h4>
      <div className="botones-container">
        <button className="botones izquierda" onClick={handleIzquierda}>
          Izquierda
        </button>
        <button className="botones derecha" onClick={handleDerecha}>
          Derecha
        </button>
      </div>
    </div>
  );
};

export default PruebasHooks;
