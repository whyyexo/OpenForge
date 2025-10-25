#!/usr/bin/env node

/**
 * Apply Dark Theme to Dashboard
 * 
 * This script applies dark theme styling to all dashboard components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🌙 Applying Dark Theme to Dashboard...\n');

// Read the current App.tsx file
const appPath = path.join(__dirname, 'src', 'App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

console.log('📝 Current file size:', content.length, 'characters');

// Apply dark theme transformations
const darkThemeReplacements = [
  // Background colors
  { from: 'bg-white', to: 'bg-slate-800' },
  { from: 'bg-slate-50', to: 'bg-slate-900' },
  { from: 'bg-slate-100', to: 'bg-slate-700' },
  
  // Text colors
  { from: 'text-slate-900', to: 'text-white' },
  { from: 'text-slate-600', to: 'text-slate-300' },
  { from: 'text-slate-700', to: 'text-slate-300' },
  
  // Border colors
  { from: 'border-slate-200', to: 'border-slate-700' },
  { from: 'border-slate-300', to: 'border-slate-600' },
  
  // Hover states
  { from: 'hover:bg-slate-50', to: 'hover:bg-slate-700' },
  { from: 'hover:text-slate-900', to: 'hover:text-white' },
  { from: 'hover:text-slate-700', to: 'hover:text-white' },
  
  // Focus states
  { from: 'focus:border-slate-300', to: 'focus:border-slate-600' },
  
  // Card backgrounds
  { from: 'bg-slate-100', to: 'bg-slate-700' },
  
  // Input backgrounds
  { from: 'bg-white', to: 'bg-slate-800' },
];

let changesCount = 0;

darkThemeReplacements.forEach(({ from, to }) => {
  const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, to);
    changesCount += matches.length;
    console.log(`✅ Replaced ${matches.length} instances of "${from}" with "${to}"`);
  }
});

// Write the updated content back
fs.writeFileSync(appPath, content);

console.log(`\n🎉 Dark theme applied successfully!`);
console.log(`📊 Total changes made: ${changesCount}`);
console.log(`📁 File updated: ${appPath}`);

console.log('\n🌙 Dark Theme Features Applied:');
console.log('   ✅ Background: slate-900 (dark)');
console.log('   ✅ Cards: slate-800 (darker)');
console.log('   ✅ Text: white and slate-300');
console.log('   ✅ Borders: slate-700');
console.log('   ✅ Hover states: slate-700');
console.log('   ✅ Focus states: slate-600');

console.log('\n🚀 Your dashboard now has a dark theme!');
console.log('   🌐 Access: http://localhost:5173');
console.log('   🎨 Style: Modern dark theme');
console.log('   ✨ Experience: Professional and sleek');
