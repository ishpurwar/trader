'use client';

import React, { useState } from 'react';
import { User, LogOut, Settings } from 'lucide-react';
import { User as UserType } from '@/types';

interface UserProfileDropdownProps {
  user: UserType;
  onSignOut: () => void;
}

export const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ 
  user, 
  onSignOut 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
          {user.user_metadata?.avatar_url ? (
            <img 
              src={user.user_metadata.avatar_url} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-4 h-4 text-gray-300" />
          )}
        </div>
        <span className="text-sm text-gray-300 hidden md:block">
          {user.user_metadata?.full_name || user.email}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
          <div className="p-4 border-b border-gray-700">
            <p className="text-sm font-medium text-white">
              {user.user_metadata?.full_name || 'User'}
            </p>
            <p className="text-xs text-gray-400">{user.email}</p>
          </div>
          
          <div className="p-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button
              onClick={onSignOut}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-gray-700 rounded"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};