import typescript from '@rollup/plugin-typescript';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

const nodeTarget = {
  node: 14,
};

const browserTarget = {
  chrome: '45',
  ie: '11',
};

/**
 * babel config
 */
function getBabelConfig(target) {
  return getBabelOutputPlugin({
    presets: [
      [
        '@babel/preset-env',
        {
          targets: target,
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
  });
}

/**
 * rollup config
 */
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.es.js',
      format: 'es',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      getBabelConfig(browserTarget),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
      }),
      getBabelConfig(nodeTarget),
      terser(),
    ],
  },
];
