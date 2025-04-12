import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/components/ai-chat/index.ts',
  output: {
    dir: 'dist',
    format: 'es',
    chunkFileNames: '[name]-[hash].esm.js',
    entryFileNames: '[name].esm.js'
  },
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
      compilerOptions: {
        module: 'ESNext' // Important for dynamic imports
      }
    }),
  ],
  preserveModules: false,
  treeshake: true,
};