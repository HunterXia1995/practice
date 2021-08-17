<template>
  <div class="footer">
    这是fotter
    <div class="pannel">
      <header class="header">
        <div class="left">左标题</div>
        <div class="right">
          <div v-for="item in operates" 
          :key="item" class="open operate">
            {{ item }}
          </div>
        </div>
      </header>
      <slot>
        <div class="content">
          这是内容
        </div>
      </slot>
      <slot :personName='name' name='right'>
      </slot>  
    </div>
    <div class='scroll'>
      <div class='box'></div>
      <div class='box'></div>
      <div class='box'></div>
      <div class='box'></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'foot',
  data () {
    return {
      name: '123'
    }
  },
  props: {
    operates: {
      type: Array,
      default () {
        return ['打开', '关闭']
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .scroll {
    width: 200px;
    height: 20px;
    overflow-x: scroll;
    white-space: nowrap;
    .box {
      width: 60px;
      height: 20px;
      background: yellow;
      display: inline-block;
    }
  }
  ::-webkit-scrollbar{width:0;}
  ::-webkit-scrollbar-thumb{
        background-color: red;

        border-radius: 5px;

    }
  .footer {
    width: 100%;
    color: #fff;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #000;
    font-size: 20px;
    height: 80px;
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 10%;
    }
    .operate {
      cursor: pointer;
      position: relative;
    }
    .operate::after {
      transition: all 0.3s linear 0s;
      left: 50%;
      width: 0%;
      bottom: 0px;
      border-bottom: 1px solid red;
      content: '';
      position: absolute;
    }
    .operate:hover::after{
        width: 100%;
        left: 0px;
      }
  }
  .content {
    height: 400px;
    background: #c3c3c3;
  }
</style>