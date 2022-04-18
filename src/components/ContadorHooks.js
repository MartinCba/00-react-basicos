import React, { useState } from "react";

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const reset = () => {
    setContador(0);
  };

  return (
    <>
      <h2>Hooks - useState</h2>
      <nav>
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={reset}>Reset</button>
      </nav>
    </>
  );
}
