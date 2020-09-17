<template>
  <div id="dis-content">
    <div class="container">
      <div class="pos-info">
        <span>当前位置：</span>
        <router-link to="/">首页</router-link>&nbsp;>
        <router-link to="/discover">发现</router-link>
      </div>

      <div class="dis-head">
        <div class="container">
          <h2>选择您喜欢的网站模版</h2>
          <p class="dis-doc">成千上万的个人和组织在这里展示他们的想法和作品，你会如何展示？</p>
          <div class="line"></div>
          <div class="row">
            <div>
              <ul class="tags">
                <li>
                  <span class="tag" data-tag="all">全部</span>
                </li>
                <li>
                  <span class="tag" data-tag="公司企业">公司企业</span>
                </li>
                <li>
                  <span class="tag" data-tag="产品展示">产品展示</span>
                </li>
                <li>
                  <span class="tag" data-tag="初创公司">初创公司</span>
                </li>
                <li>
                  <span class="tag" data-tag="作品展示">作品展示</span>
                </li>
                <li>
                  <span class="tag" data-tag="工作室">工作室</span>
                </li>
                <li>
                  <span class="tag" data-tag="机构组织">机构组织</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <show-products />
            <show-products />
            <show-products />
            <show-products />
            <show-products />
          </div>
          <div class="row"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showProducts from "./common/showProducts";
export default {
  components: {
    showProducts,
  },
};
</script>

<style scoped>
.pos-info,
.pos-info > a {
  font-size: 1.2rem;
  color: rgb(94, 94, 94);
}
.dis-head {
  text-align: center;
  color: rgb(99, 105, 114);
}
.dis-doc {
  margin: 30px 0;
}
.line {
  margin: 10px auto 15px;
  height: 0.5px;
  width: 100px;
  background-color: rgba(94, 94, 94, 0.5);
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.tags > li {
  width: 100px;
  height: 30px;
  margin: 10px 0 0;
  background-color: #bca9d8;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-weight: bold;
}
</style>