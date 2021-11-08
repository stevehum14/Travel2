<template>
  <div>
    <div class="banner" @click="handleBannerClick" >
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
    <common-gallery :imgs="gallaryImgs" v-show="showGallery" @galleryClose="galleryClose"></common-gallery>
    </fade-animation>
  </div>

</template>
<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallery: false
      //  imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png']
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    galleryClose () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      margin-top .14rem
      padding 0 .4rem
      line-height .32rem
      border-radius .2rem
      font-size .24rem
      background rgba(0,0,0,.8)
      .banner-icon
        font-size .24rem
</style>
