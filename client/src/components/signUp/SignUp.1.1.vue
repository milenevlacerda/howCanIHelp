<template>
  <div class="hello">
   <div class="wrapp">
    <!-- <v-app id="inspire"> -->
        <h2 class="title"> Cadastro </h2>

      <div class="weather-image-wrapper">
        <img src="../../assets/images/account.svg" alt="Login" class="account-image">
      </div>
      <v-form v-on:submit.prevent="cadastrar(user)" class="wrapp-form" ref="form" lazy-validation>
        <v-text-field
          label="Name"
          name="nome"
          v-model="name"
          :rules="nameRules"
          :counter="10"
          required
        ></v-text-field>
        <v-text-field
          label="E-mail"
          name="email"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>
        <v-text-field
          label="Telefone"
          name="telefone"
          v-model="phone"
          required
        ></v-text-field>
        <v-text-field
          label="Rua"
          name="rua"
          v-model="rua"
          required
        ></v-text-field>
        <v-text-field
          label="Numero"
          name="numero"
          v-model="numero"
          required
        ></v-text-field>
        <v-text-field
          label="Bairro"
          name="bairro"
          v-model="bairro"
          required
        ></v-text-field>
        <v-text-field
          label="Cidade"
          name="cidade"
          v-model="cidade"
          required
        ></v-text-field>
        <v-text-field
          label="Estado"
          name="estado"
          v-model="estado"
          required
        ></v-text-field>
        <v-text-field
          label="CEP"
          name="cep"
          v-model="cep"
          required
        ></v-text-field>
        <v-text-field
          label="Senha"
          name="senha"
          v-model="senha"
          :rules="passRules"
          required
        ></v-text-field>
        
        <div class="centered">
          <v-btn
            class="btn-color submitBtn"
            type="submit"
            :disabled="!valid"
          >
            Cadastrar
          </v-btn>
          <v-btn class="clear" @click="clear">Limpar</v-btn>
        </div>
      </v-form>
    <!-- </v-app> -->
  </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp',

  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Nome é obrigatório',
      (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
    ],
    phone: '',
    phoneRules: [
      (v) => !!v || 'Telefone é obrigatório'
    ],
    pass: '',
    passRules: [
      (v) => !!v || 'Senha é obrigatório',
      (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail é obrigatório',
      (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(v) || 'E-mail deve ser válido'
    ]
  }),

  methods: {
    submit () {
      // if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        // axios.post('/api/submit', {
        //   name: this.name,
        //   email: this.email,
        //   select: this.select,
        //   checkbox: this.checkbox
        // })
      // }
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
</style>
