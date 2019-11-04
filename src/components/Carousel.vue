<template>
  <div class="block">
    <el-carousel trigger="click" :height="bannerHeight + 'px'">
      <el-carousel-item v-for="item in items" :key="item" :style="elCarouselItem">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
    return {
      bannerHeight: window.innerHeight,
      elCarouselItem: {
        lineHeight: window.innerHeight + 'px'
      },
      items: [
        require('../../public/banner/1.jpg'),
        require('../../public/banner/2.jpg'),
        require('../../public/banner/3.jpg'),
      ]
    }
  },
};
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
