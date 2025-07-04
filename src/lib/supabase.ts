export const createSupabaseClient = () => {
  return {
    auth: {
      signInWithOAuth: async (provider: { provider: string; options?: any }) => {
        // Simulate OAuth flow
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockUser = {
          id: 'google-user-123',
          email: 'user@gmail.com',
          user_metadata: {
            full_name: 'John Doe',
            avatar_url: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
            provider_id: 'google'
          }
        };
        
        // Simulate successful OAuth
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('supabase-auth-change', {
            detail: { user: mockUser, session: { access_token: 'mock-token' } }
          }));
        }
        
        return { data: { user: mockUser }, error: null };
      },
      
      signOut: async () => {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('supabase-auth-change', {
            detail: { user: null, session: null }
          }));
        }
        return { error: null };
      },
      
      getSession: async () => {
        // Check if user is already signed in (simulate persistence)
        if (typeof window !== 'undefined') {
          const stored = localStorage.getItem('supabase-user');
          if (stored) {
            const user = JSON.parse(stored);
            return { data: { session: { user } }, error: null };
          }
        }
        return { data: { session: null }, error: null };
      },
      
      onAuthStateChange: (callback: (event: string, session: any) => void) => {
        if (typeof window === 'undefined') return { data: { subscription: { unsubscribe: () => {} } } };
        
        const handler = (event: CustomEvent) => {
          const { user, session } = event.detail;
          if (user) {
            localStorage.setItem('supabase-user', JSON.stringify(user));
          } else {
            localStorage.removeItem('supabase-user');
          }
          callback('SIGNED_IN', { user, session });
        };
        
        window.addEventListener('supabase-auth-change', handler as EventListener);
        
        return {
          data: {
            subscription: {
              unsubscribe: () => {
                window.removeEventListener('supabase-auth-change', handler as EventListener);
              }
            }
          }
        };
      }
    }
  };
};

export const supabase = createSupabaseClient();