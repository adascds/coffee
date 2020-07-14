<template>
<!-- 初始情况下显示50 -->
<!-- 每向下滚动距底部还有10个像素时，在原来的基础上加50 -->
  <div>
      <div
        infinite-scroll-distance="10"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy">
          <p v-for="(v,k) in value" :key="k">{{v}}</p>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
    loadMore(){
        //此时代表正在处理加载更多数据的请求
        //如果此时再次进行滚动范围后将不再触发加载更多数据的方法
        this.busy = true;
        window.setTimeout(()=>{
          this.value += 50;
          //此时代表已经处理完数据
          //如果此时再次进行滚动范围后将继续触发加载更多数据的方法
          this.busy = false;
        },5000);
    }
  },
  data(){
    return {
       value:50,
       busy:false
    }
  }
}
</script>