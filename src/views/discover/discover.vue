<template>
  <div id="discover">
    <nav-bar />
    <discover-content />
    <dis-footer />
  </div>
</template>

<script>
import navBar from "./child/navBar";
import discoverContent from "./child/discoverContent";
import disFooter from "./child/common/disFooter";

export default {
  components: {
    navBar,
    discoverContent,
    disFooter,
  },
};
</script>

<style scoped>
</style>