// generate-css-vars.ts
import { writeFileSync } from 'fs';
import { BackgroundColor } from '@/tokens/color/semantic';

function toCssVarName(key: string): string {
  return `--background-color-${key.toLowerCase()}`;
}

const cssVariables = Object.entries(BackgroundColor)
  .map(([key, value]) => `  ${toCssVarName(key)}: ${value};`)
  .join('\n');

const cssContent = `:root {\n${cssVariables}\n}\n`;

writeFileSync('dist/semantic-colors.css', cssContent);
console.log('CSS variables generated successfully!');
