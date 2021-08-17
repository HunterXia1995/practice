<template>
  <div class="content">
    <Banner/>
    <!-- <div ref="button"  class="button">button</div> -->
    <!-- <div  v-if="compareButtonAndScroll" class="button fixed-button">button</div> -->
  </div>
</template>
<script>
import Banner from "@/views/bili/components/banner/index.vue";
export default {
  data () {
    return {
      buttonTop: null,
      scrollY: null
    }
  },
  components: {
    Banner
  },
  computed: {
    compareButtonAndScroll () {
      return this.scrollY > this.buttonTop - 44
    }
  },
  methods: {

  },
  mounted () {
    this.buttonTop = this.$refs['button'].offsetTop
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY
    })
  }
}
</script>
<style lang="scss" scoped>
.content {
  min-height: 100vh;
  height: 300vh;
  background: #F6F6F6;
}
.button {
  background: red;
  width: 100vw;
}
.fixed-button {
  position: fixed;
  top: 44px;
}
.fixed-content {
  padding-top: 44px;
}
</style>