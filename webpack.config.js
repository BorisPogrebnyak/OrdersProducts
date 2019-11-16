'use strict';

const path = require('path');

module.exports = {
  entry: "./app/app.jsx", // Входная точка - исходный файл
  output: {
    path: path.resolve(__dirname, './public'), // Путь к каталогу выходных файлов - каталог public
    publicPath: '/public/',
    filename: 'bundle.js' // Название создаваемого файла
  },
  module: {
    rules: [ // Загрузчик для .jsx
      {
        test: /\.jsx?$/, // Определяем тип файла
        exclude: /(node_modules)/, // Исключаем из обработки каталог node_modules
        loader: "babel-loader", // Определяем загрузчик
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"] // Используемые плагины
        }
      }
    ]
  }
}