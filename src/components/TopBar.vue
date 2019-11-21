<template>
  <div class="top-bar" :style='topBarStyle'>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    data(){
     return {
        topBarStyle: {
          width: '100%',
          height: this.barHeigth || '40px',
          backgroundColor: this.bgClolor,
        }
     }
    },
    props: ['bgClolor', 'barHeigth']
  }
</script>

<style lang='less'>
  .top-bar {
    display: flex;
    align-items: center;
  }
</style>
