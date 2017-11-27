<template>
  <div>
    <menu-component :title="title"></menu-component>
    
    <div class="wrapper">
      
      <ul class="wrapper-card uk-flex uk-flex-center uk-flex-wrap 	uk-text-center" uk-grid>

        <li class="card-item">
          <div class="project-card uk-card uk-card-default uk-card-body">
            <div class="details-wrapper">
              <h3 class="project-title">Project 1</h3>
              <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ducimus.</p>
            </div>
            <div class="project-foto">
              <img :src="'./static/img/project0.jpg'" alt="">
            </div>
          </div>
        </li> 

        <li class="card-item">
          <div class="project-card uk-card uk-card-default uk-card-body">
            <div class="details-wrapper">
              <h3 class="project-title">Project 1</h3>
              <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ducimus.</p>
            </div>
            <div class="project-foto">
              <img :src="'./static/img/project0.jpg'" alt="">
            </div>
          </div>
        </li> 

        <li class="card-item">
          <div class="project-card uk-card uk-card-default uk-card-body">
            <div class="details-wrapper">
              <h3 class="project-title">Project 1</h3>
              <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ducimus.</p>
            </div>
            <div class="project-foto">
              <img :src="'./static/img/project0.jpg'" alt="">
            </div>
          </div>
        </li> 

        <li class="card-item">
          <div class="project-card uk-card uk-card-default uk-card-body">
            <div class="details-wrapper">
              <h3 class="project-title">Project 1</h3>
              <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ducimus.</p>
            </div>
            <div class="project-foto">
              <img :src="'./static/img/project0.jpg'" alt="">
            </div>
          </div>
        </li> 

      </ul>

    </div>

  </div>
</template>
<script>
import menuComponent from '../menu/Menu'

export default {
  name: 'DonationData',

  components: {
    'menu-component': menuComponent
  },

  data () {
    return {
      title: 'Projetos'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin 0 auto
  padding 90px 20px 20px

.wrapper-card
  max-width 1000px
  padding-top 20px
  margin 0 auto 10px

.project-foto
  width 70px
  height 70px
  position absolute
  top 20px
  left -10px
  
  img
    border-radius 3px

.project-description
  margin-top  5px

.project-card
  border-radius 10px
  padding 10px
  position relative

.card-item 
  margin 15px
  display inline-block

.project-title
  font-size 14px
  margin-bottom 0
  font-weight 600
  text-transform uppercase

.details-wrapper
    width 83%
    right 0
    text-align left
    float right
</style>

