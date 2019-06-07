module.exports = {
    presets: [

    ],
    plugins: [
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        ["@babel/plugin-syntax-class-properties"],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: true
            }
        ],
        "@babel/plugin-transform-runtime",
        ["react-hot-loader/babel"]
    ]
};
