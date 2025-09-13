"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Shield, Users, Bell, FileText, Calendar, MessageSquare, Globe, ShoppingCart, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/auth-context';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '', name: '' });
  const { toast } = useToast();
  const router = useRouter();
  const { login, loginAsGuest } = useAuth();

  const handleLogin = async (isGuest: boolean = false) => {
    setIsLoading(true);
    try {
      let success = false;
      if (isGuest) {
        success = await loginAsGuest();
      } else {
        success = await login(loginData.email, loginData.password, loginData.name);
      }

      if (success) {
        toast({
          title: isGuest ? "Welcome, Guest!" : "Welcome back!",
          description: isGuest ? "You're now browsing as a guest user" : `Hello, ${loginData.name || 'User'}`
        });
        router.push('/');
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error instanceof Error ? error.message : "Please try again",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track vital signs, medication schedules, and get AI-powered health insights"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss medication doses with intelligent reminder notifications"
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Securely store and organize your medical documents and health records"
    },
    {
      icon: Users,
      title: "Family Network",
      description: "Connect with family members and share health updates safely"
    },
    {
      icon: MessageSquare,
      title: "AI Health Assistant",
      description: "Get instant answers to health questions with our AI-powered chat"
    },
    {
      icon: Globe,
      title: "News & Alerts",
      description: "Stay informed with health news and weather alerts relevant to your location"
    },
    {
      icon: ShoppingCart,
      title: "Shopping Lists",
      description: "Manage shopping lists for medications and health supplies"
    },
    {
      icon: AlertTriangle,
      title: "Emergency System",
      description: "Quick access to emergency contacts and nearby medical facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold font-headline">CareConnect</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => handleLogin(true)} disabled={isLoading}>
                Continue as Guest
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-headline mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Your Personal Health Companion
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            CareConnect is a comprehensive health management platform that helps you track your health, 
            manage medications, store medical records, and stay connected with your family - all in one place.
          </p>
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Sign in to access all features or continue as a guest</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => handleLogin(false)}
                    disabled={isLoading || !loginData.email || !loginData.password}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={loginData.name}
                      onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Create a password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={() => handleLogin(false)}
                    disabled={isLoading || !loginData.name || !loginData.email || !loginData.password}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>
                </TabsContent>
              </Tabs>
              
              <div className="mt-4 pt-4 border-t">
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => handleLogin(true)}
                  disabled={isLoading}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Continue as Guest
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Guest users have limited access to features
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4">Everything You Need for Health Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CareConnect brings together all the tools you need to manage your health and stay connected with your family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Ready to Take Control of Your Health?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust CareConnect to manage their health and stay connected with their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => handleLogin(false)} disabled={isLoading}>
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" onClick={() => handleLogin(true)} disabled={isLoading}>
              Try as Guest
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="font-semibold">CareConnect</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CareConnect. Built with ❤️ for better health management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
