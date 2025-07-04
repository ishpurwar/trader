'use client';
import React from 'react';
import { Play } from 'lucide-react';

interface NavigationProps {
  activeTab: 'futures' | 'spot';
  setActiveTab: (tab: 'futures' | 'spot') => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-700">
      <div className="flex items-center gap-8">
        <button
          onClick={() => setActiveTab('futures')}
          className={`px-4 py-2 rounded ${
            activeTab === 'futures' 
              ? 'bg-yellow-500 text-black' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Futures
        </button>
        <button
          onClick={() => setActiveTab('spot')}
          className={`px-4 py-2 rounded relative ${
            activeTab === 'spot' 
              ? 'bg-yellow-500 text-black' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          Spot
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-black text-xs px-1 rounded">
            new
          </span>
        </button>
        <div className="ml-auto flex items-center gap-4">
          <Play className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">Watch Tutorial</span>
        </div>
      </div>
    </div>
  );
};