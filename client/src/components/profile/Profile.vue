<template>
  <div class="body">
    <router-link :to="{ name: 'Timeline' }">
      <div class="fa fa-angle-left icon uk-align-left" aria-hidden="true" ></div>
    </router-link>

    <router-link :to="{ name: 'GeneralData' }">
      <div class="fa fa-cog icon uk-align-right"></div>
    </router-link>

    <div class="wrapper">
      <div class="img">
        <img src="../../assets/images/milene.jpg" alt="">
      </div>
      <h3 class="uk-text-lead">Milene Vieira Lacerda</h3>
      <h6 class="uk-text-meta">Charqueadas, RS</h6>

      <div class="slider">
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project0.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project0.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project1.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project1.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project1.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project1.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project2.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project2.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project3.jpg" alt="">
        </a>
        <a href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project3.jpg" alt="">
        </a>
      </div>
    </div>
  </div>

</template>
<script>
// import Slick from 'vue-slick/slickCarousel'
import $ from 'jquery/dist/jquery'

export default {
  name: 'Profile',

  // components: {
  //   'slick': Slick
  // },

  data () {
    return {
    }
  },

  mounted () {
    $('.slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: true,
      rows: 2
    })
  },

  methods: {
    next () {
      this.$refs.slick.next()
    },

    prev () {
      this.$refs.slick.prev()
    },

    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper 
  max-width 700px
  padding 50px 10px
  margin 0 auto

.body 
  background-color #333
  min-height 100vh

.img 
  width 100px
  height 100px
  border-radius 50px
  overflow hidden
  margin  0 auto

.uk-text-lead
  color #ffffff
  margin 20px 0 0

.uk-text-meta
  margin-top 2px

.icon
  width 40px
  height 40px
  font-size 25px
  color #fff

.project-name
  position absolute
  padding 10px
  color #fff
</style>
