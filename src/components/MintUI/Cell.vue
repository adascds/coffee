<template>
  <div>
      <mt-cell title="飞行模式">
          <mt-switch v-model="flyMode"></mt-switch>
          <img src="../../assets/images/fly.png" slot="icon">
      </mt-cell>
      <mt-cell title="无线局域网" isLink>
          TarenaWeb
          <img src="../../assets/images/fly.png" slot="icon">
      </mt-cell>
      <mt-cell title="测试" icon="more" isLink to="/">
          
      </mt-cell>
  </div>
</template>
<script>
export default {
  data(){
    return {
      flyMode:true
    }
  }
}
</script>