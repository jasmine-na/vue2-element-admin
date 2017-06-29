<template>
    <div class="app-container">
        <el-button style='margin-bottom:20px;float:right' type="primary" icon="document" @click="handleDownload">导出excel</el-button>
        <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
            <el-table-column align="center" label='ID' width="95">
                <template scope="scope">
                    {{scope.$index}}
                </template>
            </el-table-column>
            <el-table-column label="文章标题">
                <template scope="scope">
                    {{scope.row.title}}
                </template>
            </el-table-column>
            <el-table-column label="作者" width="110">
                <template scope="scope">
                    <span>{{scope.row.author}}</span>
                </template>
            </el-table-column>
            <el-table-column label="阅读数" width="105" align="center">
                <template scope="scope">
                    {{scope.row.pageviews}}
                </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="发布时间" width="200">
                <template scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.display_time}}</span>
                </template>
            </el-table-column>
        </el-table>
        <!--markdown-start-->
            <v-excel-md></v-excel-md>
        <!--markdown-end-->
    </div>
</template>
<script>
import vExcelMd from '../Blog/exportExcel.vue'
export default {
	 components: {
        vExcelMd
    },
    data() {
            return {
                list: [{
                    author: "韩磊",
                    display_time: "1972-03-21 23:57:09",
                    id: "310000201112247627",
                    pageviews: 1052,
                    status: "published",
                    title: "来记世格系打级计眼王重海属土计"
                }, {
                    author: "韩磊1",
                    display_time: "1972-03-21 23:57:09",
                    id: "310000201112247628",
                    pageviews: 1052,
                    status: "published",
                    title: "来记世格系打级计眼王重海属土计"
                }, {
                    author: "韩磊2",
                    display_time: "1972-03-21 23:57:09",
                    id: "310000201112247629",
                    pageviews: 1052,
                    status: "published",
                    title: "来记世格系打级计眼王重海属土计"
                }, {
                    author: "韩磊3",
                    display_time: "1972-03-21 23:57:09",
                    id: "31000020111224780",
                    pageviews: 1052,
                    status: "published",
                    title: "来记世格系打级计眼王重海d属土计"
                }],
                listLoading: false
            }
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {},
            handleDownload() {
                require.ensure([], () => {
                    const {
                        export_json_to_excel
                    } = require('../../../static/exportExcel/Export2Excel');
                    const tHeader = ['序号', '文章标题', '作者', '阅读数', '发布时间'];
                    const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
                    const list = this.list;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, '列表excel');
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            }
        }
};
</script>
