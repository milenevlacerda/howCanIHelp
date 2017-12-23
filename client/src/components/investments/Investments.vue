<template>
  <div>
    <menu-component :title="title"></menu-component>

    <div class="wrapper">
      <form v-on:submit.prevent="cadastrar(investment)">
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <input class="uk-input project-title" v-model="investment.titulo" type="text" name="titulo" placeholder="Título" required>
            </div>

            <div class="uk-margin file" uk-margin>
              <div uk-form-custom="target: true">
                <input type="file" name="img" required>
                <input class="uk-input uk-form-width-medium" type="text" placeholder="Selecione uma imagem" disabled>
              </div>
            </div>

            <div class="uk-margin">
                <input class="uk-input investment-value"  v-model="investment.valor" name="valor" type="number" placeholder="R$ Valor" required>
            </div>

            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" v-model="investment.desc" name="descricao" placeholder="Descrição do investimento" required></textarea>
            </div>      

            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid" required>
                <label class="checks"><input class="uk-radio" v-model="investment.tipoInvestimento" name="tipoFixo" type="radio" value="fixo" checked required>Investimento fixo</label>
                <label class="checks"><input class="uk-radio" v-model="investment.tipoInvestimento" name="tipoNaoFixo" type="radio" value="naoFixo" >Investimento não fixo</label>
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
import { createInvestment } from '../../services/investments/InvestmentsService'

export default {
  name: 'Investments',

  components: {
    'menu-component': menuComponent
  },

  data () {
    return {
      title: 'Investimentos',
      investment: {
        titulo: '',
        img: '',
        valor: '',
        desc: '',
        tipoInvestimento: ''
      }
    }
  },

  methods: {
    cadastrar (investment) {
      createInvestment(investment).then(res => {
        // console.log(res)
      })
    }
  }

  // created () {
  //   console.log('oi')
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

.investment-value
  width 100%

</style>
