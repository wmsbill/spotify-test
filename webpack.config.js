const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                { loader: 'babel-loader' },
            ]
        }]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // name of the chunk
                    name: 'vendor',

                    // async + async chunks
                    chunks: 'all',

                    // import file path containing node_modules
                    test: /node_modules/,

                    // priority
                    priority: 20
                },
            },
        }
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        chunkFilename: '[name].js',
    }
};
