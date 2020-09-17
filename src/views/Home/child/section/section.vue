<template>
  <div id="section">
    <div class="wrapper">
      <div class="wrapperColor">
        <div class="container">
          <div class="row">
            <head-content>
              <div slot="showAd">
                <div class="ad hidden-xs">
                  <span class="glyphicon glyphicon-user"></span>
                  <span>
                    【新品发布】超级云名片小程序，超级销售的新商务标配。
                    <a href="#">了解详情</a>
                  </span>
                </div>
              </div>
              <div slot="showbrand">
                <show-brand />
              </div>
            </head-content>
          </div>
        </div>
        <div class="scrollG-wrapper">
          <div class="scrollG">
            <img src="../../../../assets/image/scroll.gif" alt />
          </div>
        </div>
        <div class="wrapperBottom">
          <img src="../../../../assets/image/bottom.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headContent from "./child/headContent.vue";
import showBrand from "./child/showBrand.vue";
export default {
  components: {
    headContent,
    showBrand,
  },
};
</script>

<style scoped>
.wrapper {
  height: 694px;
  background-image: url(https://static-assets.sxlcdn.com/images/landing4/spread.jpg);
}
.wrapperColor {
  position: relative;
  height: 694px;
  background-color: rgba(132, 91, 185, 0.92);
  overflow: hidden;
}

.head {
  margin: 0 auto;
  width: 800px;
  border: 1px solid black;
}
.wrapperBottom {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 0;
  right: 0;
  left: 0px;
  height: 150px;
}
.wrapperBottom img {
  width: 100%;
  height: 100%;
}
.scrollG-wrapper {
  margin-top: 5%;
  margin-left: 4%;
  text-align: center;
}
.scrollG {
  display: inline-block;
  width: 38px;
  height: 67px;
}
.scrollG img {
  width: 50%;
  height: 50%;
}
</style>