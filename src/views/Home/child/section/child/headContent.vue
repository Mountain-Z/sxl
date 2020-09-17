<template>
  <div id="head">
    <header>
      <div class="row">
        <div class="content">
          <div class="col-sm-1 meu"></div>
          <div class="col-sm-10">
            <slot name="showAd"></slot>
            <div class="imgLogo">
              <img src="../../../../../assets/image/logo.png" />
            </div>
            <div class="row">
              <slot name="showMessage">
                <div class="showMessage">十分钟创建网站和小程序，无需专业技术知识与设计经验</div>
              </slot>
            </div>
            <div class="showContent">
              <div class="row">
                <div class="col-sm-4">
                  <div class="set-code">
                    <input-c />
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="row">
                    <div class="set-code">
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
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="row">
                    <div class="set-code">
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
              </div>
            </div>

            <slot name="showbrand" />
            <slot name="otherInfo" />
          </div>
          <div class="col-sm-1"></div>
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
  /* border-bottom: 0.5px solid rgba(255, 255, 255, 0.5); */
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
  margin-bottom: 80px;
}

.imgLogo {
  height: 46px;
  width: 96px;
  margin: 20px auto 40px;
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
  text-align: center;
  margin: 20px auto 0;
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
  padding: 10px 25px 0;
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
.set-code {
  margin: 0 auto;
  padding: 10px 10px 10px 0;
}
@media screen and (max-width: 768px) {
  .set-code {
    width: 240px;
  }
}
</style>