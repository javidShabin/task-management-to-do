// src/components/HomePage.js
import React, { useState } from 'react';

const HomePage = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(''); // Clear input field
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <header className="w-full max-w-md bg-violet-700 text-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Task Manager</h1>
        <p className="mt-2 text-lg sm:text-xl">Stay organized and manage your tasks effectively!</p>
      </header>

      <main className="mt-8 w-full max-w-md">
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-4 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTask}
            className=" bg-violet-600 text-white p-4 rounded-r-lg hover:bg-violet-500 transition duration-200"
          >
            Add
          </button>
        </div>

        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {tasks.map((task, index) => (
            <li key={index} className={`p-4 flex justify-between items-center ${task.completed ? 'bg-green-100' : 'hover:bg-gray-100'} transition duration-200`}>
              <div
                onClick={() => toggleTaskCompletion(index)}
                className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-black'}`}
              >
                {task.text}
              </div>
              <button
                onClick={() => handleDeleteTask(index)}
                className="ml-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-500 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
