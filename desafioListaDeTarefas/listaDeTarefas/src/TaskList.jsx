import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('taskIndex', index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const sourceIndex = parseInt(e.dataTransfer.getData('taskIndex'), 10);

    if (sourceIndex === targetIndex || sourceIndex < 0 || targetIndex < 0) return;

    const newTasks = [...tasks];
    const [movedTask] = newTasks.splice(sourceIndex, 1);
    newTasks.splice(targetIndex, 0, movedTask);
    setTasks(newTasks);
  };

  return (
    <div className="TaskList">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={handleAddTask}>Adicionar</button>
      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div className="TaskContent">{index + 1}. {t}</div>
            <button onClick={() => handleRemoveTask(index)} className="remove-btn">
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
