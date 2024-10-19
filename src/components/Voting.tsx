import React, { useState } from 'react';
import { Vote } from 'lucide-react';

const Voting: React.FC = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, title: 'Reduce government spending', votes: 0 },
    { id: 2, title: 'Increase funding for education', votes: 0 },
    { id: 3, title: 'Implement term limits for Congress', votes: 0 },
  ]);

  const [userCoins, setUserCoins] = useState(1000); // Assume user has 1000 coins

  const voteForIdea = (id: number) => {
    if (userCoins >= 10) {
      setIdeas(ideas.map(idea =>
        idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea
      ));
      setUserCoins(prevCoins => prevCoins - 10);
    } else {
      alert('Not enough coins to vote!');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Vote on Ideas</h2>
      <p className="mb-4">Your coins: {userCoins}</p>
      <ul className="space-y-4">
        {ideas.map(idea => (
          <li key={idea.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <span>{idea.title}</span>
              <div className="flex items-center">
                <span className="mr-2">{idea.votes} votes</span>
                <button
                  onClick={() => voteForIdea(idea.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 flex items-center"
                >
                  <Vote className="mr-1" size={16} />
                  Vote (10 coins)
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Voting;