<template>
  <div class="search">
    <div class="l">
          <div class="title">JD</div>
    <div class="line">|</div>
    <div class="search-icon">
      <i class="el-icon-search"></i>
    </div>
    </div>
    <input type="text" class="search-input">
  </div>
</template>
<style lang="scss" scoped>
.search {
  width: 72.8vw;
  height: 8vw;
  position: relative;
  background: #fff;
  border-radius: 4vw;
  .l {
    position: absolute;
    display: flex;
    justify-content: flex-start;
    top: 50%;
    transform: translateY(-50%);
    left: 2vw;
  }
  .title {
    font-weight: 700;
    color: #EA4D4F;
  }
  .line {
    margin-left: 2vw;
    color: #c3c3c3;
    font-weight: 200;
  }
  .search-icon {
    margin-left: 2vw;
    color: #c3c3c3;
  }
}
.search-input {
  width: 52vw;
  height: 4.27vw;
  position: absolute;
  top: 50%;
  right: 3vw;
  transform: translateY(-50%);
  outline: none;
  border: none;
}
</style>