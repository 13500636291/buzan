<template>
  <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="container">
          <el-form-item prop="username">
              <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-message"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item>
          <!-- <el-form-item prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" placeholder="请再次输入密码" prefix-icon="el-icon-view"></el-input>
          </el-form-item> -->
          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="submit">提交</el-button>
          </el-form-item>
          <el-form-item>
              <el-button @click="resetForm('ruleForm')" class="reset">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {loginPost} from '@/api/index'
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          username:'',
          password: '',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min:4,message: '请输入密码最低4位数', trigger: 'blur' }
          ],
          password: [
          { validator: validatePass, trigger: 'blur' },
          {min:4,message: '请输入密码最低4位数', trigger: 'blur' }
          ],
          checkPass: [
          { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    mounted:function(){
        // this.$http.get('/api/v1/user/login')
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch(function(err){
        //     console.log(err)
        // })
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                loginPost(this.ruleForm)
                .then(res=>{
                    console.log(res)
                })
                .catch(res=>{
                    console.log(res)
                })
            } else {
                return false;
            }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  min-width: 350pt;
  height: 100%;
  background-color: #122043;
  position: fixed;
  .container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 350pt;
    padding: 50pt 40pt 20pt 40pt;
    background-color: white;
    .submit {
      width: 100%;
    }
    .reset {
      width: 100%;
    }
  }
}
</style>
