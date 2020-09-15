<template>
  <div id="Home">
    <div
      :class="['showmenu',isShow ?'active':'']"
      @click="showMenu()"
      :style="'background:'+background"
    >
      <span
        :class="[isShowMenu ? 'glyphicon glyphicon-remove':'glyphicon glyphicon-list']"
        style="color:#fff;font-size:2rem;"
      ></span>
    </div>
    <div :class="['showLogin',isShow ?'active':''] ">
      <div class="login">
        <span class="glyphicon glyphicon-heart"></span> 登录
      </div>
    </div>
    <div class="isMenu" :style="'display:'+ display">
      <ul class="menu-content">
        <div class="login" style="border: 1px solid rgb(255, 255, 255);font-size:1.5rem
">
          <span class="glyphicon glyphicon-heart"></span> 登录
        </div>
        <li>
          <router-link class="linkItem" to="/discover">发现</router-link>
        </li>
        <li>
          <router-link class="linkItem" to="/miniprogram">小程序</router-link>
        </li>
        <li>
          <router-link class="linkItem" to="/domins">域名服务</router-link>
        </li>
        <li>
          <router-link class="linkItem" to="/logoDisign">LOGO设计</router-link>
        </li>

        <li>
          <router-link class="linkItem" to="/downloadApp">下载App</router-link>
        </li>
        <li>
          <router-link class="linkItem" to="/joinus">加入我们</router-link>
        </li>
        <li>
          <router-link class="linkItem" to="/help">帮助中心</router-link>
        </li>
      </ul>
      <div class="poweredby-info">
        <img src="https://static-assets.sxlcdn.com/images/landing-sxl/grey-logo.png" />
        <span>公司旗下产品</span>
      </div>
    </div>
    <sect />
    <modle />
    <home-aside />
    <home-foot />
  </div>
</template>

<script>
import sect from "./child/section/section";
import modle from "./child/modle/modle";
import homeAside from "./child/aside/homeAside";
import homeFoot from "./child/home-foot/homeFoot";
export default {
  data() {
    return {
      isShow: false,
      isShowMenu: false,
      display: "none",
      background: "",
    };
  },
  components: {
    sect,
    modle,
    homeAside,
    homeFoot,
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > 550 && scrollTop < 4200) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },

    showMenu() {
      this.isShowMenu = !this.isShowMenu;
      if (this.isShowMenu) {
        this.background = "none";
        this.display = "block";
      } else {
        this.background = "";
        this.display = "none";
      }
    },
  },
};
</script>

<style scoped>
.poweredby-info {
  font-size: 1.5rem;
  text-align: center;
  color: #a9aeb2;
}
.poweredby-info img {
  margin-right: 7px;
  height: 25px;
}
.showmenu {
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  position: fixed;
  z-index: 10;
  left: 30px;
  top: 4%;
  width: 50px;
  height: 40px;
  font-size: 2.3rem;
}

.showLogin {
  position: fixed;
  z-index: 10;
  right: 30px;
  top: 4%;
  border-radius: 5px;
  border: 1px solid rgb(255, 255, 255);
}
.showLogin:hover,
.showmenu:hover {
  cursor: pointer;
}
.active {
  border: none;
  background-color: #62418d;
}
.login {
  text-align: center;
  height: 40px;
  width: 100px;
  border-radius: 5px;
  color: #fff;
  border-radius: 3px;
  line-height: 40px;
  font-weight: 300;
}

.isMenu {
  z-index: 9;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 260px;
  background-color: rgba(27, 27, 27, 1);
}
.menu-content {
  color: #fff;

  font-size: 1.8rem;
  line-height: 150%;
  height: 500px;
  padding-left: 50px;
  padding-top: 80px;
}
.menu-content > li {
  margin: 20px 0;
  color: #fff;
}
.menu-content .linkItem {
  text-decoration: none;
  color: #fff;
}
</style>