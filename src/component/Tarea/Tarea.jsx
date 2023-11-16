import { AiOutlineDelete } from "react-icons/ai";
import "./Tarea.css";

const Tarea = (props) => {
  const { id, texto, eliminarTarea } = props;

  const handleEliminarTarea = () => {
    eliminarTarea(id);
  };

  return (
    <div className="conte-tarea">
      <div className="tarea">
        <div className="tarea-texto">✔️ {props.texto}</div>
        <div className="tarea-borrar" onClick={handleEliminarTarea}>
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default Tarea;
