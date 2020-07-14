<template>
  <div>
    <mt-header title="学前端，到学问">
        <router-link to="/" slot="left">
            <mt-button type="primary" icon="back"></mt-button>
        </router-link>
    </mt-header>
    
    <mt-field 
        type="text" 
        label="用户名"
        placeholder="请输入用户名"
        :state="usernameState"
        :attr="{maxlength:'12'}"
        v-model="username"
        @blur.native.capture="checkUsername"></mt-field>
    <!-- 
      type:表示类型

     -->
    <mt-field 
        type="password"
        label="密码"
        placeholder="请输入密码"
        state="warning"
        :attr="{autocomplete:'off'}"
        disableClear
        v-model="password"
        @blur.native.capture="checkPassword"></mt-field>
    <mt-field 
        type="password" 
        label="确认密码"
        placeholder="请再次输入密码"
        state="error"
        :attr="{autocomplete:'off'}"
        disableClear
        v-model="conpassword"
        @blur.native.capture="checkConpassword"></mt-field>
        <mt-button type="primary" size="large" @click="register">
            免费注册
        </mt-button>
  </div>
</template>
<script>
export default {
  methods:{
      //检测用户名
      checkUsername(){
        //用户名的规范
        var usernameRegExp = /^[a-zA-Z0-9]{6,12}$/;

        //检测用户名是否符合其规范
        if(usernameRegExp.test(this.username)){
            this.usernameState = 'success';
            return true;
        } else {
            this.usernameState = 'error';
            return false;
        }
      },
      //检测密码
      checkPassword(){
        //密码的规范
        var passwordRegExp = /^[a-zA-Z0-9@_\-]{8,20}$/;

        //检测密码是否符合其规范
        if(passwordRegExp.test(this.password)){
           return true;
          //console.log('密码是:' + this.password);
        } else {
          //console.log('请输入合法密码');
          return false;
        }
      },
      //检测确认密码
      checkConpassword(){
        //检测确认密码是否与密码一致
        if(this.conpassword == this.password){
            //console.log('确认密码是' + this.conpassword);
            return true;
        } else {
            //console.log('两次密码不一致');
            return false;
        }       
      },
      register(){
          //既保证用户名、又保证密码、还保证确认密码
          if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
              console.log('现在可以提交给服务器了');
          }
      }
  },
  data(){
    return {
        //存储用户名的检测状态
        usernameState:'',
        //分别存储用户名、密码及确认密码的初始化信息
        username:'',
        password:'',
        conpassword:''
    }
  }
}
</script>