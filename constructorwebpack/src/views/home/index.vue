<template>
  <div class="home">
    <nav>
      <div style="display: flex;justify-content: flex-start">
      <div class="pic"></div>
      <div class="menu">
        <div v-for="item in menu" :key="item.name" class="item-menu">
          <div class="menu-name">{{ item.name }}</div>
          <i v-if="item.icon" class="menu-icon el-icon-arrow-down"></i>
        </div>
      </div>
      </div>
      <div class="login-container">
        <div class="login">
          <input placeholder="Search Github" style="width: 240px;height: 36px;" type="text">
          <div class="ope-button">Sign in</div>
          <div class="ope-button sign-up">Sign up</div>
        </div>
      </div>
    </nav>
    <div class="login-introduce">
      <div class="title">Where the world builds software</div>
      <div class="content">Millions of developers and companies build, 
        ship, and maintain their software on GitHub—the
         largest and most advanced development platform in the world.</div>
         <div class="login-button-container">
           <input class="email" placeholder="Email address" type="text">
           <button>Sign up for GitHub</button>
         </div>
    </div>
    <div class="need-position">
      <div class="menu-scroll">
        <div v-for="(item,index) in arr" 
          @click="check(index, $event)"
          :key="item" class="menu-scroll-item">
          {{ item }}
        </div>
        <div class="line"></div>
      </div>
    </div>
    <div class="img">
    <img data-img='https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg' 
    isLoad=''
    src="" alt="" srcset="">
    </div>
    <div style="width: 100%;height: 50vh" class="footer">
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      menu: [
        {
          name: 'Why GitHub?',
          icon: true
        },
        {
          name: 'Team',
          icon: false
        },
        {
          name: 'Enterprise',
          icon: false
        },
        {
          name: 'Explore',
          icon: true
        },
        {
          name: 'Marketplace',
          icon: false
        },
        {
          name: 'Priceing',
          icon: true
        }
      ],
      arr: [
        'test1',
        'test2'
      ],
      currentIndex: 0
    }
  },
  methods: {
    initImg (el) {
      console.log(el)
      let el1 = el.querySelector('img')
      console.log(el1)
      window.addEventListener('scroll', function () {
        let isLoad = el1.getAttribute('isLoad')
        console.log(isLoad)
        if (isLoad) return
        let $A = el.offsetHeight + el.offsetTop
        let $B = document.documentElement.clientHeight  + document.documentElement.scrollTop
        // console.log($A)
        // console.log($B)
        if ($A <= $B) {
          console.log(el1.getAttribute('data-img'))
          el1.setAttribute('src', el1.getAttribute('data-img'))
          el1.addEventListener('load', function () {
            el1.style['display'] = 'block'
            el1.style['top'] = '0px'
          })
          el1.setAttribute('isLoad', true)
        }
      })
    },
    check (index, event) {
      let el = event.target
      let el1 = this.$el.querySelector('.menu-scroll')
      let lineEl = this.$el.querySelector('.line')
      console.log(lineEl)
      lineEl.style['left'] = el.offsetLeft + 'px'
      lineEl.style['width'] = event.target.offsetWidth + 'px'
    }
  },
  mounted () {
    let el = this.$el.getElementsByClassName('img')
    // let el = this.$el.getElementsByTagName('img')
    for (let i of el) {
      this.initImg(i)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/views/home/style/screenCss.css';
.home {
  padding: 10px 8% 0px 8%;
  background: #040D21;
  min-height: 100vh;
  // position: absolute;
  // display: inline-block;
}
nav {
  padding: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
}
.menu-icon {
  color: #c3c3c3;
}
.pic {
  width: 33.6px;
  height: 33.6px;
  background: red;
  border-radius: 16.8px;
}
.item-menu,.menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item-menu {
  cursor: pointer;
  transition: opacity .4s;
  margin-left: 20px;
  &:hover {
    opacity: .7;
  }
}
.login {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.login-container {
  float: right;
}
.sign-up {
  border: 1px solid #fff;
  border-radius: 5px;
}
.ope-button {
  padding: 3px 5px;
  cursor: pointer;
  margin-left: 10px;
}
input {
  -web-kit-appearance:none;
  -moz-appearance: none;
  outline:0;
  padding-left: 10px;
  background: #293244;
  border-radius: 7px;
  //  -webkit-appearance: none;
   border: none;
  // box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
  // text-shadow: 0 1px 2px rgba(0,0,0,.1);
  &:focus{
    background: #fff;
  }
}
.login-introduce {
  color: #fff;
  padding-top: 100px;
  width: 584px;
  .title {
    font-weight: 800;
    font-size: 60px;
  }
  .content {
    font-size: 20px;
  }
}
// 输入框
.email,button {
  height: 48px;
}
.email {
  -web-kit-appearance:none;
  -moz-appearance: none;
  outline:0;
  padding-left: 10px;
  background: #fff;
  border-radius: 7px;
  //  -webkit-appearance: none;
  border: none;
  width: 340.46px;
}
button {
  background: #2CA34D;
  border: none;
  padding: 0px 5px;
  border-radius: 5px;
}
.need-position {
  width: 100%;
  height: 80vh;
  color: #fff;
  // background: red;
}
img {
  width: 100%;
  height: 300px;
  object-fit:fill;
  position: absolute;
  top: 30px;
  transition: all 1s linear;
}
.img {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
}
.menu-scroll {
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid yellow;
  position: relative;
  .menu-scroll-item {
    margin-left: 15px;
    cursor: pointer;
  }
  .line {
    width: 20px;
    height: 1px;
    background: blue;
    bottom: -1px;
    position: absolute;
    left: 14px;
    transition: left .3s linear;
  }
}
</style>