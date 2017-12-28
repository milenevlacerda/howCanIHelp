<template>
  <div>
    <menu-component :title="title"></menu-component>

    <div class="wrapper">
      <div v-if="success">
        <div class="uk-alert-success" uk-alert>
          <a class="uk-alert-close" uk-close></a>
          <p>{{ msgSuccess }}</p>
        </div>
      </div>

      <div v-if="error">
        <div class="uk-alert-danger" uk-alert>
          <a class="uk-alert-close" uk-close></a>
          <p> {{msgError}} </p>
        </div>
      </div>

      <form v-on:submit.prevent="cadastrar(investment)">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <input class="uk-input project-title" v-model="investment.titulo" type="text" name="titulo" placeholder="Título" required>
            </div>
            
            <div class="uk-margin">
                <select class="uk-select" name="categoria" v-model="investment.projetoId" placeholder="Categoria" required>  
                    <option v-for="project in projects" :key="project.id" :value="project.id">{{ project.titulo }}</option>
                </select>
            </div>

            <div class="uk-margin file" uk-margin>
                <file-base64 
                  v-bind:done="getFiles"
                  required>
                </file-base64>
            </div>

            <div class="uk-margin">
                <input class="uk-input investment-value"  v-model="investment.valor" name="valor" type="number" placeholder="R$ Valor" required>
            </div>

            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" v-model="investment.descricao" name="descricao" placeholder="Descrição do investimento" required></textarea>
            </div>      

            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid" required>
                <label class="checks"><input class="uk-radio" v-model="investment.tipo" name="tipoFixo" type="radio" value="fixo" checked>Investimento fixo</label>
                <label class="checks"><input class="uk-radio" v-model="investment.tipo" name="tipoNaoFixo" type="radio" value="naoFixo" >Investimento não fixo</label>
            </div>
        </fieldset>

        <div class="uk-button-group">
          <button class="uk-button uk-button-primary" type="submit">Cadastrar</button>

          <router-link :to="{ name: 'Timeline'}">
            <button class="uk-button uk-button-default">Voltar</button>
          </router-link>
        </div>

      </form>
    </div>
  </div>
</template>
<script>
import menuComponent from '../menu/Menu'
import fileBase64 from 'vue-file-base64'
import { createInvestment } from '../../services/investments/InvestmentsService'
import { listProjects } from '../../services/project/ProjectService'

export default {
  name: 'Investments',

  components: {
    'menu-component': menuComponent,
    fileBase64
  },

  data () {
    return {
      title: 'Investimentos',
      success: '',
      error: '',
      msgSuccess: 'Projeto Cadastrado com sucesso! :)',
      msgError: 'Ops, houve algum erro :(, tente novamente',
      projects: '',
      investment: {
        titulo: '',
        valor: '',
        capa: '',
        descricao: '',
        tipo: 'fixo',
        projetoId: ''
      }
    }
  },

  methods: {
    cadastrar (investment) {
      createInvestment(investment).then(res => {
        if (res.investmentId) {
          this.$data.success = true
          return
        }
        this.$data.error = true
      })
    },

    getFiles (files) {
      // DESCOMENTAR ISSO DEPOIS QUE O DB FICAR OK P BASE64
      // this.$data.investment.capa = files.base64
      this.$data.investment.capa = 'asd'
    },

    fetchProjects () {
      listProjects().then(res => {
        this.projects = res
      })
    }
  },

  mounted () {
    this.$data.tipo = window.localStorage.getItem('tipo')
    this.fetchProjects()
  }
}
</script>
<style lang="stylus" scoped>
.wrapper 
  max-width 1200px
  padding 90px 20px 20px
  margin 0 auto

.project-title
  font-size 25px
  color #a2a2a2
  font-weight 800

.checks input
  margin-right 10px
  display inline-block
  vertical-align middle

.file
  text-align left 

.uk-button-group
  width 100%
  text-align left 

  button
    margin-right 20px
    font-weight 800
    letter-spacing 1px
    font-size 13px

.uk-button-primary
  background-color #4ed2b2

textarea
  resize none

.investment-value
  width 100%

</style>
