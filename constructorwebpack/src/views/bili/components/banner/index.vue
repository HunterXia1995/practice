<template>
  <div class="banner">
    <div class="baackground"></div>
    <div class="pannel">
          <el-carousel trigger="click" height="38.13vw">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.banner {
  position: relative;
}
.baackground {
  height: 38.13vw;
  width: 100vw;
  background: red;
  border-radius: 0px 0vw 0vw 1000vw;
}
.pannel {
  padding: 5vw 4vw;
  position: absolute;
  width: 100vw;
  top: 0px;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
