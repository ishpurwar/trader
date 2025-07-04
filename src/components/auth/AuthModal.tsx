'use client';

import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '@/hook/useAuth';
import { GoogleSignInButton } from './GoogleSignInButton';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { signInWithGoogle, signingIn } = useAuth();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Sign In to Binance</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Sign in to access copy trading features and manage your portfolio
            </p>
            
            <GoogleSignInButton
              onClick={handleGoogleSignIn}
              loading={signingIn}
            />
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>
              By signing in, you agree to our{' '}
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};