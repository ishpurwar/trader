import React from 'react';
import { TrendingUp } from 'lucide-react';

const LeadTraderBanner: React.FC = () => {
  return (
    <div className="px-6 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6" />
          </div>
          <span className="font-medium">
            Be a Futures Lead Trader, enjoy up to 30% profit share + 10% commission rebate!
          </span>
        </div>
        <button className="bg-black text-yellow-400 px-6 py-2 rounded hover:bg-gray-800 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LeadTraderBanner;