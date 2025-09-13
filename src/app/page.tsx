"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { Loader2 } from 'lucide-react';

export default function RootPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('RootPage - user:', user, 'isLoading:', isLoading);
    if (!isLoading) {
      if (user) {
        // User is authenticated, redirect to dashboard
        console.log('RootPage - redirecting to dashboard');
        router.push('/dashboard');
      } else {
        // User is not authenticated, redirect to landing
        console.log('RootPage - redirecting to landing');
        router.push('/landing');
      }
    }
  }, [user, isLoading, router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    </div>
  );
}
