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
      <vulma-menu v-if="tipoUser == 'user'">
        <vulma-menuitem icon="fa-home">
            <router-link class="link-inline" :to="{ name: 'Timeline' }">
              {{ timelineTitle }}
            </router-link>  
        </vulma-menuitem>

        <vulma-menuitem icon='fa-user'>
          <router-link :to="{ name: 'Profile' }">
            {{ profileTitle }}
          </router-link>
        </vulma-menuitem>

        <vulma-menuitem icon="fa-cog">
          <router-link :to="{ name: 'GeneralData' }">
            {{ configTitle }}
          </router-link>  
        </vulma-menuitem>

        <vulma-menuitem icon="fa-clock-o">
          <router-link :to="{ name: 'DonationHistory' }">
            {{ donationHistory }}
          </router-link>
        </vulma-menuitem>

      </vulma-menu>

      <vulma-menu v-if="tipoUser == 'ngo'">
        <vulma-menuitem icon="fa-home">
            <router-link class="link-inline" :to="{ name: 'Timeline' }">
              {{ timelineTitle }}
            </router-link>  
        </vulma-menuitem>

        <vulma-menuitem icon='fa-user'>
          <router-link :to="{ name: 'Profile' }">
            {{ profileTitle }}
          </router-link>
        </vulma-menuitem>

        <vulma-menuitem icon="fa-cog">
          <router-link :to="{ name: 'GeneralData' }">
            {{ configTitle }}
          </router-link>  
        </vulma-menuitem>

        <vulma-menuitem icon="fa-plus">
          <router-link :to="{ name: 'CreateProject' }">
            {{ createProjectTitle }}
          </router-link>
        </vulma-menuitem>

        <vulma-menuitem icon="fa-bar-chart">
          <router-link :to="{ name: 'DonationData' }">
            {{ projectsDataTitle }}
          </router-link>
        </vulma-menuitem>

        <vulma-menuitem icon="fa-money">
          <router-link :to="{ name: 'Investments' }">
            {{ investments }}
          </router-link>
        </vulma-menuitem>
  
      </vulma-menu>

    </vulma-drawer>
  </div>  
</template>
<script>
export default {
  name: 'menu',

  props: [ 'title' ],

  data () {
    return {
      tipoUser: '',
      projects: [],
      timelineTitle: 'Home',
      profileTitle: 'Perfil',
      configTitle: 'Configurações',
      investments: 'Investimentos',
      createProjectTitle: 'Criar novo projeto',
      projectsDataTitle: 'Dados de Doações',
      donationHistory: 'Histórico de Doações'
    }
  },

  mounted () {
    // this.fetchProjects()
    this.$data.tipoUser = window.localStorage.getItem('tipo')
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

.menu-button[data-v-9d073fb2]
  transition: .4s ease

.page-title 
  font-size: 30px
  color: #fff
  cursor: default
  font-family: 'Pacifico', cursive
  
.title 
  text-decoration none !important

.link-inline
  display inline-block

.menu
  text-align left 
  width 100%

.menu-list 
  width 100%

  a
    display inline-block
  
.icon 
  display inline-block
</style>
