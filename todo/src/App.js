import React from 'react';


function TodoApp() {
  const [tasks, setTasks] = React.useState([
    'Рассказать про React JS',
    'Установить ноду',
    'Создать список задач'
  ]);

  const addTask = () => {
    const value = document.querySelector('input').value;
    console.log(value);
    setTasks([
      ...tasks,
      value
    ]);
    document.querySelector('input').value = '';
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <div className="TodoApp">
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task} <button onClick={() => {removeTask(index)}}>X</button>
            </li>
          )
        })}
      </ul>
      <input type="text" placeholder="ВВедите текст" />
      <button onClick={addTask}>Добавить задачу</button>
    </div>
  );
}

export default TodoApp;
