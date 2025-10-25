#!/usr/bin/env node

/**
 * Restart Development Server
 * 
 * This script helps restart the dev server to pick up environment changes
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔄 Restarting development server...\n');

// Kill any existing dev server
console.log('🛑 Stopping existing dev server...');
try {
  // On Windows, we'll use taskkill
  const { exec } = await import('child_process');
  exec('taskkill /f /im node.exe', (error) => {
    if (error && !error.message.includes('not found')) {
      console.log('   No existing server to stop');
    } else {
      console.log('   ✅ Existing server stopped');
    }
  });
} catch (error) {
  console.log('   No existing server to stop');
}

// Wait a moment
await new Promise(resolve => setTimeout(resolve, 2000));

// Start new dev server
console.log('🚀 Starting new dev server...');
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

devProcess.on('error', (error) => {
  console.error('❌ Failed to start dev server:', error);
});

devProcess.on('exit', (code) => {
  console.log(`\n📊 Dev server exited with code ${code}`);
});

console.log('\n✅ Dev server should be starting...');
console.log('🌐 Open http://localhost:5173 in your browser');
console.log('🔧 Try accessing /admin for the admin panel');
console.log('\n💡 If you still see auth timeout errors:');
console.log('   1. Check browser console for errors');
console.log('   2. Clear browser cache');
console.log('   3. Try incognito mode');
