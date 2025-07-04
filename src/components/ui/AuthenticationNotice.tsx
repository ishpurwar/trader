import React from 'react';
import { useAuth } from '@/hook/useAuth';

interface AuthenticationNoticeProps {
  onSignInClick: () => void;
}

const AuthenticationNotice: React.FC<AuthenticationNoticeProps> = ({ onSignInClick }) => {
  const { user } = useAuth();

  // Don't show the notice if user is signed in
  if (user) return null;

  return (
    <div className="mb-8 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Sign in to unlock full features
          </h3>
          <p className="text-gray-300">
            Sign in with Google to start copying trades, manage your portfolio, and access premium features.
          </p>
        </div>
        <button
          onClick={onSignInClick}
          className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-400 transition-colors font-medium"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AuthenticationNotice;