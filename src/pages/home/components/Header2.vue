<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <span class="iconfont arrow-icon">&#xe600;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header2'
}
</script>
<style lang="stylus" scoped>
.header
  line-height :.86rem
  height :.86rem
  background-color #00bcd4
  color :#fff
  display :flex
  .header-left
    width: .64rem
    float :left
    .back-icon
      text-align :center
      font-size :.4rem
    //text-align center
  .header-input
    flex :1
    background-color #fff
    margin: .12rem .12rem
    border-radius :.1rem
    line-height :.64rem
    height :.64rem
    color: #ccc
    padding-left :.2rem
  .header-right
    width :1.24rem
    float :right
    text-align :center
    .arrow-icon
      font-size :.24rem
      margin-left :-.04rem

</style>
