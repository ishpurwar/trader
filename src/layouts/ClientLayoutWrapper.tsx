'use client';

import React, { useState } from 'react';
import { Header } from '@/components/ui/Header';
import { AuthModal } from '@/components/auth/AuthModal';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({ children }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <>
      <Header onShowAuthModal={() => setShowAuthModal(true)} />
      {children}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
};