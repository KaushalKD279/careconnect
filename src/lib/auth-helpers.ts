import { NextRequest } from 'next/server';
import { getCurrentUserId } from './auth';

export async function getUserIdFromRequest(req: NextRequest): Promise<string> {
  // First try to get from authentication system
  const authUserId = await getCurrentUserId(req);
  if (authUserId) {
    return authUserId;
  }
  
  // Fallback to header (for backward compatibility)
  const headerUserId = req.headers.get('x-user-id');
  if (headerUserId) {
    return headerUserId;
  }
  
  // Default to guest user
  return 'guest-user';
}



