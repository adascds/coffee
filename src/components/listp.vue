<template>
    <div>
          <!-- 商品列表 -->
            <ul class="prolist" >
                <li v-for="(pro,i) of product" :key="i">
                    <router-link to="/prodesc">
                        <div class="pic">
                            <img :src="pro.pic" alt="" srcset="">
                        </div>
                        <div class="txt">
                            <h3 class="tit">{{pro.title}}</h3>
                            <p class="price">
                                <span>￥{{pro.nowPrice}}</span>
                                <em class="iconfont z-icon-gouwuche" @click="tianjia"></em>
                            </p>
                            <p class="num">已售{{pro.saleCount}}件</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <!-- 商品列表-end -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            product:[]
          
        }
    },
    methods:{
        tianjia(){
            alert("666");
        }
    },
    mounted(){
        //首页商品数据请求
        this.axios.get('/product').then((res)=>{
        //console.log(res);
        this.product=res.data;
  })
    }




}
</script>
<style scoped>
.my-box{
    overflow: hidden;
}
.my-pro{
    margin-bottom: 58px;
    padding: 0 5px
}
.my-box .mint-header{
    background-color: #fff;
    color: #666;
    font-size: 16px;
    font-weight: bold;
}
.my-box .mintui{
    font-size: 16px;
}
.my-pro .ban{
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
}
.my-pro .ban img{
    display: block;
    width: 100%;
    height: 100%;
}
.prolist{
 overflow: hidden;
 margin: 0 -4px; 
}
.prolist li{
    float: left;
    width: 50%;
    padding: 0 4px;
    box-sizing: border-box;
    margin-bottom: 5px;

}
.prolist .pic{
    height: 130px;
}
.prolist .txt{
    padding: 12px 14px;;
        background-color: #fff;
}
.prolist li img{
    width: 100%;
    height: 100%;
    display: block;
}
.prolist .tit{
    font-size: 14px;
    color: rgba(0, 0, 0, .6);
    margin-bottom: 12px;
}
.prolist .price{
    color: #fe4610;
    font-size: 18px;
    margin-bottom: 10px;
    overflow: hidden;
}
.prolist .num{
    font-size: 12px;
    color: rgba(0, 0, 0, .4);
}
.prolist .price em{
    font-size: 18px;
    float: right;
}
</style>