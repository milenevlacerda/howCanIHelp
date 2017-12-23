<template>
  <div>
    <menu-component :title="title"></menu-component>

    <div class="wrapper">
      <form v-on:submit.prevent="cadastrar(project)">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <input class="uk-input project-title" name="titulo" v-model="project.titulo" type="text" placeholder="Título" required>
            </div>

            <div class="uk-margin">
                <select class="uk-select" name="categoria" v-model="project.categoria" placeholder="Categoria" required>
                    <option value="Animal">Animal</option>
                    <option value="Social">Social</option>
                </select>
            </div>

            <div class="uk-margin file" uk-margin>
              <div uk-form-custom="target: true">
                <input type="file" name="img" required>
                <input class="uk-input uk-form-width-medium" type="text" placeholder="Selecione uma imagem" disabled>
              </div>
            </div>

            <div class="uk-margin">
                <textarea class="uk-textarea" name="descricao" v-model="project.descricao" rows="5" placeholder="Descrição do projeto" required></textarea>
            </div>

            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label class="checks"><input class="uk-radio" id="financeira" v-model="project.tipoDoacao" name="tipoDoacaoFinanceira" type="radio" value="financeira" checked required>Doações financeiras</label>
                <label class="checks"><input class="uk-radio" id="outro" v-model="project.tipoDoacao" name="tipoDoacaoOutro" type="radio" value="outros" required> Doações de outros recursos</label>
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
import { createProject } from '../../services/project/ProjectService'

export default {
  name: 'CreateProject',

  components: {
    'menu-component': menuComponent
  },

  data () {
    return {
      title: 'Novo Projeto',
      project: {
        titulo: '',
        img: '',
        categoria: '',
        descricao: '',
        tipoDoacao: ''
      }
    }
  },

  methods: {
    cadastrar (project) {
      createProject(project).then(res => {
        // console.log(res)
      })
    }
  }

  // created () {
  //   this.service = new ProjectService( this.$resource );
  // }
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
