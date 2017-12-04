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

      <!-- This is an anchor toggling the modal -->
      <a href="#modal-example" uk-toggle class="about">SOBRE</a>
      <!-- This is the modal -->
      <div id="modal-example" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Titulo</h2>
          <p>Dados preeenchidos no cadastro</p>
          <p class="uk-text-right">
            <button class="uk-button uk-button-default uk-modal-close" type="button">Fechar</button>
          </p>
        </div>
      </div>

      <div id="modal-exa" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
          <h2 class="uk-modal-title">Título do projeto</h2>
          <p>Sobre o projeto, dados preenchidos no cadastro do projeto</p>
          <p class="uk-text-right">
            <router-link :to="{ name: 'GeneralData'}">
              <button class="uk-button uk-button-primary uk-modal-close" type="button">Doar</button>
            </router-link>
            <button class="uk-button uk-button-default uk-modal-close" type="button">Fechar</button>
          </p>
        </div>
      </div>

      <div class="slider">
        <a href="#modal-exa" uk-toggle class="hover">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <h6 class="more-about"> Ver Mais</h6>
          <img src="../../../static/img/project0.jpg" alt="">
        </a>
        <!-- <div href="">
          <h3 class="project-name uk-text-uppercase uk-text-small">Projeto 1</h3>
          <img src="../../../static/img/project0.jpg" alt="">
        </d>
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
        </a> -->
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

.hover:hover
  .more-about
    opacity 1

  &::before 
    background rgba(105, 105, 105, 0.8)

.uk-button-primary
  background-color #4ed2b2

.project-name
  position absolute
  padding 10px
  color #fff

.more-about
  position absolute
  font-size 32px
  font-weight 200
  left 50%
  top 50%
  transform translate3d(-50%, -50%, 0)
  margin 0
  opacity 0
  transition .5s ease-in-out
  color #fff

.link-modal
  position relative
  bottom 0
  z-index 1000

.icon-plus
  display inline-block
  vertical-align middle

.about
  font-weight 800
  color #4ed2b2
  letter-spacing 1px
  border-bottom 1px solid #4ed2b2
</style>
