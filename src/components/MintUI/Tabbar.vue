<template>
  <div>
      <div class="main">
          <p v-for="(v,k) in 100" :key="k">{{v}}</p>
      </div>
      <mt-tabbar v-model="selectedTab" fixed>
          <mt-tab-item id="home">
            <img src="../../assets/images/home_enabled.png" slot="icon" v-if="selectedTab == 'home'">

            <img src="../../assets/images/home_disabled.png" slot="icon" v-else>
            首页
          </mt-tab-item>
          <mt-tab-item id="cart">
            <img src="../../assets/images/cart_enabled.png" slot="icon"  v-if="selectedTab == 'cart'">
            <img src="../../assets/images/cart_disabled.png" slot="icon" v-else>
            购物车
          </mt-tab-item>
          <mt-tab-item id="me">
            <img src="../../assets/images/me_enabled.png" slot="icon"  v-if="selectedTab == 'me'">
            <img src="../../assets/images/me_disabled.png" slot="icon" v-else>
            我
          </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<style scoped>
.main{
  margin-bottom:55px;
}
</style>
<script>
export default {
  data(){
    return {
      selectedTab:'home'
    }
  }
}
</script>