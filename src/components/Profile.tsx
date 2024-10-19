import React, { useState } from 'react';
import { User, Share2 } from 'lucide-react';

const Profile: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    coins: 1000,
    referrals: 5,
    referralBonus: 250,
  });

  const [referralLink, setReferralLink] = useState('https://redcapcoin.com/ref/johndoe');

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center mb-4">
          <User className="text-red-600 mr-2" size={32} />
          <h2 className="text-2xl font-bold">{user.name}</h2>
        </div>
        <div className="mb-4">
          <p className="text-lg">Total Coins: <span className="font-bold">{user.coins}</span></p>
          <p className="text-lg">Referrals: <span className="font-bold">{user.referrals}</span></p>
          <p className="text-lg">Referral Bonus: <span className="font-bold">{user.referralBonus}</span></p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Your Referral Link</h3>
          <div className="flex items-center">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-grow p-2 border rounded-l"
            />
            <button
              onClick={copyReferralLink}
              className="bg-red-600 text-white px-4 py-2 rounded-r hover:bg-red-700 flex items-center"
            >
              <Share2 className="mr-1" size={16} />
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;