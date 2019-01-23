<template>
    <div class="overview">
        <div class="top">
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document school"></i>
            </div>
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document seat"></i>
            </div>
            <div class="numTotal">
                <p>50</p>
                <p>学校总数</p>
                <i class="el-icon-document account"></i>
            </div>
        </div>
        <!-- 趋势数据图表 -->
        <div id="dataImg">
          <div style="width:100%;" class="page-line-chart">
            <!-- 图标标题 -->
            <h4>趋势图</h4>
            <!-- 选择区域 -->
            <div class="select">
                <!-- 日期选择 -->
                <el-date-picker
                class="dataSelect"
                size='small'
                v-model="value6"
                type="daterange"
                align="left"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
                </el-date-picker>
                <!-- 选择学校 -->
                <el-select class="selSc"  v-model="valueShool" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-select>
                <!-- 搜索学校 -->
                <el-input
                class="search"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="input21">
                <i class="el-icon-search"></i>
                </el-input>
            </div>
            <!-- canvas核心图 -->
            <ve-line
            :tooltip-visible="true"
            :legend-visible="false"
            :data="chartData"
            :settings="chartSettings"
            :width="width"
            :height="height">
            </ve-line>
            <!-- 图表数据总结 -->
            <div class="totalNum">
              <span>座位数:</span>
              <span>座位总数:</span>
              <span>使用人数:</span>
            </div>
          </div>
        </div>
        <!-- 数据列表 -->
        <div class="dataList">
            <div class="top">
                <h3>数据列表</h3>
                <el-date-picker
                class="listData"
                v-model="value7"
                size="small"
                type="daterange"
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <table>
                <tr>
                    <th>#</th>
                    <th>学校名称</th>
                    <th>座位使用数</th>
                    <th>使用人数</th>
                    <th>使用率</th>
                </tr>
                <tr>
                    <td>01</td>
                    <td>北京大学</td>
                    <td>112</td>
                    <td>123</td>
                    <td>23%</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>中国政法大学</td>
                    <td>112</td>
                    <td>123</td>
                    <td>23%</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>

export default {
    data(){
      return {
        width:'767px',
        height:'310px',
        chartData: {
          columns: ["日期", "使用人数"],
          rows: [
          { 日期: "2018-6-24", 使用人数: 1000 },
          { 日期: "2018-6-25", 使用人数: 3100 },
          { 日期: "2018-6-26", 使用人数: 1200 },
          { 日期: "2018-6-27", 使用人数: 2300 },
          { 日期: "2018-6-28", 使用人数: 1400 },
          { 日期: "2018-6-29", 使用人数: 1000 },
          { 日期: "2018-6-30", 使用人数: 2000 },
          ]
        },
        chartSettings: {
          area: true
        },
        
        input21: '',

        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        // 日期选择
        value6: '',
        dataStart:1,
        dataEnd:1,
        // 搜索学校
        valueShool:'',        
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
            value: '选项5',
            label: '北京烤鸭'
        }],
        seat:1234,
        seatTotal:3124,
        useNum:2094,
        // 数据列表
        value7:''
      }
    },
    mounted(){
     
    },
    methods:{
      abc:function(){
        this.dataStart = this.$moment(this.value6[0]).format('YYYY-MM-DD')
        this.dataEnd = this.$moment(this.value6[1]).format('YYYY-MM-DD')
        console.log(this.dataStart)
        console.log(this.dataEnd)
      }
    }
}
</script>
<style lang="scss" scoped>
.overview {
    width: 100%;
    height: 100%;
    .top {
        width: 100%;
        height: 102px;
        font-size: 18px;
        font-weight: bold;
        .numTotal {
            width: 32.38%;
            padding: 32px 24px; 
            border-radius:6px;
            -webkit-box-sizing: border-box;
            background-color: white;
            position: relative;
            float: left;
            margin-right: 1.43%;
            &:last-of-type {
                margin: 0;
            }
            i {
                position: absolute;
                top: 36px;
                right: 32px;
                font-size: 32px;
            }
            .school {
                color: #FF2161;
            }
            .seat {
                color: #5C2089;
            }
            .account {
                color: #00ABDE;
            }
        }
    }
    #dataImg {
        width: 100%;
        margin: 12px 0 9px 0;
        padding: 20px 26px 9px 18px;
        box-sizing: border-box;
        background-color: white;
        h4 {
          font-weight: bold;
          font-size: 15px;
        }
        .select {
          margin-top: 18px;
          width: 100%;
          height: 33px;
          .dataSelect {
              width: 200px;
          }
          .selSc {
              margin-left: 9px;
              width: 179px;
          }
          .search {
            float: right;
            width: 179px;
            .el-input__inner {
              height: 33px!important;
              line-height: 33px;
            }
          }
        }
        .totalNum {
          text-align: center;
          word-spacing: 10px;
          font-weight: bold;
          font-size: 13px;
          span{
            margin-right: 92px;            
          }
        }
    }
    .dataList {
        width: 100%;
        height: 204px;
        margin-top: 12px;
        padding-left: 24px;
        padding-top: 20px;
        box-sizing: border-box;
        background-color: white;
        .top {
            height: 40px;
            h3 {
                font-size: 16px;
                font-weight: bold;
                float: left;
            }
            .listData {
                width: 200px;
                float: right;
            }
        }
        table {
            width: 100%;
            text-align: center;
            margin-top: 20px;
            font-size: 12px;
            tr {
                height: 20px;
                th{
                    font-size: 12px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                td{
                  border-bottom: 1px solid #ccc;
                  vertical-align: bottom;
                }
            }
        }
    }
}
</style>


