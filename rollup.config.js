import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/components/ai-chat/index.ts',
  output: [
    {
      file: 'dist/ai-chat.js',
      format: 'umd',
      name: 'AiChat', // Add this line - this will be the global variable name
      globals: {
        'lit': 'lit',
        'lit/decorators.js': 'litDecorators'
      }
    },
    {
      file: 'dist/ai-chat.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve({
      browser: true,
      dedupe: ['lit', 'lit-html', 'lit-element']
    }),
    commonjs(),
    terser({
      format: {
        comments: false,
      },
      compress: {
        // Preserve Lit CSS template strings
        defaults: false,
        directives: false,
      }
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
  ]
};