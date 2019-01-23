<template>
    <div class="complaint">
      <div class="compForm">
            <p>
                <span>投诉列表</span>
            </p>
            <el-table
                :data="tableData"
                @row-click="showRight"
                style="width: 100%">
                <el-table-column
                    prop="id"
                    label="投诉编号"
                    width="80"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="Complainant"
                    label="投诉人"
                    width="80"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="Respondent"
                    label="被投诉人"
                    width="80"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="学校"
                    min-width="150"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="seat"
                    label="座位号"
                    width="70">
                </el-table-column>
                <el-table-column
                    prop="content"
                    label="内容"
                    min-width="150"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="imgUrl"
                    label="图片"
                    align="center"
                    width="100">
                    <template slot-scope="scope">
                        <img src="@/assets/logo.png" height="50" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="data"
                    label="投诉时间"
                    width="100"
                    align="center">
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    class-name="action"
                    width="100">
                    <template slot-scope="scope">
                        <el-dropdown placement="top-start"  @command="handleCommand" trigger="click">
                            <span class="el-dropdown-link">
                                操作
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item  command="a">冻结账户</el-dropdown-item>
                                <el-dropdown-item  command="b">释放座位</el-dropdown-item>
                                <el-dropdown-item  command="c">内容展示</el-dropdown-item>
                                <el-dropdown-item  command="d">图片展示</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
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
                Complainant:'海绵宝宝',
                Respondent:'机器人1',
                name: '亳州职业技术学院',
                seat:'F-11',
                content: '上海市普陀区金沙江路 1518 弄',
                imgUrl:require('@/assets/logo.png'),
                data: '2016-05-02',
            },{
                id:'106',
                Complainant:'海绵宝宝',
                Respondent:'机器人2',
                name: '亳州职业技术学院',
                seat:'F-11',
                content: '上海市普陀区金沙江路 1518 弄',
                imgUrl:require('@/assets/logo.png'),
                data: '2016-05-02',
            },{
                id:'107',
                Complainant:'海绵宝宝',
                Respondent:'机器人',
                name: '亳州职业技术学院',
                seat:'F-11',
                content: '上海市普陀区金沙江路 1518 弄',
                imgUrl: require('@/assets/logo.png'),
                data: '2016-05-02',
            },{
                id:'108',
                Complainant:'海绵宝宝',
                Respondent:'机器人',
                name: '亳州职业技术学院',
                seat:'F-11',
                content: '上海市普陀区金沙江路 1518 弄',
                imgUrl:require('@/assets/logo.png'),
                data: '2016-05-02',
            }],
            row:{}
        }
    },
    methods: {
        showRight(row){
            this.row=row
        },
        //定义一个确定弹窗
        MessageBox(message,beforeClose){
            const h = this.$createElement;
            this.$msgbox({
                message: h('p', null, `${message}`),
                customClass:"MessageBox",
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showClose:false,
                center:true,
                beforeClose: beforeClose
            })
            .then(action => {
                this.$message({
                    type: 'info',
                    message: 'action: ' + action
                });
            })
            .catch(()=>{
                console.log('取消')
            });
        },
        //点击操作
        handleCommand(command) {
            if(command=='a'){
                console.log(this.row.Respondent)
                const message = "确定冻结该账号吗？"
                this.MessageBox(message,(action, instance, done) => {
                    if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中';
                    setTimeout(() => {
                        done();
                        setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        }, 300);
                    }, 3000);
                    } else {
                        done();
                    }
                })
            } else if(command=='b'){
                console.log(this.row.seat)
                const message = "确定释放该座位吗？"
                this.MessageBox(message,(action, instance, done) => {
                    if (action === 'confirm') {
                    instance.confirmButtonLoading = true;
                    instance.confirmButtonText = '执行中';
                    setTimeout(() => {
                        done();
                        setTimeout(() => {
                        instance.confirmButtonLoading = false;
                        }, 300);
                    }, 3000);
                    } else {
                        done();
                    }
                })
            } else if(command=='c'){
                const h = this.$createElement;
                this.$msgbox({
                    title: '内容展示',
                    message: h('p', null, [
                        h('span', null, `${this.row.content}`),
                    ]),
                    showCancelButton: false,
                    confirmButtonText: '确定',
                }).then(()=>{
                    console.log(1)
                }).catch((err)=>{
                    console.log(err)
                });
            } else {
                // const h = this.$createElement;
                // this.$msgbox({
                // title: '图片查看',
                // message: h('div', { style: 'width:370px;height:370px;background-color:#686869'}, [
                //     h('div', { style: `width:241px;height:370px;background:url("${url}") no-repeat;background-size:cover;margin:0 auto;`})
                //     ])
                // }).then((res)=>{
                //     console.log(res)
                // })
                // console.log(url)
                this.$alert(`<div style="width:370px;background-color:#686869"><img src=${this.row.imgUrl}/></div>`, '图片查看', {
                dangerouslyUseHTMLString: true
                });
            }
        }
    }
}
</script>
<style lang="scss" scoped>

.complaint {
    width: 100%;
    height: 100%;
    padding-top: 16px;
    padding-left: 17px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    .compForm{
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
                    color: #ffffff;
                }
                &:last-of-type {
                    color: #BBBBBB;
                }
            }
        }
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
    }
    
}
</style>