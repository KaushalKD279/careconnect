"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string, name?: string) => Promise<boolean>;
  loginAsGuest: () => Promise<boolean>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const refreshUser = async () => {
    try {
      console.log('refreshUser - checking authentication...');
      const response = await fetch('/api/auth/me');
      console.log('refreshUser - response status:', response.status);
      if (response.ok) {
        const data = await response.json();
        console.log('refreshUser - user data:', data.user);
        setUser(data.user);
      } else {
        console.log('refreshUser - not authenticated');
        setUser(null);
      }
    } catch (error) {
      console.error('Error refreshing user:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string, name?: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        // Also refresh user to ensure consistency
        await refreshUser();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const loginAsGuest = async (): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isGuest: true })
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        // Also refresh user to ensure consistency
        await refreshUser();
        return true;
      }
      return false;
    } catch (error) {
      console.error('Guest login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setUser(null);
      setIsLoading(false);
      // Redirect to landing page immediately after logout
      router.push('/landing');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout fails, redirect to landing page
      setUser(null);
      setIsLoading(false);
      router.push('/landing');
    }
  };

  useEffect(() => {
    refreshUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, loginAsGuest, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}



