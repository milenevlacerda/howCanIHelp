<template>
  <div class="hello">
   <div class="wrapp">
    <h2 class="title"> Login </h2>

    <div class="weather-image-wrapper">
      <img src="../../assets/images/unlocked.svg" alt="Login" class="account-image">
    </div>

    <form class="wrapp-form" v-model="valid" ref="form" lazy-validation>
      <v-text-field
        class="color size"
        v-model="email"
        label="E-mail"
        :rules="emailRules"
        data-vv-name="email"
        required>
      </v-text-field>
      <v-text-field
        class="color size"
        type="password"
        v-model="pass"
        label="Senha"
        data-vv-name="pass"
        required>
      </v-text-field>

      <router-link :to="{ name: 'Timeline' }">
        <v-btn class="btn-color submitBtn" @click="submit">Entrar</v-btn>
      </router-link>
    </form>
  </div>
  </div>
</template>
<script>
export default {
  name: 'signUp',

  data: () => ({
    valid: true,
    pass: '',
    name: '',
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => (v && v.length <= 10) || 'Nome deve ter menos de 10 caracteres'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) ||
        'E-mail deve ser válido'
    ],
    phone: '',
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: null
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   phone: this.phone,
        //   checkbox: this.checkbox
        // });
      }
    },

    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapp-form
  width 90%
  margin 30px auto

.wrapp 
  position relative
  height 100vh
  padding 80px 25px;
  font-family 'Dosis', sans-serif

.submitBtn
  color #fff
  margin-top 80px
  padding-left: 2.75em
  padding-right: 2.75em
  transition: background-color .3s ease
  background-color #36d1b2
  border 2px solid #36d1b2
  height 50px
  width: 80%;
  max-width 300px
  border-radius: 2px;
  bottom 15px
  font-size 1.25rem
  font-family: 'Dosis', sans-serif;

.submitBtn:active, .submitBtn:hover
  background-color #60bfac
  border-color #60bfac

.account-image 
  width: 100px

.title
  font-size 40px !important
  color #fff
  margin: 5px 0 59px

.hello
  position: relative
  min-height: 650px
  background: url('../../../static/img/bg-hello-page.jpg')
  background-position: center;
  background-size: cover

.hello::before
  content: ''
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  opacity: 0.6;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%)


.color, .size
  caret-color #fff !important
  color #fff !important
  font-size 20px !important

.input-group--text-field label
  font-size 22px !important

.input-group.input-group--error .input-group__messages
 font-size 16px

.input-group.input-group--error .input-group__details:before
  opacity 1
</style>
