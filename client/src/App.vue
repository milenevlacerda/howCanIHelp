<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
body
  margin 0

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  font-weight 400
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

a
  text-decoration none !important

main
  text-align center

header
  margin 0
  height 56px
  padding 0 16px 0 24px
  background-color #00d1b2
  color #fff

header span
  display block
  position relative
  font-size 20px
  line-height 1
  letter-spacing .02em
  font-weight 400
  box-sizing border-box
  padding-top 16px
</style>
