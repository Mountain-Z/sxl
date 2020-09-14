<template>
  <div id="HomeAside">
    <div class="container">
      <hr />
      <div class="row">
        <div class="aside-wrapper">
          <h2>十分钟实现你的互联网+</h2>
          <p>上线，从未如此简单</p>
        </div>
      </div>

      <div class="row">
        <div class="row">
          <div class="col-md-5">
            <div class="desc-wrapper">
              <div>
                <div class="small-title">网站</div>
                <h2>美观强大的响应式网站</h2>
                <span>
                  无需任何编程或设计基础
                  <br />所有任务都可在屏幕上一并搞定
                  <br />轻击开始编辑，网站一键发布
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-7 demo-image_1">
            <img
              class="lazy lazyloaded"
              data-original="https://static-assets.sxlcdn.com/images/landing-sxl/feature-site.png"
              alt="简单易用的编辑体验"
              style="height: auto; display: inline; max-height: 450px;"
              src="https://static-assets.sxlcdn.com/images/landing-sxl/feature-site.png"
            />
          </div>
        </div>

        <div class="row" style="margin-bottom:0;">
          <div class="col-md-7">
            <img
              class="lazy lazyloaded"
              data-original="https://static-assets.sxlcdn.com/images/landing-sxl/feature-wmp.png"
              alt="智能适配任何尺寸屏幕"
              style="height: auto; display: inline; max-height: 400px;"
              src="https://static-assets.sxlcdn.com/images/landing-sxl/feature-wmp.png"
            />
          </div>
          <div class="col-md-5">
            <div class="desc-wrapper">
              <div>
                <div class="small-title">微信小程序</div>
                <h2>体验超预期，拥抱微信生态</h2>
                <p class="big">
                  一种全新的连接用户与服务的方式，
                  <br />能够在微信内被便捷地获取、传播，
                  <br />同时具有出众的使用体验。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-5">
            <div class="desc-wrapper">
              <div>
                <div class="small-title">电商</div>
                <h2>轻松在线售卖你的商品</h2>
                <p class="big">
                  绑定支付宝或微信，即可开始线上销售。
                  <br />无论您是单个商品还是上百个商品，都可以
                  <br />轻松实现线上交易。
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <img
              class="lazy lazyloaded"
              data-original="https://static-assets.sxlcdn.com/images/landing-sxl/feature-ecommerce.png"
              alt="简单易用的编辑体验"
              style="height: auto; display: inline; max-height: 450px;"
              src="https://static-assets.sxlcdn.com/images/landing-sxl/feature-ecommerce.png"
            />
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="doc">
        <ul class="row">
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-user"></span>
              </div>
              <div class="col-md-11">
                <h3>专属域名</h3>
                <p>绑定自己的域名，建立品牌形象</p>
              </div>
            </div>
          </li>
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-gift"></span>
              </div>
              <div class="col-md-11">
                <h3>简易商店</h3>
                <p>完善的电子商务功能，不收交易佣金，支持支付宝、微信支付方式</p>
              </div>
            </div>
          </li>
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-edit"></span>
              </div>
              <div class="col-md-11">
                <h3>撰写文章</h3>
                <p>简约设计，方便管理，让你的访客及时了解网站动态资讯，每篇文章都拥有专属页面</p>
              </div>
            </div>
          </li>
        </ul>
        <ul class="row">
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-equalizer"></span>
              </div>
              <div class="col-md-11">
                <h3>数据分析</h3>
                <p>网站内设有浏览量数据监测，简易图表助你时刻掌握流量动向</p>
              </div>
            </div>
          </li>
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-info-sign"></span>
              </div>
              <div class="col-md-11">
                <h3>注册与留言功能</h3>
                <p>迅速收集用户反馈，方便访客注册申请，和你的用户时刻保持联系</p>
              </div>
            </div>
          </li>
          <li class="col-md-4">
            <div class="row">
              <div class="col-md-1">
                <span class="glyphicon glyphicon-blackboard"></span>
              </div>
              <div class="col-md-11">
                <h3>第三方服务集成</h3>
                <p>与微信公众号深度集成，并提供第三方服务如百度地图、金数据表单等</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#HomeAside {
  margin-top: 100px;
}

.aside-wrapper {
  text-align: center;
}
.aside-wrapper h2 {
  color: #536682;
  font-weight: bolder;
}
.aside-wrapper p {
  font-size: 1.4rem;
  color: grey;
}
.desc-wrapper {
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  height: 379px;
}
.small-title {
  font-size: 2rem;
  color: #8867ba;
  font-weight: bold;
}
.desc-wrapper h2 {
  color: #536682;
}
.desc-wrapper span {
  color: #636972;
  line-height: 1.8;
}
.line {
  margin: 10px auto 40px;
  height: 0.5px;
  width: 1000px;
  background-color: rgba(0, 0, 0, 0.3);
}
.doc h3 {
  color: #444;
}
.doc span {
  font-size: 2rem;
  color: #8c97a0;
  line-height: 70px;
}
.doc p {
  color: #636972;
}
</style>