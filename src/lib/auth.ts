import { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { getDbPool } from './db';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'guest';
  createdAt: Date;
}

export async function createUser(email: string, name: string, password: string): Promise<User> {
  const id = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const client = await getDbPool().connect();
  try {
    await client.query(
      'INSERT INTO public.users (id, email, name, password_hash, role) VALUES ($1, $2, $3, $4, $5)',
      [id, email, name, hashPassword(password), 'user']
    );
    return {
      id,
      email,
      name,
      role: 'user',
      createdAt: new Date()
    };
  } finally {
    client.release();
  }
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const client = await getDbPool().connect();
  try {
    const result = await client.query('SELECT * FROM public.users WHERE email = $1', [email]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      id: row.id,
      email: row.email,
      name: row.name,
      role: row.role,
      createdAt: new Date(row.created_at)
    };
  } finally {
    client.release();
  }
}

export async function getUserById(id: string): Promise<User | null> {
  const client = await getDbPool().connect();
  try {
    const result = await client.query('SELECT * FROM public.users WHERE id = $1', [id]);
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      id: row.id,
      email: row.email,
      name: row.name,
      role: row.role,
      createdAt: new Date(row.created_at)
    };
  } finally {
    client.release();
  }
}

export async function createSession(userId: string): Promise<string> {
  const sessionId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const client = await getDbPool().connect();
  try {
    await client.query(
      'INSERT INTO public.sessions (id, user_id, expires_at) VALUES ($1, $2, $3)',
      [sessionId, userId, expires]
    );
    return sessionId;
  } catch (error) {
    console.error('createSession error:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function getSession(sessionId: string): Promise<{ userId: string; expires: Date } | null> {
  const client = await getDbPool().connect();
  try {
    const result = await client.query(
      'SELECT user_id, expires_at FROM public.sessions WHERE id = $1 AND expires_at > NOW()',
      [sessionId]
    );
    if (result.rows.length === 0) return null;
    const row = result.rows[0];
    return {
      userId: row.user_id,
      expires: new Date(row.expires_at)
    };
  } catch (error) {
    console.error('getSession error:', error);
    return null;
  } finally {
    client.release();
  }
}

export async function deleteSession(sessionId: string): Promise<void> {
  const client = await getDbPool().connect();
  try {
    await client.query('DELETE FROM public.sessions WHERE id = $1', [sessionId]);
  } finally {
    client.release();
  }
}

export async function getCurrentUser(request: NextRequest): Promise<User | null> {
  try {
    const sessionId = request.cookies.get('session')?.value;
    if (!sessionId) return null;
    
    const session = await getSession(sessionId);
    if (!session) return null;
    
    const user = await getUserById(session.userId);
    return user;
  } catch (error) {
    console.error('getCurrentUser error:', error);
    return null;
  }
}

export async function getCurrentUserId(request: NextRequest): Promise<string | null> {
  const user = await getCurrentUser(request);
  return user?.id || null;
}

// Simple password hashing (in production, use bcrypt)
export function hashPassword(password: string): string {
  return Buffer.from(password).toString('base64');
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return hashPassword(password) === hashedPassword;
}



