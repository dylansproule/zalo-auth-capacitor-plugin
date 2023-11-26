export default {
  input: 'dist/esm/index.js',
  output: {
    file: 'dist/plugin.js',
    format: 'iife',
    name: 'zalo-capacitor-plugin',
    globals: {
      '@capacitor/core': 'capacitorExports',
    },
    sourcemap: true,
  },
  plugins: [
  ],
};
