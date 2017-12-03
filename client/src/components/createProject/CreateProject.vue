<template>
  <div>
    <menu-component :title="title"></menu-component>

    <div class="wrapper">
      <form @submit.prevent="save()">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <input class="uk-input project-title" type="text" placeholder="Título">
            </div>

            <div class="uk-margin">
                <select class="uk-select">
                    <option>Categoria</option>
                    <option>Animal</option>
                    <option>Social</option>
                </select>
            </div>

            <div class="uk-margin file" uk-margin>
              <div uk-form-custom="target: true">
                <input type="file">
                <input class="uk-input uk-form-width-medium" type="text" placeholder="Selecione uma imagem" disabled>
              </div>
            </div>

            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Descrição do projeto"></textarea>
            </div>

            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label class="checks"><input class="uk-checkbox" type="checkbox" checked>Doações financeiras</label>
                <label class="checks"><input class="uk-checkbox" type="checkbox"> Doações de outros recursos</label>
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

export default {
  name: 'CreateProject',

  components: {
    'menu-component': menuComponent
  },

  data () {
    return {
      title: 'Novo Projeto'
    }
  },

  methods: {
    save () {
      console.log('oi')
      // this.service.cadastra(this.foto)
      // .then( ()=> this.foto = new Foto, err => console.log(err) );
    }
  },

  created () {
    console.log('oi')
    // this.service = new FotoService( this.$resource );
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
