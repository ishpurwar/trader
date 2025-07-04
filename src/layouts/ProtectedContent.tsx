import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedContentProps {
  children: React.ReactNode;
}

const ProtectedContent: React.FC<ProtectedContentProps> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }
  
  return <>{children}</>;
};

export default ProtectedContent;