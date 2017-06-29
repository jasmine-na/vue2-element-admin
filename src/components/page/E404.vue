<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <div class="text-right">
                <img class="" :src="errGif"></div>
        </el-col>
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <h1 class="font404 mt-5">404</h1>
                <p>你所查看的页面无法浏览或已经不存在</p>
                <p>输入的地址不正确</p>
                <p>页面重定义或程序出错</p>
                <p><a href="/">返回首页</a></p>
            </div>
        </el-col>
    </el-row>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
export default {
    data() {
            return {
                errGif: "static/images/e404.gif" + '?' + +new Date()
            }
        },
        methods: {

        }
}
</script>
<style>
.font404 {
    font-size: 80px;
}
</style>
