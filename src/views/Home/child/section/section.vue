<template>
  <div id="section">
    <section>
      <div class="container">
        <div class="row">
          <div class="wrapper">
            <div class="wrapperColor">
              <head-content />
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
      </div>
    </section>
  </div>
</template>

<script>
import headContent from "./child/headContent.vue";
export default {
  components: {
    headContent,
  },
};
</script>

<style scoped>
@media screen and (min-width: 1200px) {
  #section .container {
    width: auto;
  }
}

.wrapper {
  width: auto;
  height: 694px;
  background-image: url(https://static-assets.sxlcdn.com/images/landing4/spread.jpg);
}
.wrapperColor {
  position: relative;
  width: auto;
  height: 694px;
  background-color: rgba(132, 91, 185, 0.92);
  overflow: hidden;
}
.ad {
  background-color: #fff;
}
.head {
  margin: 0 auto;
  width: 800px;
  border: 1px solid black;
}
.wrapperBottom {
  position: absolute;
  bottom: 0;
  height: 100px;
}
.wrapperBottom img {
  width: 100%;
  height: 100%;
}
.scrollG-wrapper {
  margin-top: 80px;
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