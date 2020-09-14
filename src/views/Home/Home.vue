<template>
  <div id="Home">
    <sect />
    <modle />
    <home-aside />
  </div>
</template>

<script>
import sect from "./child/section/section";
import modle from "./child/modle/modle";
import homeAside from "./child/aside/homeAside";
export default {
  data() {
    return {};
  },
  components: {
    sect,
    modle,
    homeAside,
  },
};
</script>

<style>
</style>