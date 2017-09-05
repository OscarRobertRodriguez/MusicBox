const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');
const webpack = require('webpack'); 
var ghpages = require('gh-pages');


const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build'),
};



const commonConfig = merge ([
    { 
        entry: {
   	 app: PATHS.app,
        },
        output: {
   	 path: PATHS.build,
   	 filename: '[name].js',
        },
        watch: true, 
        plugins: [
            new HtmlWebpackPlugin({
                title:  'Webpack demo',
                myPageHeader: 'Hello World',
                template: './app/index.html',
                filename: './index.html',
            }),
        ],
    },
    // parts.lintJavaScript({include: PATHS.app}),
 
]);


const productionConfig = merge([
    parts.loadProdCSS()
]);

const developmentConfig = merge([
    parts.devServer({
    // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadCSS(),
]);




module.exports = (env) => {
    if (env === 'production') {
        return merge(commonConfig, productionConfig);
    }

    return merge(commonConfig, developmentConfig);
};


