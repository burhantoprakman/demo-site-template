// Generates src/styles/tokens.css from src/design/tokens.json.
// tokens.json is the source of truth; tokens.css is generated output.
import { readFileSync, writeFileSync } from 'node:fs';

const tokens = JSON.parse(readFileSync('src/design/tokens.json', 'utf8'));
const GROUPS = ['color', 'font', 'size', 'space', 'radius', 'layout'];

const lines = [
  '/* GENERATED FILE - do not edit by hand.',
  '   Edit src/design/tokens.json, then run `npm run tokens`. */',
  '',
  ':root {',
];

for (const group of GROUPS) {
  const entries = Object.entries(tokens[group] ?? {}).filter(
    ([key, val]) => !key.startsWith('$') && val && typeof val === 'object' && 'value' in val
  );
  if (!entries.length) continue;
  lines.push(`  /* ${group} */`);
  for (const [key, val] of entries) {
    lines.push(`  --${group}-${key}: ${val.value};`);
  }
  lines.push('');
}

lines.push('}', '');
writeFileSync('src/styles/tokens.css', lines.join('\n'));
console.log('tokens.css regenerated');
