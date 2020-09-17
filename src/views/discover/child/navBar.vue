<template>
  <div id="navBar">
    <nav class="navbar navbar-default">
      <div class="container-fluid navbar-height">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/">
              <img src="../../../assets/image/logo.png" alt />
            </router-link>
          </div>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li nav-color>
                <router-link to="/">首页</router-link>
              </li>
              <li>
                <router-link to="/">发现</router-link>
              </li>
              <li>
                <router-link to="/">小程序</router-link>
              </li>
              <li>
                <router-link to="/">套餐价格</router-link>
              </li>
              <li>
                <router-link to="/">图片下载</router-link>
              </li>
              <li>
                <router-link to="/">代理合作</router-link>
              </li>
              <li>
                <router-link to="/">帮助中心</router-link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li>
                <router-link to="/">注册</router-link>
              </li>
              <li>
                <router-link to="/">登录</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  created() {
    console.log($("#navBar"));
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .navbar-nav:nth-child(2) {
    margin: 0 -15px;
  }
}

#navBar .navbar-default {
  background-color: #8159bb;
}
.navbar-brand > img {
  height: 28px;
}
.navbar {
  margin-bottom: 5px;
}
.nav > li > a {
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
}
.nav > li > a:hover {
  color: rgb(228, 228, 228);
}
</style>