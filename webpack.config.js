var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入html-webpack-plugin
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var config = {    
    entry: './src/main.js',    
    output: {       
        path: path.resolve(__dirname + '/dist'), // 打包生成文件地址        
        filename: '[name].build.js', // 生成文件名成名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
              )
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ],
            },
            // 普通的 `.scss` 文件和 `*.vue` 文件中的
            // `<style lang="scss">` 块都应用它
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: "url-loader",
                  options: {
                    limit: 25000,
                  },
                },
            },
        ],
    },
    plugins: [
        // 使用html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件夹名
            template: 'public/index.html', // 模板html
            favicon: 'public/favicon.ico', // 标题图标
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true, // 是否压缩
        port: 9000, // 启动服务端口
        hot: true, // 是否自动刷新
        open: true, // 是否启动服务后，自动打开浏览器
    },
};
module.exports = config;
