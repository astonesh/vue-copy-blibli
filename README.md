# my-vue-blibli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

第一： stylus 如何支持
check-version 对npm版本进行检查
config 通过index 暴露出 dev 和 build 的具体参数
vue-loader 暴漏出对 vue文件的解析参数
utils主要处理了具体处理解析的细节
    generateLoaders 会根据vue里面匹配到的lang字段把对应的loader预先处理css文件
    所以 vue原生支持 css less sass stylus 以及封装了postcss处理

第二： pluguin 编写