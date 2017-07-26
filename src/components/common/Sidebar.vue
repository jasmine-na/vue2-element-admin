<template>
    <div class="side-bar aside-sm">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo  h-100" theme="dark" router unique-opened>
            <el-menu-item index="/index">
                <i class="el-icon-caret-right"></i>首页
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>教务管理</template>
                <el-menu-item index="/notify">通知管理</el-menu-item>
                <el-menu-item index="/department">部门管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                 <template slot="title"><i class="el-icon-menu"></i>blog</template>
                <el-menu-item index="/vueInit">vue-init</el-menu-item>
                <el-menu-item index="/exportExcel">导出excel</el-menu-item>
            </el-submenu>
            <el-menu-item index="/excel">
                导出Excel
            </el-menu-item>
            <el-menu-item index="/e404">
                404
            </el-menu-item>
            <el-menu-item index="/echarts">
                echarts
            </el-menu-item>
            <el-menu-item index="/user">
                <i class="el-icon-setting"></i> 个人中心
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'Sidebar',
    data() {
        return {

        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
