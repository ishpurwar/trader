'use client';

import React from 'react';
import { X } from 'lucide-react';
import { dailyPicksData } from '@/lib/data';
import { TraderCard } from '@/components/traders/TraderCard';

interface DailyPicksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DailyPicksModal: React.FC<DailyPicksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-white">Daily Picks</h2>
            <p className="text-gray-400 mt-1">
              An algorithm to identify top traders with superior trading skills, high profits, and low drawdowns.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          {dailyPicksData.map(trader => (
            <TraderCard key={trader.id} trader={trader} isCompact={true} />
          ))}
        </div>
      </div>
    </div>
  );
};