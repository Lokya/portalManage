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
import banner1 from '../../public/banner/1.jpg';
import banner2 from '../../public/banner/2.jpg';
import banner3 from '../../public/banner/3.jpg';

export default {
  name: 'Carousel',
  data() {
    return {
      bannerHeight: window.innerHeight,
      elCarouselItem: {
        lineHeight: `${window.innerHeight}px`,
      },
      items: [
        banner1,
        banner2,
        banner3,
      ],
    };
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
