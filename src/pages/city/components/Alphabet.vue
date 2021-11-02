<template>
  <ul class="list">
    <li class="item" v-for="letter of letters" :key="letter">{{ letter }}</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width .4rem
  //background red
  .item
    line-height .4rem
    text-align center
    color $bgColor
</style>
