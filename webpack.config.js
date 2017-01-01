module.exports = [{
    name: 'js',
    entry: {
        index: [
            './src/global.js',
        ],
    },
    output: {
        path: './dist',
        filename: 'the-big-username-blacklist.min.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}
]
