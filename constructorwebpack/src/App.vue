<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// Amd格式引入
let mod = require(["./utils/index"], 
function (index) {
  // rest of your code here
  index.test()
});
export default {
  name: 'App',
  data () {
    return {
      name: 123
    }
  },
  created () {
    // var debounce = function (fn, delay) {
    //   let timer
    //   // console.log(123);
    //   return function () {
    //     var _self = this
    //     var arg = arguments
    //     if (timer) clearTimeout(timer)
    //     timer = setTimeout(() => {
    //       fn.apply(_self, arg)
    //     }, delay)
    //   }
    // }
  }
}
</script>
<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
}
.pic {
  width: 80vw;
  height: 70vh;
  background: red;
  position: absolute;
  left: 10vw;
  top: 15vh;
  animation: mymove 5s 1;
  
  @keyframes mymove {
    from {
      top: -70vh;
      transform: rotateY(0deg);
    }
    to {
      top: 15vh;
      transform: rotateY(720deg);
    }
  }
}
table {
  color: red;
  border-collapse: collapse;
  text-align: center;
  tr {
    border: 1px solid #000;
    padding: 0px;
  }
  td {
    border: 1px solid #000;
    padding: 0px;
  }
}
</style>