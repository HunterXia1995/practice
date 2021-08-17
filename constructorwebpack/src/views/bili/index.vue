<template>
  <div class="bili">
    <Header class="head"></Header>
    <Content class="content"/>
    <Nav class="nav"/>
  </div>
</template>
<script>
import Header from "@/views/bili/components/header/index.vue";
import Content from "@/views/bili/components/content/index.vue";
import Nav from "@/views/bili/components/nav/index.vue";
export default {
  components: {
    Header,
    Nav,
    Content
  }
};
</script>
<style lang="scss" scoped>
// .head {
//   position: -webkit-sticky; /* Safari */
//   position: sticky;
//   top: 0;
// }
.content {
  margin-top: 44px;
}
.head {
  position: fixed;
  width: 100vw;
  top: 0px;
  z-index: 99;
}
.nav {
  position: fixed;
  bottom: -3px;
  width: 100vw;
  z-index: 99;
}
</style>

