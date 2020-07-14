<template>
  <div>
    <p><mt-button type="primary" @click="simple">简捷的提示框</mt-button></p>
    <p>
      <mt-button type="primary" @click="normal">标准的提示框</mt-button>
    </p>
  </div>
</template>
<script>

import "../../assets/styles/iconfont.css";

export default {
  methods:{
    simple(){
      this.$toast("简捷的短消息提示框");
    },
    normal(){
      this.$toast({
        message:"标准的短消息提示框",
        position:"top",
        duration:5000,
        iconClass:"iconfont icon-71shibai"
      });
    }
  }
}
</script>