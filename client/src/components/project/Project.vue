<template>
  <div>
    <menu-component :title="title"></menu-component>
    
    <div class="wrapper">
      <div class="wrapper-card">
        <div class="card"> 
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="'./static/img/project0.jpg'" alt="Image">
            </figure>
          </div>   
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="../../../static/img/bg-hello-page.jpg" alt="Image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">Projeto 1</p>
                <p class="subtitle is-6">@projeto</p>
              </div>
            </div>
        
            <div class="content">
              
              Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien.

              <a>@projeto</a>.
              <a>#categoria</a>
              <a>#categoria</a>
              <br>
              <small>09:09 AM - 25 Agosto 2017</small>

              <ul uk-accordion>
                <li>
                  <h3 class="uk-accordion-title item-title">{{ investments }}</h3>
                  <div class="uk-accordion-content">
                      <p>R$ 200,00 - Atividade 1</p>
                      <p>R$ 250,00 - Atividade 2</p>
                      <p>R$ 400,00 - Atividade 3</p>
                      <p>R$ 1000,00 - Atividade 4</p>
                  </div>
                </li>
                <li>
                  <h3 class="uk-accordion-title">{{ donations }}</h3>
                  <div class="uk-accordion-content">
                      <p>20/10 - R$ 100,00</p>
                      <p>20/11 - R$ 100,00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <router-link :to="{ name: '' }">
            <button class="uk-button uk-button-secondary uk-button-large">Ver Perfil da ONG</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { bulmaComponentGenerator } from 'vue-bulma-components'
import { listProjects } from '../../services/projects/ProjectService' // remover após organizar o backend
import menuComponent from '../menu/Menu'

export default {
  name: 'Project',

  components: {
    box: bulmaComponentGenerator('box'),
    'menu-component': menuComponent
  },

  props: {
    imgSrc: '',
    projectTitle: '',
    category: '',
    projectDescription: '',
    postData: ''
  },

  data () {
    return {
      projects: [],
      title: 'Projeto',
      investments: 'Últimos Investimentos da Organização',
      donations: 'Minhas Doações'
    }
  },

  methods: {
    fetchProjects () {
      listProjects()
        .then(data => {
          this.projects = data
        })
    }
  },

  mounted () {
    this.fetchProjects()
  },

  computed: {
    list () {
      return this.projects
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin 0 auto
  padding 90px 20px 20px

.wrapper-card
  max-width 450px
  padding-top 20px
  margin 0 auto 10px

.card 
  margin-bottom 40px

.uk-button-large
  width 100%
  background-color #36d1b2
  font-weight 600
  letter-spacing 1px

ul
  list-style none 
  text-align left 
  padding-top 40px
  font-size 14px

.uk-accordion-title
  font-weight 400
  font-size 1.1em
  color #446CB3
  
</style>

