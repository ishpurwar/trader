import React from 'react';
import { TrendingUp } from 'lucide-react';

const LeadTraderBanner: React.FC = () => {
  return (
    <div className="px-6 py-4  text-black" style={{background: "linear-gradient(to right, #059669 0%, #059669 65%, #000000 100%)"}}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-green-500" />
          </div>
          <span className="font-medium">
            Be a Futures Lead Trader, enjoy up to 30% profit share + 10% commission rebate!
          </span>
        </div>
        <button className="bg-black text-green-400 px-6 py-2 rounded hover:bg-black-800 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LeadTraderBanner;