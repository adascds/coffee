<template>
  <div>
    <mt-cell-swipe 
      title="中国新闻" 
      :right="rightButtons">
    </mt-cell-swipe>
  </div>
</template>
<script>
export default {
  data(){
      return {
        rightButtons:[
          {
              content:'隐藏提醒',
              style:{background:'blue',color:'white'}
          },
          {
            content:'删除',
            style:{background:'#f00',color:'white'},
            handler:()=>{
                this.$messagebox.confirm('确认要删除吗?','删除操作')
                .then((action)=>{
                  //发送AJAX请求
                }).catch(()=>{

                });
            }
          }
        ]
      }
  }
}
</script>