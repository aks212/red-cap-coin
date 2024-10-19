import React, { useState } from 'react';
import { CheckSquare, Twitter, MessageCircle } from 'lucide-react';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Tap 100 times today', completed: false, reward: 50 },
    { id: 2, description: 'Share on Twitter', completed: false, reward: 100 },
    { id: 3, description: 'Join Telegram group', completed: false, reward: 75 },
  ]);

  const completeTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: true } : task
    ));
    // Here you would also update the user's coin balance
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {task.description.includes('Twitter') && <Twitter className="mr-2 text-blue-400" />}
                {task.description.includes('Telegram') && <MessageCircle className="mr-2 text-blue-500" />}
                {!task.description.includes('Twitter') && !task.description.includes('Telegram') && <CheckSquare className="mr-2 text-red-600" />}
                <span>{task.description}</span>
              </div>
              <button
                onClick={() => completeTask(task.id)}
                disabled={task.completed}
                className={`px-3 py-1 rounded ${
                  task.completed
                    ? 'bg-gray-300 text-gray-500'
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                {task.completed ? 'Completed' : `+${task.reward}`}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;