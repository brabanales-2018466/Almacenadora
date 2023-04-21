import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [tareas, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState({ name: '', descripcion: '', fechaInicio: '', fechaCierre: '', creador: '', estado: '' });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = e => {
    const { name, value } = e.target;
    setInputTask(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingIndex === -1) {
      setTasks([...tareas, inputTask]);
    } else {
      const newTasks = [...tareas];
      newTasks[editingIndex] = inputTask;
      setTasks(newTasks);
      setEditingIndex(-1);
    }
    setInputTask({ name: '', descripcion: '', fechaInicio: '', fechaCierre: '', creador: '', estado: ''});
  };

  const handleEdit = (index, task) => {
    setEditingIndex(index);
    setInputTask(task);
  };

  const handleDelete = index => {
    setTasks(tareas.filter((task, i) => i !== index));
  };

  const handleCheckbox = index => {
    setTasks(tareas.map((task, i) => i === index ? { ...task, completada: !task.completada } : task));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Tarea:
          <input type="text" name="name" value={inputTask.name} onChange={handleChange} />
        </label>
        <label>
          Descripción:
          <input type="text" name="descripcion" value={inputTask.descripcion} onChange={handleChange} />
        </label>
        <label>
          Fecha de inicio:
          <input type="date" name="fechaInicio" value={inputTask.fechaInicio} onChange={handleChange} />
        </label>
        <label>
          Fecha de cierre:
          <input type="date" name="fechaCierre" value={inputTask.fechaCierre} onChange={handleChange} />
        </label>
        <label>
          Creador de la tarea:
          <input type="text" name="creador" value={inputTask.creador} onChange={handleChange} />
        </label>
        <label>
          Estado de la tarea:
          <input type="text" name="estado" value={inputTask.estado} onChange={handleChange} />
        </label>
        <button type="submit">{editingIndex === -1 ? 'Agregar' : 'Guardar'}</button>
      </form>

        {tareas.map((task, index) => (
          <li key={index}>
              <input type="checkbox" checked={task.completada} onChange={() => handleCheckbox(index)} />
              <h2>{task.name}</h2>
              <br/>
              <table>
                <tr>
                  <th>Descripción:</th>
                  <th>Fecha de inicio:</th>
                  <th>Fecha de cierre:</th>
                  <th>Creador de la tarea:</th>
                  <th>Estado de la tarea:</th>
                </tr>
                <tr>
                  <td>{task.descripcion}</td>
                  <td>{task.fechaInicio}</td>
                  <td>{task.fechaCierre}</td>
                  <td>{task.creador}</td>
                  <td>{task.estado}</td>
                </tr>
              </table>
            <div>
              <button onClick={() => handleDelete(index)}>Eliminar</button>
              <button onClick={() => handleEdit(index, task)}>Editar</button>
            </div>
          </li>
        ))}
    </div>
  );
}
export default TodoList;
