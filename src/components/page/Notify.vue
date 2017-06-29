<!-- http://element.eleme.io/#/zh-CN/component/table -->
<template>
    <div class="row h-100">
        <div class="col-md-12">
            <el-table :data="nitify" stripe border v-loading="page.loading" element-loading-text="数据加载中..." style="width: 100%;" max-height="500">
                <el-table-column fixed type="index" width="40" align="center" label=" ">
                </el-table-column>
                <el-table-column fixed prop="noticeBody.title" min-width="140" label="通知标题">
                </el-table-column>
                <el-table-column prop="noticeBody.content" width="500" label="内容" inline-template>
                    <div>
                        <el-popover ref="popover" placement="bottom" width="220" trigger="click" :content="row.noticeBody.content">
                        </el-popover>
                        <div v-popover:popover class="text-truncate pointer">
                            {{row.noticeBody.content}}
                        </div>
                    </div>
                </el-table-column>
                <el-table-column prop="fromUser.fullname" min-width="100" label="创建人">
                </el-table-column>
                <el-table-column prop="noticeBody.category" min-width="80" align="center" label="类别" inline-template>
                    <div>
                        <el-tag v-if="row.noticeBody.category=='text-reply'" type="primary">文本回复</el-tag>
                        <el-tag v-if="row.noticeBody.category=='text'" type="warning">文本</el-tag>
                        <el-tag v-if="row.noticeBody.category=='text-img'" type="danger">图文</el-tag>
                        <el-tag v-if="row.noticeBody.category=='home-work'" type="danger">作业</el-tag>
                    </div>
                </el-table-column>
                <el-table-column prop="noticeBody.sendTime" min-width="200" align="center" label="发送时间" sortable>
                </el-table-column>
                <el-table-column fixed="right" inline-template label="操作" align="center" width="160px">
                    <span>
                            	<el-button type="primary" size="small" @click="viewToUser(row)">查看</el-button>
								 <el-button  v-if="row.deletedFlag" type="info" size="small">已删除</el-button>
                                 <el-button  v-if="row.deletedFlag==false" type="danger" size="small" @click="removeNitify(row)">删除</el-button>
                                  
                            
                            </span>
                </el-table-column>
            </el-table>
            <!--分页begin-->
            <el-pagination class="el-pagination p-3" :current-page="page.currentPage" :page-sizes="[15,30,45]" :page-size="page.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="page.totalElements" @current-change="currentPageChange" @size-change="pageSizeChange">
            </el-pagination>
            <!--分页end-->
            <!-- 通知接收用户详情-->
            <el-dialog title="被通知用户" size="large" :visible.sync="dialogToUserInfoVisible">
                <el-table :data="toUser" stripe border v-loading="toUserPage.loading" element-loading-text="数据加载中...">
                    <el-table-column type="expand">
                        <template scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="通知内容：">
                                    <span>{{toUserPage.content  }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="toUser.fullname" label="姓名" width="124" inline-template>
                        <div class="text-nowrap">
                            <img :src="row.toUser.headImg" class="thumb-sm rounded-circle" alt="">
                            <span>{{row.toUser.fullname}}</span>
                        </div>
                    </el-table-column>
                    <el-table-column align="center" prop="toUser.nickname" width="80" label="昵称"></el-table-column>
                    <el-table-column prop="toUser.sex" label="性别" width="50" inline-template align="center">
                        <div>
                            <span v-if="row.sex==1">男</span>
                            <span v-if="row.sex==2">女</span>
                        </div>
                    </el-table-column>
                    <el-table-column align="center" prop="toUser.mobile" label="手机号"></el-table-column>
                    <el-table-column align="center" prop="status" label="是否查看" inline-template>
                        <div>
                            <span v-if="row.status==0">未查看</span>
                            <span v-if="row.status==1">已查看</span>
                        </div>
                    </el-table-column>
                    <el-table-column align="center" prop="readTime" label="查看时间"></el-table-column>
                    <el-table-column inline-template label="操作" align="center" width="80px">
                        <span>
                                 <el-button type="danger" size="small" @click="removeToUser(row)">删除</el-button>
                            </span>
                    </el-table-column>
                </el-table>
                <!--分页begin-->
                <el-pagination class="el-pagination mt-3 mb-3" :current-page="toUserPage.currentPage" :page-sizes="[10,20,30]" :page-size="toUserPage.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="toUserPage.totalElements" </el-pagination>
            </el-dialog>
        </div>
    </div>
    </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import vSidebar from '@/components/common/Sidebar'
export default {
    data: function() {
        return {
            total_rows: 0,
            //noticeBody:[],
            nitify: [],
            page: {
                loading: true, //是否加载
                pageSize: 15, //每页条数
                currentPage: 0, //当前页
                totalElements: 0 //共多少条
            },
            toUserPage: {
                content: "",
                noticeId: null,
                loading: true, //是否加载
                pageSize: 10, //每页条数
                currentPage: 0, //当前页
                totalElements: 0 //共多少条	
            },
            dialogToUserInfoVisible: false,
            toUser: []
        };
    },
    mounted: function() {
        this.getNitify();
    },
    methods: {
        //获取通知列表
        async getNitify() {
            let currentPage = this.page.currentPage - 1;
            //真实环境 本地文件二选一
            //真实环境
            //let data = await this.$http.get(`/api/be/notice/list?page=${currentPage}&size=${this.page.pageSize}`);
            //使用本地数据start 
            let data = (await this.$http.get('static/json/notify.json')).data;
            console.log(data)
            var content = data.content;
            let self = this;
            if(currentPage<0){
                currentPage=0;
            }
            var content = content.filter(function(value, index, content) {

                if (index > self.page.pageSize * currentPage && index <= self.page.pageSize * (currentPage + 1)) {
                    return true;
                }
            })
            data.content = content;
            //使用本地数据end

            if (!!data.content) {
                //内容
                this.nitify = data.content;
                //总条数
                this.page.totalElements = data.totalElements;
                //加载隐藏
                this.page.loading = false;
            }

        },
        //通知列表－页码切换
        currentPageChange(currentPage) {
            console.log(currentPage)
            this.page.currentPage = currentPage;
            this.getNitify();
        },
        //通知列表－每页显示条数切换
        pageSizeChange(pageSize) {
            this.page.pageSize = pageSize;
            this.getNitify();
        },
        //删除通知
        async removeNitify(row) {
            let data = await this.$http.post("/api/be/notice/remove", {
                noticeId: row.noticeBody.id
            });
            console.log(data)
            if (data.state == 200) {
                this.$message.success('删除成功!');
                //内容
                this.getNitify();
            } else {
                this.$message.error(data.errorMsg);
                //this.$message.error('删除失败!');
            }
        },
        viewToUser(row) {
            this.dialogToUserInfoVisible = true;
            this.toUserPage.noticeId = row.noticeBody.id; //noticeId
            this.toUserPage.content = row.noticeBody.content; //消息内容
            this.getToUser();
        },
        async getToUser() {
            this.toUser = [];
            let niticeID = this.toUserPage.noticeId;
            let currentPage = this.toUserPage.currentPage - 1;
            //let data = await this.$http.get(`/api/be/notice/user/list?page=${currentPage}&size=${this.toUserPage.pageSize}&noticeId=${niticeID}`);
            //本地文件 
            let data = (await this.$http.get('static/json/notifyToUser.json')).data;
            console.log(data.content)
            if (!!data.content) {
                //内容
                this.toUser = data.content;
                //总条数
                this.toUserPage.totalElements = data.totalElements;
                //加载隐藏
                this.toUserPage.loading = false;
            }

        },
        async removeToUser(row) {
            let data = await this.$http.post("/api/be/notice/user/remove", {
                id: row.id
            });
            if (data.state == 200) {
                this.$message.success('删除成功!');
                //内容
                this.getToUser();

            } else {
                this.$message.error('删除失败!');
            }
        }

    }
}
</script>
