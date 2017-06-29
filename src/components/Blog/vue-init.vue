<template>
    <div class="mb-3">
        <!--markdown-start-->
        <h3 class="bg-faded mt-3 pt-3 pb-3 ">使用vue-cli脚手架搭建项目</h3>
        <h5>一、介绍</h5>
        <h6>关于vue.js</h6>
        <p class="pl-3">vue.js是一套构建用户界面的 轻型的渐进式前端框架。它的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。使用vue可以给你的开发带来极致的编程体验。</p>
        <p class="pl-3">参考地址：<a href="http://doc.vue-js.com/v2/guide/">http://doc.vue-js.com/v2/guide/</a></p>
        <h6>关于vue-cli </h6>
        <p class="pl-3">Vue-cli是vue官方提供的一个命令行工具（vue-cli），可用于快速搭建大型单页应用。该工具提供开箱即用的构建工具配置，带来现代化的前端开发流程。只需一分钟即可启动带热重载、保存时静态检查以及可用于生产环境的构建配置的项目。</p>
        <h5>二、Node.js安装</h5>
        <p class="pl-3"><a href="http://nodejs.cn/download/">http://nodejs.cn/download/ </a></p>
        <h5>三、安装vue-cli</h5>
        <p class="pl-3">
            <kbd>npm install -g vue-cli</kbd>
        </p>
        <h5>四、使用vue-cli初始化项目</h5>
        <p class="pl-3">
            <kbd>vue init webpack my-project</kbd>
        </p>
        <p><img src="static/blog/1/QQ20170624-0.png" alt=""></p>
        <h5>五、进到项目目录下</h5>
        <p class="pl-3">
            <kbd>cd my-project</kbd>
        </p>
        <p><img src="static/blog/1/QQ20170624-1.png" alt=""></p>
        <h5>六、安装依赖</h5>
        <p class="pl-3">
            <kbd>npm install</kbd>
        </p>
        <p><img src="static/blog/1/QQ20170624-2.png" alt=""></p>
        <p class="pl-3">
            安装成功
        </p>
        <p><img src="static/blog/1/QQ20170624-3.png" alt=""></p>
        <h5>七、启动项目</h5>
        <p class="pl-3">
            <kbd>npm run dev</kbd>
        </p>
        <p><img src="static/blog/1/QQ20170624-4.png" alt=""></p>
        <h5>八、打包上线</h5>
        <p class="pl-3">
            <kbd>npm run build</kbd>
        </p>
        <p>生成的静态文件默认在dist目录下</p>
        <h5>九、项目结构</h5>
         <p><img src="static/blog/1/QQ20170624-5.png" alt=""></p>
         <p>详情参见：<a href="https://segmentfault.com/a/1190000007880723">https://segmentfault.com/a/1190000007880723</a></p>
        <!--markdown-end-->
    </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
export default {
    data() {
            return {

            }
        },
        methods: {

        }
}
</script>
<style>
img {
    max-width: 700px
}
</style>
