export interface User {
  id: string;
  email: string;
  user_metadata: {
    full_name?: string;
    avatar_url?: string;
    provider_id?: string;
  };
}

export interface Trader {
  id: number;
  name: string;
  avatar: string;
  followers: string;
  isApi?: boolean;
  pnl: string;
  roi: string;
  aum: string;
  mdd: string;
  sharpeRatio: string;
  chartColor: 'green' | 'red';
  highlighted?: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signingIn: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

export interface Session {
  user: User;
  access_token: string;
}
