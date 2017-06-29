
<template>
    <div class="mb-3">
       <mavon-editor v-model="value"/>

       </mavon-editor>
       <pre class="hljs"><code class="<p"> &lt;p class="pl-3"&gt; * common文件夹用来放共用组件，Sidebar.vue组件放在这里。&lt;/p&gt; &lt;p class="pl-3"&gt; * page文件夹用来放我们的页面模板组件，页面的模板文件放到这里。&lt;/p&gt; &lt;h6&gt;2、搭建基本结构&lt;/h6&gt; &lt;p class="pl-3"&gt;Static\下新建css文件夹，Static\下新建main.css 静态文件。 编写main.css文件：见源文件。&lt;/p&gt; &lt;p class="pl-3"&gt; * 修改src\App.vue文件&lt;/p&gt; </code></pre>
        <!--markdown-start-->
        <h3 class="bg-faded mt-3 pt-3 pb-3 ">使用vue2搭建项目</h3>
        <h5>一、使用vue-cli脚手架搭建项目</h5>
        <p>参见blog“使用vue-cli脚手架搭建项目”</p>
        <h5>二、编写独立的侧边栏导航组件</h5>
        <h6>1、创建目录</h6>
        <p class="pl-3">在src/components目录下，分别新建common和page文件夹。</p>
         <p class="pl-3"> * common文件夹用来放共用组件，Sidebar.vue组件放在这里。</p> 
         <p class="pl-3"> * page文件夹用来放我们的页面模板组件，页面的模板文件放到这里。</p>
         <h6>2、搭建基本结构</h6>
        <p class="pl-3">Static\下新建css文件夹，Static\下新建main.css 静态文件。
编写main.css文件：见源文件。</p>
         <p class="pl-3"> * 修改src\App.vue文件</p> 
         
        
        <!--markdown-end-->
    </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
export default {
    data() {
            return {
              fff:`<div>ssss<div/>
              <div>ssss<div/>
              <div>ssss<div/>`
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
.markdown-body{height: 500px}
</style>
