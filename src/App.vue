<template>
  <div id="app">
    <TopBar bgClolor="rgba(0,0,0,0.5)" barHeigth='50px'>
      <Menu :menuDatas="[{title: 'hello', key: 1, children: { title: '123'}}]" menuHeight='40' />
    </TopBar>
  </div>
</template>

<script>
import TopBar from './components/TopBar';
import Menu from './components/Menu';
export default {
  name: 'app',
  components: {
    TopBar,
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
