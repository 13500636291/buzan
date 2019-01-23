<template>
    <div class="account">
      <div class="accountForm">
            <p>
                <span>账号管理</span>
            </p>
            <el-table
                class="accountList"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="用户编号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="data"
                    label="创建时间"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="email"
                    label="用户邮编"
                    min-width="170">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="学校名称"
                    min-width="210">
                </el-table-column>
                <el-table-column
                    prop="inCode"
                    label="邀请码"
                    align="center"
                    min-width="150">
                </el-table-column>
                <el-table-column
                    prop="tel"
                    label="手机号码"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    width="60">
                    <template slot-scope="scope">
                        <span v-if="scope.row.status='正常'" style="color:#000000">{{ scope.row.status }}</span>
                        <span v-else style="color: red">{{ scope.row.status }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="90"
                    fixed="right"
                    align="left">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                            移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            inCode:[],
            tableData: [{
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'失败',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }, {
                id:'105',
                data: '2016-05-02',
                email:'123456@qq.com',
                name: '王小虎111111111111111111',
                inCode:'123456@qq.com',
                tel:'1245678911',
                status:'正常',
            }]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        open(inCode){

            const h = this.$createElement;
            this.$msgbox({
                title: '邀请码',
                message: h('p', null, [
                    h('h1', { style: 'color: teal,font-size:20px' }, inCode)
                ]),
                center:true,
                showConfirmButton:false,
                closeOnClickModal:true,
                distinguishCancelAndClose: true,
            }).then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            }).catch((err)=>{
                console.log(err)
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.account {
    width: 100%;
    height: 100%;
    padding-top: 16px;
    padding-left: 17px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    p {
        width: 100%;
        height: 31px;
        background-color: #0E1935;
        span {
            display: block;
            float: left;
            width: 61px;
            line-height: 31px;
            font-size: 12px;
            text-align: center;
            &:first-of-type {
                color: white;
            }
            &:last-of-type {
                color: #BBBBBB;
            }
        }
    }
    .accountList {
        .viewBtn {
            // width: 88px;
        }
    }
}
</style>