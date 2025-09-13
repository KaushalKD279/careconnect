import { NewsScheduler } from './news-scheduler';
import { MedicationNotifier } from './medication-notifier';
import { ensureAuthTables } from './db';

export async function initializeServices() {
  try {
    // Ensure auth tables exist first
    await ensureAuthTables();
    
    // Start the news scheduler
    NewsScheduler.start();
    // Start medication notifier
    MedicationNotifier.start();
    
    console.log('All services initialized successfully');
  } catch (error) {
    console.error('Error initializing services:', error);
  }
}

// Auto-initialize in development
if (process.env.NODE_ENV === 'development') {
  // Small delay to ensure database connection is ready
  setTimeout(async () => {
    await initializeServices();
  }, 2000);
}


