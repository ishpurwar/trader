'use client';

import React from 'react';
import { useAuth } from '@/hook/useAuth';
import { UserProfileDropdown } from '@/components/auth/UserProfileDropdown';

interface HeaderProps {
  onShowAuthModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowAuthModal }) => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
              <span className="text-black font-bold">B</span>
            </div>
            <span className="text-xl font-bold">BINANCE</span>
          </div>
          <button className="text-yellow-400 hover:text-yellow-300">Buy Crypto</button>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <UserProfileDropdown user={user} onSignOut={handleSignOut} />
          ) : (
            <>
              <button
                onClick={onShowAuthModal}
                className="text-gray-400 hover:text-white"
              >
                Log In
              </button>
              <button
                onClick={onShowAuthModal}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
