import React, { useState, useEffect } from 'react';
import { Coin } from 'lucide-react';

const Home: React.FC = () => {
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newLevel = Math.floor(coins / 100) + 1;
    setLevel(newLevel);
    setProgress((coins % 100) / 100 * 100);
  }, [coins]);

  const handleTap = () => {
    setCoins(prevCoins => prevCoins + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-4xl font-bold mb-8 flex items-center">
        <Coin className="text-yellow-500 mr-2" size={40} />
        {coins}
      </div>
      <button
        onClick={handleTap}
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg transform transition-transform duration-100 active:scale-95"
      >
        Tap to Earn!
      </button>
      <div className="mt-8 w-full max-w-md">
        <div className="flex justify-between mb-2">
          <span>Level {level}</span>
          <span>{progress.toFixed(0)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-red-600 rounded-full h-4"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;