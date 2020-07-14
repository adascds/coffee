<template>
  <div>
    <mt-tab-container v-model="footertab">
      <mt-tab-container-item id="home">
        <home></home>
      </mt-tab-container-item>
      <mt-tab-container-item id="menu1">
        <menu1></menu1>
      </mt-tab-container-item>
      <mt-tab-container-item id="gwc">
        <gwc></gwc>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
        <me></me>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <p class="iconfont z-icon-zhuye-copy"></p> -->
    <mt-tabbar v-model="footertab" fixed>
      <mt-tab-item id="home">
        <span class="iconfont z-icon-zhuye-copy" slot="icon"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="menu1">
        <span class="iconfont z-icon-icon-" slot="icon"></span>
        菜单
      </mt-tab-item>
      <mt-tab-item id="gwc">
        <span class="iconfont z-icon-weibiaoti--" slot="icon"></span>
        购物车
      </mt-tab-item>
      <mt-tab-item id="me">
        <span class="iconfont z-icon-wode" slot="icon"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import home from "../views/home";
import me from "../views/me";
import gwc from "../views/gwc";
import menu1 from "../views/menu1";
export default {
  data() {
    return {
      footertab: "home"
    };
  },
  components: { home,me,menu1,gwc },
  
};
</script>

<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #232773;
}
p {
  width: 100px;
  height: 100px;
}

.z-icon-zhuye-copy {
  font-size: 24px;
}
.z-icon-weibiaoti-- {
  font-size: 29px;
  -webkit-transform: translate(-4.5px, -2px);
  -moz-transform: translate(-4.5px, -2px);
  -o-transform: translate(-4.5px, -2px);
  -ms-transform: translate(-4.5px, -2px);
  transform: translate(-4.5px, -2px);
}
.z-icon-wode {
  font-size: 22px;
  -webkit-transform: translatey(2px);
  -moz-transform: translatey(2px);
  -o-transform: translatey(2px);
  -ms-transform: translatey(2px);
  transform: translatey(2px);
}
.z-icon-icon- {
  font-size: 27px;
  -webkit-transform: translate(-1px, -2px);
  -moz-transform: translate(-1px, -2px);
  -o-transform: translate(-1px, -2px);
  -ms-transform: translate(-1px, -2px);
  transform: translate(-1px, -2px);
}
.z-icon-icon_chaopin-02 {
  font-size: 21px;
  -webkit-transform: translatey(3px);
  -moz-transform: translatey(3px);
  -o-transform: translatey(3px);
  -ms-transform: translatey(3px);
  transform: translatey(3px);
}
</style>
