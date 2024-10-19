import React, { useState, useEffect } from 'react';
import { Trophy, User } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: 'Alice', coins: 10000, ideas: 15 },
    { id: 2, name: 'Bob', coins: 8500, ideas: 12 },
    { id: 3, name: 'Charlie', coins: 7200, ideas: 10 },
    { id: 4, name: 'David', coins: 6800, ideas: 8 },
    { id: 5, name: 'Eve', coins: 5500, ideas: 6 },
  ]);

  useEffect(() => {
    // Here you would fetch the leaderboard data from your backend
    // For now, we'll use the static data
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Trophy className="text-yellow-500 mr-2" size={28} />
        Leaderboard
      </h2>
      <ul className="space-y-4">
        {leaderboard.map((user, index) => (
          <li key={user.id} className="bg-white p-4 rounded-lg shadow flex items-center">
            <span className="text-2xl font-bold mr-4 w-8 text-center">
              {index + 1}
            </span>
            <User className="text-red-600 mr-2" size={24} />
            <div className="flex-grow">
              <span className="font-semibold">{user.name}</span>
              <p className="text-sm text-gray-600">{user.coins} coins | {user.ideas} ideas</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;