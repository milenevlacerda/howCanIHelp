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

      <form v-on:submit.prevent="cadastrar(project)">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <input class="uk-input project-title" name="titulo" v-model="project.titulo" type="text" placeholder="Título" required>
            </div>

            <div class="uk-margin">
                <select class="uk-select" name="categoria" v-model="project.categoria" placeholder="Categoria" required>
                    <option selected disabled>Categoria</option>
                    <option value="Animal">Animal</option>
                    <option value="Social">Social</option>
                </select>
            </div>

            <div class="uk-margin file" uk-margin>
                <file-base64 
                  v-bind:done="getFiles"
                  required>
                </file-base64>
            </div>

            <div class="uk-margin">
                <textarea class="uk-textarea" name="descricao" v-model="project.descricao" rows="5" placeholder="Descrição do projeto" required></textarea>
            </div>

            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid" required>
                <label class="checks"><input class="uk-radio" v-model="project.tipoDoacao" name="tipoDoacao" type="radio" value="financeira" checked>Doações financeiras</label>
                <label class="checks"><input class="uk-radio" v-model="project.tipoDoacao" name="tipoDoacao" type="radio" value="outros"> Doações de outros recursos</label>
            </div>
        </fieldset>

        <div class="uk-button-group">
          <button class="uk-button uk-button-primary" type="submit">Criar</button>

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
import { createProject } from '../../services/project/ProjectService'

export default {
  name: 'CreateProject',
  components: {
    'menu-component': menuComponent,
    fileBase64
  },

  data () {
    return {
      title: 'Novo Projeto',
      success: '',
      error: '',
      msgSuccess: 'Projeto Cadastrado com sucesso! :)',
      msgError: 'Ops, houve algum erro :(, tente novamente',
      project: {
        titulo: '',
        categoria: 'Categoria',
        capa: '',
        descricao: '',
        tipoDoacao: 'financeira'
      }
    }
  },

  methods: {
    cadastrar (project) {
      createProject(project).then(res => {
        if (res.projectId) {
          this.$data.success = true
          return
        }
        this.$data.error = true
      })
    },

    getFiles (files) {
      // DESCOMENTAR ISSO DEPOIS QUE O DB FICAR OK P BASE64
      // this.$data.project.capa = files.base64
      this.$data.project.capa = 'asd'
    }
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

</style>
