<template>
  <div id="head">
    <header>
      <div class="row">
        <div class="content">
          <div class="col-md-2 meu">
            <span class="glyphicon glyphicon-list" style="color:#fff;font-size:2rem"></span>
          </div>
          <div class="col-md-8">
            <div class="ad hidden-xs hidden-sm">
              <span class="glyphicon glyphicon-user"></span>
              <span>
                【新品发布】超级云名片小程序，超级销售的新商务标配。
                <a href="#">了解详情</a>
              </span>
            </div>
            <div class="imgLogo">
              <img src="../../../../../assets/image/logo.png" />
            </div>
            <div class="row">
              <div class="showMessage">十分钟创建网站和小程序，无需专业技术知识与设计经验</div>
            </div>
            <div class="showContent">
              <div class="row">
                <div class="col-lg-4">
                  <input-c />
                </div>
                <div class="col-lg-4">
                  <div class="achieveCode">
                    <input
                      type="text"
                      style="height:44px;border:none;outline:none;flex:1"
                      class="form-control"
                      aria-label="..."
                      placeholder="请输入验证码"
                    />

                    <input type="button" class="code" value="获取验证码" />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="check">
                    <div>
                      <button class="start">立即免费体验</button>
                    </div>
                    <input type="checkbox" class="checkbox" />
                    <label>请勾选同意服务条款和法律声明</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="line"></div>
            </div>
            <div class="showbrand">
              <div class="row">
                <div class="col-lg-3">
                  <div class="item">
                    <img src="../../../../../assets/image/alibaba.png" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="item">
                    <img src="../../../../../assets/image/uber.png" />
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="item">
                    <img src="../../../../../assets/image/ant.png" />
                  </div>
                </div>
                <div class="col-lg-3 item">
                  <div class="item">
                    <img src="../../../../../assets/image/starbucks.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <div class="login">
              <span class="glyphicon glyphicon-heart"></span> 登录
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import inputC from "./inputC";
export default {
  components: {
    inputC,
  },
};
</script>

<style scoped>
.content {
  padding: 20px 40px;
}
.meu {
  height: 50px;
  line-height: 50px;
}
.ad {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
}
.login {
  text-align: center;
  height: 40px;
  width: 100px;
  border-radius: 4px;
  color: #fff;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 3px;
  line-height: 40px;
  font-weight: 300;
}
.imgLogo {
  height: 46px;
  width: 96px;
  margin: 100px auto 40px;
}
.imgLogo img {
  width: 100%;
  height: 100%;
}
.showMessage {
  text-align: center;
  color: #fff;
  font-size: 2.5rem;
  font-weight: bolder;
}
.showContent {
  margin-top: 20px;
}
.achievecode {
  background: none;
  border: none;
}
.check {
  color: #fff;
}
.start {
  white-space: normal;
  padding: 10px 25px;
  min-width: 220px;
  -webkit-appearance: none;
  background-color: #f7c10d;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12), inset 0 1px 0 0 #ffdd8e;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
}
.checkbox {
  display: inline-block;
  margin-right: 10px;
}
.achieveCode {
  text-align: center;
  line-height: 44px;
  width: 100%;
  height: 44px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;
}
.code {
  flex: 1;
  border: none;
  outline: none;
  background: none;
  color: rgb(167, 167, 167);
}
.showbrand {
  text-align: center;
  margin-top: 60px;
}
.showbrand .item {
  height: 69px;
  width: 186px;
}
.showbrand .item img {
  width: 100%;
  height: 100%;
}
.line {
  margin-top: 40px;
  height: 0.5px;
  background-color: #fff;
}
</style>