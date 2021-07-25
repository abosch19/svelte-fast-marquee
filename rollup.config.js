import svelte from 'rollup-plugin-svelte';
import sveld from 'sveld';
import resolve from '@rollup/plugin-node-resolve';

const pkg = require('./package.json');

export default {
    input: 'src/index.js',
    output: [
        { file: pkg.module, 'format': 'es' },
        { file: pkg.main, 'format': 'umd', name: pkg.name }
    ],
    plugins: [
        svelte({  emitCss: false }),
        resolve(),
        sveld()
    ],
};