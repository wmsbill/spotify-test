import path from 'path';
import postcss from 'rollup-plugin-postcss';

const publicRoot = './public/';

export default {
    input: 'src/main.js',
    output: {
        dir: publicRoot,
        entryFileNames: 'js/[name].js',
        format: 'iife',
    },
    plugins: [
        postcss({
            sourceMap: true,
            extract : 'styles/main.css',
            extensions: ['.css']
        })
    ]
}
