<template>
  <div id="showProducts">
    <div class="col-md-6 products-item" data-tags="产品展示">
      <div class="gallery-item">
        <div class="image-container">
          <div class="image-wrapper">
            <div class="image">
              <a
                class="image-overlay"
                data-gallery-url="https://p.sxl.cn/?url=http%3A%2F%2Fwww.thorbadminton.com%2F"
                data-preview-path="/s/sites/template_preview?template=bright-event-demo-v5"
                href="http://www.thorbadminton.com/"
                rel="nofollow"
                target="_blank"
              ></a>
              <img
                alt="索尔羽毛球"
                class="user-image"
                data-src="//uploads.sxlcdn.com/discover/images/thor-badminton.jpg"
                src="//uploads.sxlcdn.com/discover/images/thor-badminton.jpg"
              />
            </div>
          </div>
        </div>
        <div class="info-bar">
          <div class="image-title text">索尔羽毛球</div>

          <a class="link" href="http://www.thorbadminton.com/" rel="nofollow" target="_blank">
            <span>www.thorbadminton.com/</span>
          </a>
          <i>&nbsp;上海</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.products-item {
  margin-top: 40px;
}

.text {
  text-align: center;
}
.image > img {
  width: 100%;
  height: 100%;
}

.image-container {
  background-color: #fff;
  border: 1px solid rgb(226, 226, 226);
}

.image-wrapper {
  padding: 5px;
}
.info-bar,
.link {
  margin-top: 10px;
  color: #727b88;
}
</style>