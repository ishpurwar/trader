'use client';
import { AuthModal } from '@/components/auth/AuthModal';
import { DailyPicksModal } from '@/components/DailyPicksModal';
import { TraderCard } from '@/components/traders/TraderCard';
import AuthenticationNotice from '@/components/ui/AuthenticationNotice';
import FiltersSection from '@/components/ui/FiltersSection';
import { Header } from '@/components/ui/Header';
import LeadTraderBanner from '@/components/ui/LeadTraderBanner';
import { Navigation } from '@/components/ui/Navigation';
import { tradersData } from '@/lib/data';
import { Play } from 'lucide-react';
import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'futures' | 'spot'>('futures');
  const [portfolioTab, setPortfolioTab] = useState<'all' | 'favorites'>('all');
  const [timeFilter, setTimeFilter] = useState('30Days');
  const [pnlFilter, setPnlFilter] = useState('PnL');
  const [smartFilter, setSmartFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDailyPicks, setShowDailyPicks] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div >
      {/* Header */}
    
      
      {/* Navigation */}
     
      
      {/* Lead Trader Banner */}
      <LeadTraderBanner />
      
      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Main Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Futures Copy Trading</h1>
          <p className="text-xl text-gray-400 mb-6">
            Follow the world's top crypto traders and copy their trades with one click
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Play className="w-4 h-4 text-gray-400" />
            <span className="text-gray-400">
              Trader Futures Copy Trading Upgrades the Lead Trader Growth Plan
            </span>
          </div>
        </div>
        
        {/* Authentication Notice */}
        <AuthenticationNotice onSignInClick={() => setShowAuthModal(true)} />
        
        {/* Filters Section */}
        <FiltersSection
          portfolioTab={portfolioTab}
          onPortfolioTabChange={setPortfolioTab}
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          pnlFilter={pnlFilter}
          onPnlFilterChange={setPnlFilter}
          smartFilter={smartFilter}
          onSmartFilterChange={setSmartFilter}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          onDailyPicksClick={() => setShowDailyPicks(true)}
        />
        
        {/* Trader Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradersData.map(trader => (
            <TraderCard key={trader.id} trader={trader} />
          ))}
        </div>
      </div>
      
      {/* Modals */}
      <DailyPicksModal
        isOpen={showDailyPicks}
        onClose={() => setShowDailyPicks(false)}
      />
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}