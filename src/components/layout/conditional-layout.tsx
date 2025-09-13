"use client";

import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { AppShell } from './app-shell';
import { Loader2 } from 'lucide-react';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If on landing page, show without app shell
  if (pathname === '/landing') {
    return <>{children}</>;
  }

  // If user is not authenticated and not on landing page, redirect will happen via middleware
  if (!user) {
    return <>{children}</>;
  }

  // For authenticated users, show the full app shell
  return <AppShell>{children}</AppShell>;
}




