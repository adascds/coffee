<template>
  <div class="menu">
    <!-- 顶部轮播 -->
    <div class="f-ban">
      <mt-swipe :show-indicators="false" >
        <mt-swipe-item v-for="(item,index) of carousel" :key="index">
          <img :src="item.img" alt srcset />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 顶部轮播-end -->

    <!-- 商品列表 -->

    <div class="content">
      <!-- 左侧导航 -->
      <mt-navbar v-model="active" class="nav">
        <mt-tab-item v-for="(item,i) of navs" :key="i" class="list" :id="i+1">{{item}}</mt-tab-item>
      </mt-navbar>
      <!-- 左侧导航-end -->
      <!-- 右侧内容 -->
      <mt-tab-container v-model="active" class="desc">
       
        <mt-tab-container-item v-for="(item,i) of descs" :key="i" :id="i+1">
          <!-- <h3>{{}}</h3> -->
          <div class="li1" v-for="(item,i) of product" :key="i">
            <div class="pic">
              <img :src="item.pic" alt srcset />
            </div>
            <div class="txt">
              <h3>{{item.title}}</h3>
              <span>{{item.spec}}</span>
              <em>￥{{item.nowPrice}}</em>
            </div>
            <span class="tjia iconfont z-icon-jia-tianchong jia" @click="tjia()"></span>

          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- 右侧内容-end -->
    </div>
    <!-- 商品列表 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      carousel:[],
      product:[],
      navs: [
        "人气TOP",
        "经典拿铁",
        "大师咖啡",
        "瑞纳冰",
        "水果茶",
        "气泡水",
        "轻食甜品",
        "甄选酸奶",
        "鲜榨果汁",
        "经典饮品"
      ],
      descs: [
        [
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "拿铁",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "拿铁2",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "拿铁3",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "拿铁4",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          }
        ], [
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "d拿铁",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "d拿铁2",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "d拿铁3",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
          {
            img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
            tit: "d拿铁4",
            entit: "Latte",
            moren: "默认: 大/热/无糖",
            proct: "13.75"
          },
         
        ]
      ],
        active:1,
        id:""

    }
  },methods:{
    tjia(){

    }
  },
  mounted(){
     //首页商品数据请求
    this.axios.get('/product').then((res)=>{
    console.log(res);
    this.product=res.data;
  })
    //首页轮播图数据请求
    this.axios.get('/carousel').then((res)=>{
    console.log(res);
    this.carousel = res.data;
  })

  }

}
</script>

<style  scoped>
.menu .tjia{
  display: inline-block;
  font-size: 20px;
  color: #6f87c5;
  position: absolute;
  top: 50%;
  right: 20px;
}
.menu .mint-navbar {
  display: block;
  background-color: rgba(0, 0, 0, 0);
}
.menu {
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 0 9px;
}
.menu /deep/ .mint-navbar .mint-tab-item.is-selected {
  border-bottom: 0px solid #26a2ff;
  color: #000;
  margin-bottom: 0;
}
.f-ban {
  background: url(../assets/img/00.png) no-repeat center center;
  background-size: cover;
  padding: 10px 9px 0;
  height: 206px;
}

.f-ban .mint-swipe {
  height: 154px;
  border-radius: 6px;
  overflow: hidden;
}
.f-ban img {
  width: 100%;
  height: 100%;
  display: block;
}
.content {
  overflow: hidden;
}
.nav {
  float: left;
  margin-right: 9px;
}
.nav .list {
  padding: 14px 7px;
  margin: 5px 0;
  text-align: center;
  border-radius: 9px;
  box-sizing: border-box;
  color: #676767;
  display: block;
}

.nav .list.is-selected {
  background-image: url(../assets/img/btn.png);
  background-size: cover;
  color: #000;
  font-weight: 600;
}
.desc {
  overflow: hidden;
  background-color: #fff;
  overflow: hidden;
  padding: 10px 8px;
}
.desc .pic {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  float: left;
}
.desc .pic img {
  display: block;
  width: 100%;
  height: 100%;
}
.desc .txt {
  overflow: hidden;
  padding: 3px 0px 3px 7px;
  box-sizing: border-box;
}
.desc h3 {
  font-weight: 600;
  margin-bottom: 6px;
}
.desc /deep/ .mint-tab-container-wrap {
  display: block;
}
.desc span {
  display: block;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  margin-bottom: 3px;
}
.desc em {
  display: block;
  color: #d95f3a;
  font-size: 18px;
}
.desc .li1 {
  box-sizing: border-box;
  overflow: hidden;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
}
</style>
