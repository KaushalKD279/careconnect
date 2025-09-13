import { NextRequest, NextResponse } from 'next/server';
import { createUser, getUserByEmail, createSession, verifyPassword, hashPassword } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name, isGuest } = await request.json();

    if (isGuest) {
      // Create guest session
      const sessionId = await createSession('guest-user');
      const response = NextResponse.json({ 
        success: true, 
        user: { id: 'guest-user', email: 'guest@example.com', name: 'Guest User', role: 'guest' }
      });
      response.cookies.set('session', sessionId, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });
      return response;
    }

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    // Check if user exists
    let user = await getUserByEmail(email);
    
    if (!user) {
      // Create new user if name is provided
      if (!name) {
        return NextResponse.json({ error: 'User not found. Please provide a name to create an account.' }, { status: 404 });
      }
      user = await createUser(email, name, password);
    } else {
      // Verify password for existing user
      if (!verifyPassword(password, hashPassword(password))) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      }
    }

    // Create session
    const sessionId = await createSession(user.id);
    const response = NextResponse.json({ 
      success: true, 
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });
    response.cookies.set('session', sessionId, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    
    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



