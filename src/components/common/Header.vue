<template>
    <header class="header  bg-faded">
        <p>后台管理</p>
        <div class="float-right pt-2">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <img class="thumb-sm rounded-circle" :src="userImg">
                    {{username}}
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>
<script>
export default {
    data() {
            return {
                username: "你好",
                userImg: "static/images/user.jpg"
            }
        },
        methods: {}
}
</script>
<style scoped>
</style>
