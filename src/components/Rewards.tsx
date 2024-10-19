import React, { useState } from 'react';
import { Gift, ExternalLink } from 'lucide-react';

const Rewards: React.FC = () => {
  const [rewards, setRewards] = useState([
    { id: 1, name: 'Limited Edition NFT', cost: 5000, available: true },
    { id: 2, name: 'Exclusive Telegram Sticker Pack', cost: 1000, available: true },
    { id: 3, name: 'VIP Access to Online Town Hall', cost: 3000, available: true },
  ]);

  const [userCoins, setUserCoins] = useState(4000); // Assume user has 4000 coins

  const redeemReward = (id: number, cost: number) => {
    if (userCoins >= cost) {
      setRewards(rewards.map(reward =>
        reward.id === id ? { ...reward, available: false } : reward
      ));
      setUserCoins(prevCoins => prevCoins - cost);
      alert('Reward redeemed successfully!');
    } else {
      alert('Not enough coins to redeem this reward!');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Rewards</h2>
      <p className="mb-4">Your coins: {userCoins}</p>
      <ul className="space-y-4">
        {rewards.map(reward => (
          <li key={reward.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold">{reward.name}</span>
                <p className="text-sm text-gray-600">{reward.cost} coins</p>
              </div>
              <button
                onClick={() => redeemReward(reward.id, reward.cost)}
                disabled={!reward.available}
                className={`px-3 py-1 rounded flex items-center ${
                  reward.available
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-gray-300 text-gray-500'
                }`}
              >
                {reward.available ? (
                  <>
                    <Gift className="mr-1" size={16} />
                    Redeem
                  </>
                ) : (
                  'Redeemed'
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">NFT Marketplace</h3>
        <a
          href="https://opensea.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-800 flex items-center"
        >
          View NFT Auctions
          <ExternalLink className="ml-1" size={16} />
        </a>
      </div>
    </div>
  );
};

export default Rewards;