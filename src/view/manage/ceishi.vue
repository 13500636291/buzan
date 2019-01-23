<template>
<div>
    <canvas id="canvas"></canvas>
    <div>
        <el-button type="primary" id="code">主要按钮</el-button>
    </div>
</div>
</template>
<script>
import Vue from 'vue'
import QRCode from 'qrcode'
Vue.use(QRCode)

export default{
    data(){
        return {
            codes:'',
        }
    },
    methods:{
        useqrcode(){
            var canvas = document.getElementById('canvas')

            QRCode.toCanvas(canvas, '123', function (error) {
            if (error) console.error(error)
                console.log('success!');
            })
        }
    },
    mounted(){
        this.useqrcode();
    }
}
</script>
<style>
#canvas{width:200px!important;height:200px!important;}
</style>