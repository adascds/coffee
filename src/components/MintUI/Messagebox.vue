<template>
  <div>
    <p v-for="(v,k) in 100" :key="k">{{v}}</p>
    <p>
      <mt-button type="primary" @click="simple">简捷提示框</mt-button>
    </p>
    <p>
      <mt-button type="primary" @click="alert">警示框</mt-button>
    </p>
    <p>
      <mt-button type="primary" @click="confirm">询问框</mt-button>
    </p>
    <p>
      <mt-button type="primary" @click="prompt">输入框</mt-button>
    </p>
  </div>
</template>
<script>
export default {
  methods:{
    simple(){
      //简捷方法
      this.$messagebox("系统提示","对不起，您无权访问该页面");
    },
    alert(){
      this.$messagebox.alert("提示内容","标题");
    },
    confirm(){
      this.$messagebox.confirm("您确认要删除吗?","删除操作",{
          //确定按钮显示的文本
          confirmButtonText:'OK',
          //取消按钮显示的文本
          cancelButtonText:'Cancel',
          //是否在单击遮罩层时关闭提示框
          closeOnClickModal:true,
          //是否按键盘ESC关闭提示框
          closeOnPressEscape:true,
          //是否锁定滚动条
          lockScroll:true
      }).then((action)=>{
          console.log(action);
      }).catch(()=>{
          console.log('业务取消了');
      });
    },
    prompt(){
        this.$messagebox.prompt("请输入要创建的目录名称:","创建目录",{
          //输入框的占位符
          inputPlaceholder:"WEBTN2002"
        }).then((action)=>{
            console.log(action.value + '目录创建成功');
        }).catch(()=>{

        });
    }
  }
}
</script>