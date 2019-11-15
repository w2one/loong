# moment 语言包

https://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack


~~~
var webpack = require("webpack");
module.exports = {
  // ...
  plugins: [
    // new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn|es-us/)
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};
~~~
