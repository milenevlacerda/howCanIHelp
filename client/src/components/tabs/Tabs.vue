<template>
  <div class="aligner">
    
    <ul uk-tab class="uk-flex-center">
      <li><a href="#">{{ account }}</a></li>
      <li><a href="#">{{ card }}</a></li>
    </ul>

    <ul class="uk-switcher uk-margin">
      <li>
        <form>
          <fieldset class="uk-fieldset">
              <legend class="uk-legend">Dados Pessoais</legend>

              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="name">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="email">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="address">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="number" :placeholder="number">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="neighborhood">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="number" :placeholder="cep">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="city">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" :placeholder="phone">
              </div>
          </fieldset>

          <button class="uk-button uk-button-primary uk-width-1-2 uk-margin-small-bottom">Salvar</button>
        </form>
      </li>
      <li>
        <form v-on:submit.prevent="cadastrar(donation)">
          <fieldset class="uk-fieldset">
              <legend class="uk-legend">Cartão</legend>

              <div class="uk-margin">
                  <input class="uk-input" type="number" placeholder="Número do Cartão">
              </div>
              <div class="uk-margin">
                  <input uk-icon="icon: user" class="uk-input" type="text" placeholder="Nome no cartão">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="date" placeholder="Data de vencimento">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" type="text" placeholder="CVV">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" v-model="donation.idProjeto" type="text" placeholder="Projeto">
              </div>
              <div class="uk-margin">
                  <input class="uk-input" v-model="donation.valor" type="number" placeholder="R$ Valor">
              </div>
              <div class="uk-margin">
                <div class="info-wrapp">
                  <p class="uk-text-small">Tipo de doação</p>
                  <label class="space"><input class="uk-radio" v-model="donation.tipo" value="manual" type="radio" name="radio2" checked>Manual</label>
                  <label class="space"><input class="uk-radio" v-model="donation.tipo" value="mensal" type="radio" name="radio2">Mensal</label>
                  <label class="space"><input class="uk-radio" v-model="donation.tipo" value="anual" type="radio" name="radio2">Anual</label>
                </div>
              </div>
          </fieldset>
          <button class="uk-button uk-button-primary uk-width-1-2 uk-margin-small-bottom" type="submit">Salvar</button>
        </form>
      </li>
    </ul>
    
  </div>
</template>
<script>
import { createDonation } from '../../services/donation/DonationService'

export default {
  name: 'Tabs',

  props: {
    index: 0,
    center: true,
    nomeDoProjeto: ''
  },

  data () {
    return {
      account: 'Dados de Cadastro',
      card: 'Método de Pagamento',
      name: 'Milene',
      email: 'milenelacerda@icloud.com',
      phone: '(51) 9-9921-1951',
      address: 'Dona Augusta',
      neighborhood: 'centro',
      city: 'Charqueadas',
      number: '202',
      cep: '96745-000',
      pass: '',
      donation: {
        tipo: '',
        valor: '',
        idProjeto: ''
      }
    }
  },

  methods: {
    cadastrar (donation) {
      createDonation(donation).then(res => {
        // console.log(res)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.aligner
  width 90%
  position relative
  margin 0 auto
  text-align center
  top 70px
  padding 30px 0

.uk-input 
  width 80%
  border-radius 5px

.uk-legend 
  margin 20px 0

.uk-fieldset
  margin 40px 0

.uk-button-primary
  background-color #36d1b2
  font-weight 600
  letter-spacing 1px

  &:hover
    background-color #36d1b3

.uk-width-1-2
  width 80%

.alignment
  text-align center
  width 80%

.uk-radio 
  margin-right 8px

.space
  margin-right 20px

.info-wrapp
  width 80%
  margin 0 auto
  text-align left
</style>

