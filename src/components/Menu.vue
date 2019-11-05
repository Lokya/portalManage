<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
           @select="handleSelect" :style="menuStyle" :text-color='textColor'
           :active-text-color='activeTextColor'>
    <el-menu-item index="1">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuStyle: {
        backgroundColor: 'rgba(1,1,1,0.5)',
        position: 'fixed',
        width: '100%',
        zIndex: 10,
      },
      textColor: '#fff',
      activeTextColor: '#eee',
    };
  },
};
</script>
<style lang="less">
  .el-menu {
    background-color: unset
  }
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .el-menu--horizontal .el-menu .el-menu-item,
  .el-menu--horizontal .el-menu .el-submenu__title {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
