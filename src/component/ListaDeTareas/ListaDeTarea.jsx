
import { useState, useEffect } from "react";
import Formulario from "../Fromulario/Formulario";
import Tarea from "../Tarea/Tarea";
import Alert from 'react-bootstrap/Alert';
import './ListaDeTarea.css';

const obtenerDatos = () => {
  const datos = localStorage.getItem('keyS');
  try {
    return JSON.parse(datos) || [];
  } catch (error) {
    console.error("Error al analizar datos:", error);
    return [];
  }
};

const ListaDeTarea = () => {
  const [tareas, setTareas] = useState(obtenerDatos());
  const [alert, setAlert] = useState(false);

  const variant = "success";

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
    // Actualiza el almacenamiento local
    localStorage.setItem('keyS', JSON.stringify([...tareas, nuevaTarea]));
  };

  const eliminarTarea = (id) => {
    const tareaActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareaActualizadas);
    setAlert(false);
    // Actualiza el almacenamiento local
    localStorage.setItem('keyS', JSON.stringify(tareaActualizadas));
  };

  const completarTarea = (id) => {
    const tareaActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
        setAlert(true);
      }
      return tarea;
    });
    setTareas(tareaActualizadas);
    
    // Actualiza el almacenamiento local
    localStorage.setItem('keyS', JSON.stringify(tareaActualizadas));
  };

  useEffect(() => {
    localStorage.setItem('keyS', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div>
        {tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={() => completarTarea(tarea.id)}
            eliminarTarea={() => eliminarTarea(tarea.id)}
          />
        )}
      </div>
      {alert && (
        <Alert className="alerta" key={variant} variant={variant} onClose={() => setAlert(false)} dismissible>
          Tarea completada!
        </Alert>
      )}
    </>
  );
};

export default ListaDeTarea;
