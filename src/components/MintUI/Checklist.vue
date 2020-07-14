<template>
  <div>
    <p>{{loves}}</p>
    <mt-checklist 
      title="爱好" 
      :options="options"
      v-model="loves">
    </mt-checklist>
    <mt-button type="primary" @click="handler">全选</mt-button>
  </div>
</template>
<script>
export default {
  methods:{
    handler(){
        //清空之前存储的选项(否则会产生累计的效果)
        this.loves = [];
        this.options.forEach((item)=>{
          this.loves.push(item.value);
        });
    }
  },
  data(){
    return {
      //存储选定的爱好
      loves:[],
      //存储可选择的爱好
      options:[
        {
          label:'学习',
          value:'0'
        },
        {
          label:'看书',
          value:'2'
        },
        {
          label:'运动',
          value:'3'
        }
      ]
    }
  }
}
</script>