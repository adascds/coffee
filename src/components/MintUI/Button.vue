<template>
  <div>
    <p><mt-button type="default">默认</mt-button></p>
    <p><mt-button type="primary">主要</mt-button></p>
    <p><mt-button type="danger">危险</mt-button></p>
    <p>
      <mt-button 
        type="primary" 
        size= "small">
      小的
      </mt-button>
    </p>
    <p><mt-button type="primary" size="normal">标准</mt-button></p>
    <p><mt-button type="primary" size="large">大的</mt-button></p>

    <p>
      <mt-button type="primary" icon="back">返回</mt-button>
    </p>
    <p>
      <mt-button type="primary" icon="more">更多</mt-button>
    </p>

    <p>
      <mt-button type="primary" disabled>禁用</mt-button>
    </p>
    <p>
      <mt-button type="primary">
        <img src="../../assets/images/refresh.png" slot="icon">刷新
      </mt-button>
    </p>
  </div>
</template>