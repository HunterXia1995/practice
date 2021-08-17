<template>
  <div class="header">
    <Menu/>
    <Search/>
    <div class="login">登录</div>
  </div>
</template>
<script>
import Menu from "@/views/bili/components/menu/index.vue";
import Search from "@/views/bili/components/search/index.vue";
export default {
  components: {
    Menu,
    Search
  }
}
</script>
<style lang="scss" scoped>
$height: 11.73vw;
.header{
  height: $height;
  line-height: $height;
  background: #C82519;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
.login {
  font-size: 3.73vw;
}
</style>