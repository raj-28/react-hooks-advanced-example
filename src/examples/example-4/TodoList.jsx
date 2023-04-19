import React, { useState, useEffect } from 'react';
import Mytodo from './Mytodo';

function TodoList() {
  // Declare two state variables: tasks and newTask
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Use the useEffect hook to retrieve saved tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if(savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Use the useEffect hook to save tasks to local storage whenever the tasks state variable changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Declare a function to update the newTask state variable whenever the user types in the input field
  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  }

  // Declare a function to add a new task to the tasks state variable when the user clicks the "Add Task" button
  const handleAddTask = () => {
    if(newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), task: newTask, completed: false }]);
      setNewTask('');
    }
  }

  // Declare a function to toggle the completed value of a task when the user clicks on it
  const handleCompleteTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  // Render the UI of the to-do list application
  return (
    <div>
        <Mytodo/>
      <h1>To-Do List</h1>
      {/* Input field for adding a new task */}
      <input type="text" value={newTask} onChange={handleNewTask} />
      {/* Button for adding a new task */}
      <button onClick={handleAddTask}>Add Task</button>
      {/* List of tasks */}
      <ul>
        {/* Map over the tasks state variable and render a list item for each task */}
        {tasks.map((task) => (
          <li key={task.id} onClick={() => handleCompleteTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</li>
        ))}
      </ul>
      
    </div>
    
  );
}

export default TodoList;
