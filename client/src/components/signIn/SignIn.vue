<template>
  <div class="hello">
    <div class="wrapp">
      <h2 class="title">Login </h2>
      <div class="weather-image-wrapper">
        <img src="../../assets/images/user.svg" alt="Login" class="account-image">
      </div>
      <form-wizard @on-validate="submit(dadosUsuario, isValid)" shape="tab" color="#03C9A9">
        <tab-content title="Dados de Login"
                      icon="el-icon-info" :before-change="()=>validate()">
          
          <div class="help-block form-error" v-if="formError">{{ msg }}</div>
          
          <div class="uk-margin">
            <label class="uk-form-label" for="mail">{{ email }}</label>
            <input class="uk-input uk-form-width-medium form-control" v-model="dadosUsuario.email" @input="$v.dadosUsuario.email.$touch()" name="email" id="mail" type="text" placeholder="" required>
            <span class="help-block" v-if="$v.dadosUsuario.email.$error && !$v.dadosUsuario.email.required">Email é obrigatório</span>
            <span class="help-block" v-if="$v.dadosUsuario.email.$error && !$v.dadosUsuario.email.email">Email deve ser válido</span>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="senha">{{ pass }}</label>
            <input class="uk-input uk-form-width-medium form-control" name="senha" @input="$v.dadosUsuario.senha.$touch()" v-model="dadosUsuario.senha" id="senha" type="password" placeholder="" required>
            <span class="help-block" v-if="$v.dadosUsuario.senha.$error && !$v.dadosUsuario.senha.required">Senha é obrigatório</span>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import router from '../../router'
import { consultUser } from '../../services/user/UserService'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'SignIn',

  data () {
    return {
      email: 'Email',
      pass: 'Senha',
      isValid: '',
      formError: '',
      msg: '',
      dadosUsuario: {
        email: '',
        senha: ''
      }
    }
  },

  validations: {
    dadosUsuario: {
      email: {
        required,
        email
      },
      senha: {
        required
      }
    }
  },

  methods: {
    validate () {
      this.$v.dadosUsuario.$touch()
      this.$data.isValid = !this.$v.dadosUsuario.$invalid
      this.$emit('on-validate', this.$data.dadosUsuario, this.$data.isValid)
      return this.$data.isValid
    },

    submit (dadosUsuario, isValid) {
      if (isValid) {
        consultUser(dadosUsuario).then(res => {
          if (res.token && res.tipo) {
            this.$data.formError = false
            window.localStorage.setItem('token', res.token)
            window.localStorage.setItem('tipo', res.tipo)
            router.push({ path: '/timeline' })
          } else {
            this.$data.formError = true
            this.$data.msg = res.mensagem
          }
        })
      }
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

.form-error
  font-size 18px
  color #F03434
  font-weight 500
  text-align center
</style>
