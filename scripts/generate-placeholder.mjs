// Run this script to generate a placeholder profile image
// Usage: node scripts/generate-placeholder.mjs

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

// Minimal 1x1 pixel PNG (gray) as placeholder
// Replace with your actual photo at /public/images/profile.jpg
const placeholderPng = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const publicDir = join(process.cwd(), 'public', 'images');
mkdirSync(publicDir, { recursive: true });

writeFileSync(join(publicDir, 'profile.jpg'), placeholderPng);

console.log('✅ Placeholder profile.jpg created at public/images/profile.jpg');
console.log('   Replace this file with a real square headshot (min 500x500px)');
