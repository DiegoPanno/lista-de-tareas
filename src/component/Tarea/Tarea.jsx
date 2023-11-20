
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheck2 } from "react-icons/bs";
import "./Tarea.css";


const Tarea = (props) => {
  const { id, texto, completada, eliminarTarea, completarTarea } = props;
 
  return (
    <div className="conte-tarea">
      <div className={completada ? 'tarea tarea-completada' : 'tarea'}>
        <div className="tarea-texto" onClick={completarTarea}>
          <BsCheck2 /> {texto}
        </div>
        <div className="tarea-borrar" onClick={eliminarTarea}>
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default Tarea;
