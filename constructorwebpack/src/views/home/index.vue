<template>
  <div class="home">
    <nav>
      <div style="display: flex; justify-content: flex-start">
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
          <input
            class="login-input"
            placeholder="Search Github"
            style="width: 240px; height: 36px"
            type="text"
          />
          <div class="ope-button sign-in">Sign in</div>
          <div class="ope-button sign-up">Sign up</div>
          <i class="el-icon-s-fold"></i>
        </div>
      </div>
    </nav>
    <div class="login-introduce">
      <div class="title">Where the world builds software</div>
      <div class="content">
        Millions of developers and companies build, ship, and maintain their
        software on GitHub—the largest and most advanced development platform in
        the world.
      </div>
      <div class="login-button-container">
        <input
          @keydown.enter="keydownConfirm($event)"
          class="email"
          placeholder="Email address"
          type="text"
        />
        <button>Sign up for GitHub</button>
      </div>
    </div>
    <div class="need-position">
      <div class="menu-scroll">
        <div
          v-for="(item, index) in arr"
          @click="check(index, $event)"
          :key="item"
          class="menu-scroll-item"
        >
          {{ item }}
        </div>
        <div class="line"></div>
      </div>
      <video
        class="side-down-video"
        :autoplay="true"
        loop=""
        muted=""
        width="100%"
        height="40%"
      >
        <source
          src="src/video/75DB9F1676DD5D5A4CF8F3B9BAE98BC7.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="img">
      <img
        class="action-img"
        data-img="https://github.githubassets.com/images/modules/site/home/enterprise-city-w-logos.jpg"
        isLoad=""
        src=""
        alt=""
        srcset=""
      />
    </div>
    <div style="color: red">
      <img
        style="width: 500px; height: 200px"
        src="src/assets/test-400.png"
        alt=""
      />
    </div>
    <div>
      <!-- 复制代码start-->
      <div class="wrapper">
        <p style="color: red" id="text">我把你当兄弟你却想着复制我？</p>
        <textarea id="input">这是幕后黑手</textarea>
        <button @click="copyText">copy</button>
      </div>
      <!--复制代码end-->
    </div>
    <div class="father">
      <span class="span-1"></span>
      <span class="span-1"></span>
      <span class="span-1"></span>
      <span class="span-1"></span>
    </div>
    <div class="flex-father">
      <div class="l"></div>
      <div class="m">1231</div>
      <div class="r"></div>
    </div>
    <hr />
    <hr />
    <div class="float-father">
      <div class="l"></div>
      <div class="r"></div>
      <div class="m"></div>
    </div>
    <div>123</div>
    <div style="width: 100%; height: 50vh" class="footer"></div>
    <div style="color: #fff">{{ a }}</div>
    <div style="color: #fff"> {{ b }} </div>
    <foot>
      <template v-slot:right='{personName}'>
        {{ personName }}
      </template>  
    </foot>
    <button @click="hunnbb">点一点</button>
  </div>
</template>
<script>
import foot from "@/components/footer"
import { jsonp } from "@/api/jsonp";
export default {
  name: "home",
  components: {
    foot
  },
  data() {
    return {
      a: 1,
      b: 2,
      menu: [
        {
          name: "Why GitHub?",
          icon: true,
        },
        {
          name: "Team",
          icon: false,
        },
        {
          name: "Enterprise",
          icon: false,
        },
        {
          name: "Explore",
          icon: true,
        },
        {
          name: "Marketplace",
          icon: false,
        },
        {
          name: "Priceing",
          icon: true,
        },
      ],
      arr: ["test1", "test2", "test1893012313"],
      currentIndex: 0,
      scrollFunction: null,
      testObj: {},
      testObject: Object.freeze({
        name: '123',
        body: {
          leg: 12
        }
      })
    };
  },
  methods: {
    copyText() {
      var text = document.getElementById("text").innerText;
      var input = document.getElementById("input");
      // input.value = text; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      alert("复制成功");
    },
    // scroll(event) {
    //   console.log(event)
    // },
    hunnbb () {
      this.a = this.a * 100
      for (let i = 0; i < 100000; i++){
        let b = 0
        let c = 0
      }
      // setTimeout(() => {
      //   this.b = this.b * 100
      // }, 10000)
      this.b = this.b * 100
    },
    handleCallback(res) {
      alert(JSON.stringify(res));
    },
    initImg(el) {
      let el1 = el.querySelector("img");
      window.addEventListener("scroll", function () {
        let isLoad = el1.getAttribute("isLoad");
        if (isLoad) return;
        let $A = el.offsetHeight + el.offsetTop;
        let $B =
          document.documentElement.clientHeight +
          document.documentElement.scrollTop;
        if ($A <= $B) {
          el1.setAttribute("src", el1.getAttribute("data-img"));
          el1.addEventListener("load", function () {
            el1.style["display"] = "block";
            el1.style["top"] = "0px";
          });
          el1.setAttribute("isLoad", true);
        }
      });
    },
    check(index, event) {
      let el = event.target;
      let el1 = this.$el.querySelector(".menu-scroll");
      let lineEl = this.$el.querySelector(".line");
      lineEl.style["left"] = el.offsetLeft + "px";
      lineEl.style["width"] = event.target.offsetWidth + "px";
    },
    keydownConfirm(event) {

    },
  },
  created() {
    let recurise = function (arr, max) {
      let minMax = 0
      let index = 0
      if (arr.length > 0) {
        minMax += 2 * index
      }
    }

  },
  mounted() {
    jsonp().then(res => {
      console.log(res)
    })
    let el = this.$el.getElementsByClassName("img");
    // let el = this.$el.getElementsByTagName('img')
    for (let i of el) {
      this.initImg(i);
    }
    this.$nextTick(() => {
      // window.addEventListener("scroll", this.scroll);
    });
    class Test {
      constructor(distance) {
        this.distance = distance;
      }
      scroll() {
        console.log(this);
      }
      init() {
        this.scrollFunction = this.scroll.bind(this)
        window.addEventListener("scroll", this.scrollFunction);
      }
      remove() {
        window.removeEventListener("scroll", this.scrollFunction);
      }
    }
    this.testObj = new Test(0);
    this.testObj.init();
  
    // this.$http
    //   .jsonp("http://127.0.0.1:3000", {
    //     params: {},
    //     jsonp: "handleCallback",
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   });
  },
  beforeDestroy() {
    this.testObj.remove();
  }
};
</script>
<style lang="scss" scoped>
@import "@/views/home/style/screenCss.css";
.home {
  padding: 10px 6% 0px 6%;
  background: #040d21;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    padding-left: 5px;
    padding-right: 5px;
  }
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
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji;
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
.item-menu,
.menu {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.el-icon-s-fold {
  display: none;
}
@media screen and (max-width: 1020px) {
  .menu,
  .sign-in,
  .login-input {
    display: none;
  }
  .el-icon-s-fold {
    display: block;
    padding-left: 20px;
    font-size: 40px;
  }
}
.item-menu {
  cursor: pointer;
  transition: opacity 0.4s;
  margin-left: 20px;
  &:hover {
    opacity: 0.7;
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
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  padding-left: 10px;
  background: #293244;
  border-radius: 7px;
  //  -webkit-appearance: none;
  border: none;
  // box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
  // text-shadow: 0 1px 2px rgba(0,0,0,.1);
  &:focus {
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
.email,
button {
  height: 48px;
}
.email {
  -web-kit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  padding-left: 10px;
  background: #fff;
  border-radius: 7px;
  //  -webkit-appearance: none;
  border: none;
  width: 340.46px;
}
button {
  background: #2ca34d;
  border: none;
  padding: 0px 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
.need-position {
  width: 100%;
  height: 80vh;
  color: #fff;
  // background: url('~@/assets/test1.png');
  // background: red;
}
.action-img {
  width: 100%;
  height: 300px;
  object-fit: fill;
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
    transition: left 0.3s linear;
  }
}
.father {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  span {
    width: 300px;
    height: 200px;
    background: red;
    margin-right: 20px;
    margin-bottom: 10px;
  }
}
span:nth-last-child(1) {
  margin-right: 0px;
}
.flex-father {
  display: flex;
  width: 100%;
  color: #fff;
  div {
    flex-basis: 100px;
  }
  .l,
  .r {
    // width: 100px;
    flex-shrink: 2;
    height: 100px;
    background: red;
  }
  .m {
    width: 100%;
    flex-grow: 2;
    // padding: 0px 100px;
  }
}
.float-father {
  .l {
    float: left;
  }
  .r {
    float: right;
  }
  .l,
  .r {
    width: 100px;
    height: 100px;
    background: yellow;
  }
  .m {
    width: 100%;
    height: 100px;
    padding: 0 100px;
  }
}
</style>