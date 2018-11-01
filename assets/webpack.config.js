module.exports = {
    entry: ['./_javascript/main.js'],
    mode: 'development',
    output: {
        path: __dirname + '/lib',
        filename: 'main.js'
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
}
