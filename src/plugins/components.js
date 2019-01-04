// @ts-nocheck
//自定义组件
import Vue from 'vue'

dynamicComp();
function dynamicComp() {
    // ======================================================新组件注册

    // HelloWorld   
    // Vue.component('HelloWorld', require(`../components/HelloWorld.vue`));
    const requireComponent = require.context(
        // 其组件目录的相对路径
        '../components',
        // 是否查询其子目录
        true,
        // 匹配基础组件文件名的正则表达式
        /[A-Z]\w+\.(vue)$/
    )
    // console.warn(requireComponent.keys());

    requireComponent.keys().forEach(fileName => {
        // 获取组件配置
        const componentConfig = requireComponent(fileName)
        const componentName = componentConfig.default.name
        // console.warn(fileName, componentConfig);
        // // 全局注册组件

        Vue.component(
            componentName,
            // 如果这个组件选项是通过 `export default` 导出的，
            // 那么就会优先使用 `.default`，
            // 否则回退到使用模块的根。
            componentConfig.default || componentConfig
        )
    })

}
/**s
     * 
     * 产生随机字符串，不长于32位
     * @param int $length
     * @return 产生的随机字符串
     */
Vue.prototype.$getNonceStr = function (length = 32) {

    let chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * chars.length);
        str += chars[random];
    }
    return str;
}

//复制内容
Vue.prototype.$copy = function (str) {

    var oInput = document.createElement('input');
    oInput.value = str;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand("Copy"); // 执行浏览器复制命令
    document.body.removeChild(oInput);
    // this.$info('复制成功~');ss
}

