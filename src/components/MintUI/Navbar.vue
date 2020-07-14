<template>
  <div>
    <p>{{active}}</p>
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
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:"3"
    }
  }
}
</script>