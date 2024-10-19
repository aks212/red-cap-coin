import React from 'react';
import Link from 'next/link';
import { Home, CheckSquare, Vote, User, Gift, Award } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-red-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Red Cap Coin</Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-red-200"><Home size={24} /></Link>
          <Link href="/tasks" className="hover:text-red-200"><CheckSquare size={24} /></Link>
          <Link href="/voting" className="hover:text-red-200"><Vote size={24} /></Link>
          <Link href="/profile" className="hover:text-red-200"><User size={24} /></Link>
          <Link href="/rewards" className="hover:text-red-200"><Gift size={24} /></Link>
          <Link href="/leaderboard" className="hover:text-red-200"><Award size={24} /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;