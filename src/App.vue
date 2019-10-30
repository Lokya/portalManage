<template>
  <div id="app">
    <Menu />
    <Carousel />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue';
import Menu from './components/Menu.vue';

export default {
  name: 'app',
  components: {
    Carousel,
    Menu,
  },
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
