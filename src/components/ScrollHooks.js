import React, { useState, useEffect } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //console.log("moviendo el scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
      //console.log("fase de desmontaje");
    };
  });

  useEffect(() => {
    //console.log("fase de montaje");
  }, []);

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}
