import { neon } from '@neondatabase/serverless';

const DATABASE_URL = import.meta.env.VITE_NEON_DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('VITE_NEON_DATABASE_URL is not defined in environment variables');
}

export const sql = neon(DATABASE_URL);
