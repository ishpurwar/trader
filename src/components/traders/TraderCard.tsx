'use client';

import React from 'react';
import { Star, Users } from 'lucide-react';
import { useAuth } from '@/hook/useAuth';
import { Trader } from '@/types';
import { MiniChart } from './MiniChart';

interface TraderCardProps {
  trader: Trader;
  isCompact?: boolean;
}

export const TraderCard: React.FC<TraderCardProps> = ({ trader, isCompact = false }) => {
  const { user } = useAuth();
  
  const handleCopy = () => {
    if (!user) {
      alert('Please sign in to copy trades');
      return;
    }
    alert(`Copying trades from ${trader.name}`);
  };

  return (
    <div className={`bg-gray-800 rounded-lg p-4 border border-gray-700 ${trader.highlighted ? 'ring-2 ring-yellow-500' : ''}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg">
            {trader.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-medium">{trader.name}</h3>
              {trader.isApi && <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">API</span>}
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <Users className="w-3 h-3" />
              {trader.followers}
            </div>
          </div>
        </div>
        <Star className="w-5 h-5 text-gray-400 hover:text-yellow-400 cursor-pointer" />
      </div>

      {!isCompact && (
        <div className="mb-4">
          <MiniChart color={trader.chartColor} />
        </div>
      )}

      <div className="text-sm space-y-1 mb-4">
        <div className="text-gray-400">30 Days PNL</div>
        <div className="text-2xl font-bold text-green-400">{trader.pnl}</div>
        <div className="text-green-400">ROI {trader.roi}</div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-xs text-gray-400 mb-4">
        <div>
          <div>AUM</div>
          <div className="text-white">{trader.aum}</div>
        </div>
        <div>
          <div>30 Days MDD</div>
          <div className="text-white">{trader.mdd}</div>
        </div>
        <div>
          <div>Sharpe Ratio</div>
          <div className="text-white">{trader.sharpeRatio}</div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors">
          Mock
        </button>
        <button
          onClick={handleCopy}
          className="flex-1 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition-colors font-medium"
        >
          {isCompact ? 'Quick Copy' : 'Copy'}
        </button>
      </div>
    </div>
  );
};