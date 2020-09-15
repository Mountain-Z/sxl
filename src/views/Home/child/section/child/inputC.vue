<template>
  <div class="input-group">
    <div class="input-group-btn">
      <button
        style="height:44px"
        type="button"
        class="btn btn-default dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        +86
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a href="#">中国大陆 (+86)</a>
        </li>
        <li>
          <a href="#">中国香港 (+852)</a>
        </li>
        <li>
          <a href="#">中国澳门 (+853)</a>
        </li>

        <li>
          <a href="#">中国台湾 (+886)</a>
        </li>
        <li>
          <a href="#">日本 (+81)</a>
        </li>
        <li>
          <a href="#">美国 (+1)</a>
        </li>
        <li>
          <a href="#">印度 (+91)</a>
        </li>
        <li>
          <a href="#">加拿大 (+1)</a>
        </li>
      </ul>
    </div>
    <!-- /btn-group -->
    <input
      type="text"
      style="height:44px"
      class="form-control"
      aria-label="..."
      placeholder="请输入手机号"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>