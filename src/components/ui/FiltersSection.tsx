import React from 'react';
import { Search, Filter, Zap } from 'lucide-react';

interface FiltersSectionProps {
  portfolioTab: 'all' | 'favorites';
  onPortfolioTabChange: (tab: 'all' | 'favorites') => void;
  timeFilter: string;
  onTimeFilterChange: (filter: string) => void;
  pnlFilter: string;
  onPnlFilterChange: (filter: string) => void;
  smartFilter: boolean;
  onSmartFilterChange: (enabled: boolean) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  onDailyPicksClick: () => void;
}

const FiltersSection: React.FC<FiltersSectionProps> = ({
  portfolioTab,
  onPortfolioTabChange,
  timeFilter,
  onTimeFilterChange,
  pnlFilter,
  onPnlFilterChange,
  smartFilter,
  onSmartFilterChange,
  searchQuery,
  onSearchQueryChange,
  onDailyPicksClick
}) => {
  return (
    <>
      {/* Portfolio Tabs and Daily Picks */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <button
              onClick={() => onPortfolioTabChange('all')}
              className={`px-4 py-2 ${
                portfolioTab === 'all' 
                  ? 'text-yellow-400 border-b-2 border-yellow-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Portfolios
            </button>
            <button
              onClick={() => onPortfolioTabChange('favorites')}
              className={`px-4 py-2 ${
                portfolioTab === 'favorites' 
                  ? 'text-yellow-400 border-b-2 border-yellow-400' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              My Favorites
            </button>
          </div>
        </div>
        <button
          onClick={onDailyPicksClick}
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition-colors flex items-center gap-2"
        >
          <Zap className="w-4 h-4" />
          Daily Picks
        </button>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center gap-4 mb-8">
        <select
          value={timeFilter}
          onChange={(e) => onTimeFilterChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
        >
          <option value="30Days">30 Days</option>
          <option value="7Days">7 Days</option>
          <option value="1Day">1 Day</option>
        </select>
        
        <select
          value={pnlFilter}
          onChange={(e) => onPnlFilterChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-white"
        >
          <option value="PnL">PnL</option>
          <option value="ROI">ROI</option>
          <option value="AUM">AUM</option>
        </select>

        <label className="flex items-center gap-2 text-gray-400">
          <input
            type="checkbox"
            checked={smartFilter}
            onChange={(e) => onSmartFilterChange(e.target.checked)}
            className="rounded"
          />
          Smart Filter
        </label>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Trader's Name"
              value={searchQuery}
              onChange={(e) => onSearchQueryChange(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded pl-10 pr-4 py-2 text-white w-64"
            />
          </div>
          <button className="p-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
};

export default FiltersSection;