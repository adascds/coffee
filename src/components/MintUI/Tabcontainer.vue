<template>
  <div>
    <!-- 顶部选项卡开始 -->
    <mt-navbar v-model="active">
      <mt-tab-item id="1">
        <img src="../../assets/images/html.png" slot="icon">
        HTML
      </mt-tab-item>
      <mt-tab-item id="2">
        CSS
        <img src="../../assets/images/css.png" slot="icon">
      </mt-tab-item>
      <mt-tab-item id="3">
        JavaScript
        <img src="../../assets/images/javascript.png" slot="icon">
      </mt-tab-item>
    </mt-navbar>    
    <!-- 导部选项卡结束 -->
    <!-- 面板区域开始 -->
    <div class="main">
      <mt-tab-container v-model="active" swipeable>
          <mt-tab-container-item id="1">
            <!-- 单一文章信息开始 -->
            <div class="articleItem" v-for="(v,k) in 10" :key="k">
                <!-- 文章标题开始 -->
                <div class="articleItem-header">
                  税后年薪十万、二十万、三十万的汽车工程师的真实生活
                </div>
                <!-- 文章标题结束 -->
                <!-- 文章图文信息开始 -->
                <div class="articleItem-wrapper">
                    <!-- 文章图像开始  -->
                    <div class="articleImg">
                        <img src="../../assets/images/articles/v2-f7229ec43aa14b997a661b09a66c0823_224x148.jpg">
                    </div>
                    <!-- 文章图像结束 -->
                    <!-- 文章简介开始 -->
                    <div class="articleDes">
                        第一次回答这么私密的问题，紧张兮兮！跟众多行业前辈比起来，我可能是一个汽车界的萌新了，研究生毕业工作还不满两年。工资水平自然也是处于第一档。自报一下家门，目前在上汽乘用车工作，市场部，虽然目前做的是市场部工作，但是本科研究生读的都是车辆工程专业，而且由于对汽车的喜欢，也一直没有完全丢掉。所以在我们品牌传播这里，涉及到底层机械电气等原理的部分，一般都会来问问我，算是一项差异化优势吧。上汽乘用车地处于
                    </div>
                    <!-- 文章简介结束 -->
                </div>
                <!-- 文章图文信息结束 -->
            </div>
            <!-- 单一文章信息结束 -->
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            BBB
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            CCC
          </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 面板区域结束 -->
    <!-- 底部选项卡开始 -->
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
    <!-- 底部选项卡结束 -->
  </div>
</template>
<style>
html,body{
  touch-action: none;
}
</style>
<style scoped>
.main{
  margin-bottom:55px;
}
.articleItem{
  padding:10px 0;
  margin:0 10px;
  border-bottom:1px solid #999;
}
.articleItem-header{
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper{
  display: flex;
  align-items: center;
  padding-top: 11px;
  width:100%;
}
.articleImg{
  margin-right:15px;
}
.articleImg img{
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes{
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>
<script>
export default {
  data(){
    return {
      //默认选定的顶部选项卡
      active:'1',
      //默认选定的底部选项卡
      selectedTab:'home'
    }
  }
}
</script>