
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

// Array of component configurations
const components = [
  // {
  //   name: 'ai-chat-bot',
  //   input: 'src/components/ai-chat-bot/ai-chat-bot.ts',
  //   css: true
  // },
  {
    name: "ai-chat",
    input: "src/components/ai-chat/index.ts",
    css: true
  },
  // {
  //   name: 'my-button',
  //   input: 'src/components/my-button/my-button.ts',
  //   css: false
  // }
  // Add other components here
];

export default components.map(component => ({
  input: component.input,
  output: [
    {
      file: `dist/${component.name}.js`,
      format: 'umd',
      name: component.name.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(''),
      sourcemap: true
    },
    {
      file: `dist/${component.name}.esm.js`,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    ...(component.css ? [css({ output: `${component.name}.css` })] : []),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
}));