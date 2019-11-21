<template>
  <div class="menus">
    <div class="menu" v-for="menu in menus" v-bind:key="menu.key">
      <label class="menu-title">{{menu.title}}</label>
      <div class="menu-children" :style="childMenu" v-for="child in menu.children" v-bind:key="child.key">
        <a href="">{{child.title}}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menus: this.menuDatas || [],
      childMenu: {
        bottom: -this.menuHeight - 20 + 'px'
      }
    }
  },
  props: ['menuDatas', 'menuHeight']
};
</script>
<style lang="less">
  .menus {
    height: 100%;
  }
  .menu {
    min-width: 40px;
    max-width: 100px;
    height: 100%;
    text-align: center;
    padding: 0 5px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .menu-title {
    display: inline-block;
  }
  .menu-children {
    position: absolute;
    width: 100px;
    min-height: 40px;
    background: #ff000f;
  }
</style>
