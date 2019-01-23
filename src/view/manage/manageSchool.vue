<template>
    <div class="manageSchool">
      <div class="manForm">
            <p>
                <span>学校列表</span>
                <span>学校详情</span>
            </p>
            <el-table
                class="manList"
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="学校编号"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="data"
                    label="创建时间"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="学校名称"
                    min-width="170">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="学校地址"
                    min-width="200">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    width="60">
                </el-table-column>
                <el-table-column
                    prop="inCode"
                    label="邀请码"
                    align="center"
                    width="100">
                    <template slot-scope="scope">
                        <el-button size="small " class="viewBtn" plain @click="open(scope.row.inCode)">点击查看</el-button>
                    </template>
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="90"
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
                name: '王小虎111111111111111111',
                address: '上海市普陀区金沙江路 1518 弄',
                status:'正常',
                inCode:'123456'
            }, {
               id:'105',
                data: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄111111111111111111111111111111111111111',
                status:'正常',
                inCode:'456987'
            }, {
                id:'105',
                data: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                status:'点击查看',
                inCode:'9654646'
            }, {                                       
                id:'105',
                data: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                status:'正常',
                inCode:'81568'
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
.manageSchool {
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
    .manList {
        .viewBtn {
            // width: 88px;
        }
    }
}
</style>