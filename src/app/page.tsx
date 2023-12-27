"use client"
import { useState } from 'react';

/*todo app without components and using useState hook only*/
const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [editingTaskIndex, setEditingTaskIndex] = useState<number | null>(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => ([...prevTasks, newTask]));
      setNewTask('');
    }
  };

  const handleEditTask = (index: number) => {
    setEditingTaskIndex(index);
    setNewTask(tasks[index]);
  };

  const handleUpdateTask = () => {
    if (editingTaskIndex !== null && newTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editingTaskIndex] = newTask;
      setTasks(updatedTasks);
      setNewTask('');
      setEditingTaskIndex(null);
    }
  };

  const handleDeleteTask = (index: number) => {
   
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="mt-10 flex items-center justify-center text-balance ">
      <div className=" max-w-md w-full p-4 bg-gray-100 shadow-md rounded-md ">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={editingTaskIndex !== null ? handleUpdateTask : handleAddTask} className="bg-blue-400 text-white px-4 py-2 rounded-md">
            {editingTaskIndex !== null ? 'Update Task' : 'Add Task'}
          </button>
        </div>

        <ul className="mt-4">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center border-b py-2">
              <div>{task}</div>
              <div >
                <button onClick={() => handleEditTask(index)} className="text-yellow-500 font-bold">
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(index)} className="text-red-500 font-bold px-4">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
