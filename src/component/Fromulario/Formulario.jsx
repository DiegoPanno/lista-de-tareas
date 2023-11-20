import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const [input, setInput] = useState("");
  const [idContador, setIdContador] = useState(1);

  const cambiosInput = (e) => {
    setInput(e.target.value);
  };

  const generarId = () => {
    setIdContador((prevId) => prevId + 1);
    return idContador + 1;
  };

  const envios = (e) => {
    e.preventDefault();

    const tareaNueva = {
      id: generarId(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput("");
  };

  return (
    <>
      <form onSubmit={envios} className="conte-input">
        <input
          onChange={cambiosInput}
          type="text"
          maxLength={40}
          placeholder="Escribe tu tarea..."
          value={input}
          className="input"
        />
        <button className="input-btn">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
