<template>
  <div class="hello">
    <div class="wrapp">
      <h2 class="title">Login </h2>
      <div class="weather-image-wrapper">
        <img src="../../assets/images/user.svg" alt="Login" class="account-image">
      </div>
      <form-wizard @on-complete="submit(dadosUsuario)" shape="tab" ref="form" color="#03C9A9">
        <tab-content title="Dados de Login"
                      icon="el-icon-info">

          <div class="uk-margin">
            <label class="uk-form-label" for="mail">{{ email }}</label>
            <input class="uk-input uk-form-width-medium" v-model="dadosUsuario.email" name="email" id="mail" type="text" placeholder="" required>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="senha">{{ pass }}</label>
            <input class="uk-input uk-form-width-medium" name="senha" v-model="dadosUsuario.password" id="senha" type="password" placeholder="" required>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
// import router from '../../router'
import { consultUser } from '../../services/user/UserService'

export default {
  name: 'SignIn',

  data () {
    return {
      email: 'Email',
      pass: 'Senha',
      valid: true,
      dadosUsuario: {
        password: '',
        email: ''
      },
      passRules: [
        (v) => !!v || 'Senha é obrigatório'
      ],
      emailRules: [
        (v) => !!v || 'E-mail é obrigatório',
        (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'
      ]
    }
  },

  methods: {
    submit (dadosUsuario) {
      consultUser(dadosUsuario).then(res => {
        // console.log(res)
        // router.push({ path: '/timeline' })
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
