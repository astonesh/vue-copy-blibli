export default {
    install(Vue, options) {
        Vue.mixin({
            // 添加到mixin中的任何内容将被注入到所有组件中。
            //在这个例子中， mounted() 方法将在组件被挂载到DOM后调用
            mounted() {
                //do something
            }
        });
    }
}