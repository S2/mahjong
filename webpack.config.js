var webpack = require('webpack');
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer = require("autoprefixer");
var process = require("process");
let time = new Date().getTime()

let entry = {
    "index" : [
        "./src/Page/Index.tsx" , 
        "./src/Page/Index.sass" , 
    ] , 
}

let plugins = []
Object.keys(entry).forEach((key)=>{
    plugins.push(new HtmlWebpackPlugin({
        filename : `${key}.html` ,
        template : "src/index.html" ,
        chunks : [`${key}`] ,
    }))
})

module.exports = {
    cache:true , 
    entry: entry ,
    output: {
        filename: "[name].js?[hash:6]",
        path: __dirname + "/dist/"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }]
            },
            {
                test: /\.sass$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" 
                }, {
                    loader: "import-glob-loader" 
                }]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader" ,
                options: {
                },
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|otf|ttf|svg)$/,
                loader: 'url-loader?limit=100000&name=/[hash].[ext]'
            }
        ]
    },
    plugins: plugins , 
};
