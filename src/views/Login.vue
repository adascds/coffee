<template>
  <div id="bei">
      <div class=" wel">
        Welcome
      </div>
      <div class="biao">
        <span> 用户名：</span><input  
            placeholder="请输入用户名" 
            type="text" 
            v-model="username">
         <br>
          <span style="margin-right:15px;">密码：</span><input
            placeholder="请输入密码" 
            type="password"
            v-model="password">
         </div>
          <div class="btn">
          <button class="button" @click="handler">立即登录</button>
          </div>
          <div class="nav">
       
          <router-link to="./register" >立即注册</router-link>
          </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      username:'',
      password:'',
     
    }
  },
  methods:{
    handler(){
        //检测用户名和密码的规范
        var obj = {
            username:this.username,
            password:this.password
        };
        this.axios.post('/login',this.qs.stringify(obj)).then((res)=>{
            if(res.data.code == 202){
              this.$messagebox.alert('用户名或密码错误','登录提示');
            }
            if(res.data.code == 200){
              if(this.$route.query.redirect){
                this.$router.push(this.$route.query.redirect)
              }else{
              this.$router.push('/');
              }
            }
        });
    }
  }
}
</script>
<style scoped>
.wel{
    text-align: center;
    font-size: 32px;
    padding: 25px;
}
#bei {

    
 background: url(../assets/img/bann.jpg) no-repeat;
   width:100% ;
   height: 100%;
   background-size: 100% 100%;
   position: absolute;
}
.biao{
    text-align: center;
    padding-top:50px;
}
input{
    width: 200px;
    height:20px;
    line-height: 20px;
    margin-top:23px;
    padding-top:10px;
    background: #ddd;
    font-size: 16px;
    outline:none;
    padding-left:10px ;
    cursor: pointer;
    position: relative;
    border:none;
    border-radius:4%;
}
.button{
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: #0084ff;
  border: 1px solid;
  border-radius: 13px;
  margin-top: 50px;
  height: 40px;
  margin: 0 auto;
  width: 220px;
  outline:none;
}
.btn{
    text-align: center;
    padding-top: 10px;
    -webkit-tap-highlight-color:transparent;
}
.nav{
  font-size: 12px;
  float: right;
  padding-top: 10px;
  padding-right:10px ;
 cursor: pointer;
}

</style>