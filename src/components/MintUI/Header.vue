<template>
  <div>
      <mt-header title="学前端，到学问" fixed>
        <router-link slot="left" to="/">
            <mt-button type="primary" icon="back"></mt-button>
        </router-link>
        <router-link slot="right" to="/">
            <mt-button type="primary" icon="more"></mt-button>
        </router-link>
      </mt-header>
      <div class="main">
        <p v-for="(v,k) in 50" :key="k">{{v}}</p>
      </div>
  </div>
</template>
<style scoped>
.main{
  margin-top:40px;
}
</style>