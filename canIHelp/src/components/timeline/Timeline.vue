<template>
  <div>
    <vulma-navbar class="navbar" show-menu-button='true' @menu-clicked='$refs.drawer.open()'>
      <vulma-navitem slot='left' :is-tab='false'>
        <img class="logo" src="../../../static/img/care.png">
      </vulma-navitem>
      <vulma-navitem class="title" slot='center'>
        <h3 class="page-title">{{ title }}</h3>
      </vulma-navitem>
    </vulma-navbar>
    <vulma-drawer ref='drawer'>
      <vulma-drawerheader name='Milene ' email='milenelacerda@icloud.com ' avatar='' color='custom-hulk '></vulma-drawerheader>
      <vulma-menu>

        <vulma-menuitem icon='fa-user'>{{ profileTile }}</vulma-menuitem>
        <vulma-menugroup :title="configTitle">
          <vulma-menuitem>{{ accountTitle }}</vulma-menuitem>
          <vulma-menuitem>{{ paymentTitle }}</vulma-menuitem>
          <vulma-menuitem>{{ projectsTitle }}</vulma-menuitem>
        </vulma-menugroup>

      </vulma-menu>
    </vulma-drawer>

    <div class="wrapper">
      
      <div class="tabs is-centered is-boxed">
        <ul>
          <li class="is-active">
            <a>
              <span>{{ filters.all }}</span>
            </a>
          </li>
          <li>
            <a>
              <span>{{ filters.animals }}</span>
            </a>
          </li>
        </ul>
      </div>
      

      <div class="wrapper-card">
        <div v-for="project in projects" :key="project.id" class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="'./static/img/' + project.image" alt="Image">
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
                <p class="title is-4">{{ project.title }}</p>
                <p class="subtitle is-6">@projeto</p>
              </div>
            </div>
        
            <div class="content">
              
              {{ project.description }}

              <a>@projeto</a>.
              <a>#categoria</a>
              <a>#categoria</a>
              <br>
              <small>09:09 AM - 25 Agosto 2017</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { bulmaComponentGenerator } from 'vue-bulma-components'
import { listProjects } from '../../services/projects/ProjectService'

export default {
  name: 'timeline',

  components: {
    box: bulmaComponentGenerator('box')
  },

  data () {
    return {
      projects: [],
      title: 'Projetos',
      profileTile: 'Perfil',
      configTitle: 'Configurações',
      accountTitle: 'Conta',
      paymentTitle: 'Pagamento',
      projectsTitle: 'Projetos',
      filters: {
        all: 'all',
        animals: 'animals'
      }
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
.bgcolor-custom-hulk 
  color: white
  background-color: #00d1b2
  
.navbar
  background-color: #00d1b2 !important
  min-height: 4.25rem !important

.wrapper
  margin: 0 auto
  padding: 90px 20px 20px

.wrapper-card
  max-width: 450px
  padding-top: 20px
  margin: 0 auto 10px
  
.menu-button[data-v-9d073fb2]
  transition: .4s ease

.page-title 
  font-size: 30px
  color: #fff
  cursor: default
  font-family: 'Pacifico', cursive

.card 
  margin-bottom: 40px;  
</style>

