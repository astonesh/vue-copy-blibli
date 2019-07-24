对应searchContain
第一： stylus 如何支持
check-version 对npm版本进行检查
config 通过index 暴露出 dev 和 build 的具体参数
vue-loader 暴漏出对 vue文件的解析参数
utils主要处理了具体处理解析的细节
    generateLoaders 会根据vue里面匹配到的lang字段把对应的loader预先处理css文件
    所以 vue原生支持 css less sass stylus 以及封装了postcss处理

ps: node 调试

第二： pluguin 编写
基础： export fn 和 export default fn
    import 和 require区别  运行时和编译时区别
1 全局方法  
2 全局指令
3 全局组件 
4 注入组件选项
5 this.route 和 this.$route
