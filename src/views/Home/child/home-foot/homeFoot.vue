<template>
  <div id="homeFoot">
    <div class="wrapper">
      <div class="wrapperColor">
        <head-content>
          <div slot="otherInfo">
            <foot-info />
          </div>
        </head-content>
      </div>
    </div>
  </div>
</template>

<script>
import headContent from "../section/child/headContent";
import footInfo from "./child/footInfo";
export default {
  components: {
    headContent,
    footInfo,
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #homeFoot .wrapper {
    height: 1100px;
  }
  #homeFoot .wrapperColor {
    height: 1100px;
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
</style>