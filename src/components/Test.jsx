import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.completed)
    : tasks.filter((task) => !task.completed);

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <label>
          Show completed tasks
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </label>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
            <button onClick={() => handleTaskCompletion(task.id)}>
              {task.completed ? 'Unmark' : 'Mark'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
