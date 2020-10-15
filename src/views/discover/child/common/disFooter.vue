<template>
  <div id="disFooter">
    <div class="dis-wrapper">
      <div class="dis-content">
        <div class="container showMessage">
          <head-content>
            <div slot="showMessage">
              <div class="row">
                <div class="col-md-4 addmessage">
                  <h2>简单易用的编辑体验</h2>
                  <p>无需任何编程或设计基础，所有任务都可在屏幕上一并搞定</p>
                </div>
                <div class="col-md-4">
                  <img
                    class="responsive-demo-image"
                    src="https://static-assets.sxlcdn.com/images/landing-sxl/main-site-demo-imac-sxl-2x-min.png"
                  />
                </div>
                <div class="col-md-4">
                  <h2>自动适配多终端尺寸屏幕</h2>
                  <p>上线了的响应式网站设计，能自动优化网站在电脑、平板、手机上的浏览效果</p>
                </div>
              </div>
              <div class="dis-start">
                <h2>开始创建你的网站吧</h2>
              </div>
            </div>
          </head-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headContent from "../../../Home/child/section/child/headContent";
export default {
  components: {
    headContent,
  },
};
</script>

<style scoped>
#disFooter {
  margin-top: 10%;
}
.dis-wrapper {
  position: relative;
  height: 1200px;
  background-color: #614589;
  overflow: hidden;
}
.dis-content {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-image: url(https://static-assets.sxlcdn.com/images/fadebg.png);
  background-size: cover;
}
.responsive-demo-image {
  max-width: 100%;
}
.showMessage {
  margin-top: 50px;
  color: #fff;
  /* text-align: center; */
}
.dis-start {
  text-align: center;
  margin: 30px 0;
}
.addmessage {
  /* margin: 100px 0; */
}
</style>