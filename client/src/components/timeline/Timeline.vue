<template>
  <div>
    <menu-component :title="title"></menu-component>

    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <div class="uk-navbar-item">
          <form class="uk-search uk-search-navbar">
            <span uk-search-icon></span>
            <input class="uk-search-input" type="search" placeholder="Procurar Projetos...">
          </form>
        </div>
      </div>
    </nav>

    <div class="wrapper">
      
      <ul uk-tab class="uk-flex-center">
        <li><a href="#">{{ filters.all }}</a></li>
        <li><a href="#">{{ filters.animals }}</a></li>
      </ul>
      
      <ul class="wrapper-card uk-switcher uk-margin">
        <li>
          <div v-for="project in projects" :key="project.idProjeto" class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="'./static/img/' + project.img" alt="Image">
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
                  <p class="title is-4">{{ project.titulo }}</p>
                  <p class="subtitle is-6">@projeto</p>
                </div>
              </div>
          
              <div class="content">
                
                {{ project.descricao }}

                <a>@projeto</a>.
                <a>#categoria</a>
                <a>#categoria</a>
                <br>
                <small>09:09 AM - 25 Agosto 2017</small>
              </div>
            </div>
            <router-link :to="{ name: 'Project' }">
              <button class="uk-button uk-button-secondary uk-button-large">Ver Mais</button>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { bulmaComponentGenerator } from 'vue-bulma-components'
// import { listProjects } from '../../services/projects/ProjectService'
import menuComponent from '../menu/Menu'

export default {
  name: 'Timeline',

  components: {
    box: bulmaComponentGenerator('box'),
    'menu-component': menuComponent
  },

  data () {
    return {
      projects: [],
      title: 'Projetos',
      filters: {
        all: 'all',
        animals: 'animals'
      }
    }
  },

  methods: {
    fetchProjects () {
      // listProjects().then(data => {
        // this.projects = data
      // })
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
  padding 5px 20px 20px
  background-color #f8f8f8

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

.uk-navbar-container
  margin-top 60px
</style>

