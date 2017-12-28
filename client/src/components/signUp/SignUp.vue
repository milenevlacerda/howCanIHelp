<template>
  <div class="hello">
   <div class="wrapp">
      <h2 class="title">Cadastro</h2>

      <div class="weather-image-wrapper">
        <img src="../../assets/images/account.svg" alt="Login" class="account-image">
      </div>

      <form-wizard @on-complete="submit(usuario)" shape="tab" color="#03C9A9">
        <tab-content title="Informações Pessoais"
                      icon="el-icon-info">
          <div class="uk-margin">
            <label class="uk-form-label" for="name">{{ name }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.dados_usuario.nome" name="nome" id="name" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="mail">{{ email }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.dados_usuario.email" name="email" id="mail" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="phone">{{ phone }}</label>
            <input class="uk-input uk-form-width-medium" name="telefone" v-model="usuario.dados_usuario.telefone" id="phone" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="senha">{{ pass }}</label>
            <input class="uk-input uk-form-width-medium" name="senha" v-model="usuario.dados_usuario.senha" id="senha" type="password" placeholder="" required>
          </div>
        </tab-content>
        <tab-content title="Informações de Endereço"
                      icon="el-icon-setting" >
          <div class="uk-margin">
            <label class="uk-form-label" for="cep">{{ cep }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.cep"  name="cep" id="cep" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="street">{{ street }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.rua" name="rua" id="street" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="number">{{ number }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.numero" name="numero" id="number" type="number" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="neighborhood">{{ neighborhood }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.bairro" name="bairro" id="neighborhood" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="city">{{ city }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.cidade" name="cidade" id="city" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="state">{{ state }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.endereco.estado" name="estado" id="state" type="text" placeholder="" required>
          </div>
        </tab-content>
        <tab-content title="Cartão"
                      icon="el-icon-check">
          <div class="uk-margin">
            <label class="uk-form-label" for="numCartao">{{ numCartao }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.cartao_credito.numeroCartao" name="numCartao" id="numCartao" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="nomeCartao">{{ nomeCartao }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.cartao_credito.nome" name="nomeCartao" id="nomeCartao" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="cvv">{{ cvv }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.cartao_credito.cvv" name="cvv" id="cvv" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="date">{{ vencDate }}</label>
            <input class="uk-input uk-form-width-medium" v-model="usuario.cartao_credito.vencimento" name="date" id="date" type="date" placeholder="" required>
          </div>

        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import { createUser } from '../../services/user/UserService'
// import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignUp',

  data () {
    return {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      pass: 'Senha',
      cep: 'CEP',
      street: 'Rua',
      number: 'Número',
      neighborhood: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
      numCartao: 'Número Cartão',
      nomeCartao: 'Nome no Cartão',
      cvv: 'CVV',
      vencDate: 'Data de vencimento',
      usuario: {
        dados_usuario: {
          nome: '',
          email: '',
          senha: '',
          telefone: ''
        },
        endereco: {
          cep: '',
          rua: '',
          numero: '',
          bairro: '',
          cidade: '',
          estado: ''
        },
        cartao_credito: {
          numeroCartao: '',
          nome: '',
          vencimento: '',
          cvv: ''
        }
      }
    }
  },

  methods: {
    cadastrar (usuario) {
      createUser(usuario).then(res => {
        if (res.contaId) {
          router.push({ path: '/signIn' })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapp-form
  width 90%
  margin 30px auto
  text-align left 

.centered 
  margin 80px auto 0px
  padding-bottom 20px
  text-align center

.wrapp 
  position relative
  opacity 0.9
  background #fff
  padding-top 30px
  font-family 'Dosis', sans-serif

.submitBtn
  color #fff
  text-align inherit 
  padding-left: 2.75em
  padding-right: 2.75em
  transition: background-color .3s ease
  background-color #36d1b2 !important
  border 2px solid #36d1b2
  height 50px
  width: 80%;
  max-width 300px
  border-radius 2px
  font-size 1.25rem
  font-family 'Dosis', sans-serif

.clear 
  padding-left 2.75em
  padding-right 2.75em
  height 50px
  width 80%
  max-width 300px
  border-radius 2px
  font-size 1.25rem
  background #d6d6d6

.submitBtn,
.clear 
  display inline-block
  vertical-align middle

.submitBtn:active, .submitBtn:hover
  background-color #60bfac
  border-color #60bfac

.account-image 
  width: 100px

.title
  font-size 50px !important
  color #36d1b2
  font-weight 200
  margin: 5px 0 59px

.hello
  position relative
  min-height 100vh
  padding 20px
  background url('../../../static/img/bg-hello-page.jpg')
  background-position center
  background-size cover

.hello::before
  content ''
  position absolute
  width 100%
  height 100%
  top 0
  left 0
  opacity 0.6
  background-image linear-gradient(to right, #fa709a 0%, #fee140 100%)

.color
  margin-top 60px
  font-size 20px
  caret-color #fff !important
  color #fff !important
  font-size 20px !important 

input 
  border-radius 5px
  width 100%

.uk-form-label
  display block
  font-size 15px
  color #36c29d
</style>
