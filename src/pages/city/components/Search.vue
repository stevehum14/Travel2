<template>
  <div>
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名称或者拼音">
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    width 100%
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
    padding: 0 .2rem
</style>
