<template>
  <div class="hello">
   <div class="wrapp">
      <h2 class="title"> Cadastro ONG</h2>

      <div class="weather-image-wrapper">
        <img src="../../assets/images/account.svg" alt="Login" class="account-image">
      </div>

      <form-wizard @on-complete="onComplete" shape="tab" color="#03C9A9">
        <tab-content title="Informações Pessoais"
                      icon="el-icon-info">
          <div class="uk-margin">
            <label class="uk-form-label" for="name">Nome</label>
            <input class="uk-input uk-form-width-medium" id="name" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="mail">Email</label>
            <input class="uk-input uk-form-width-medium" id="mail" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="phone">Telefone</label>
            <input class="uk-input uk-form-width-medium" id="phone" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="date">Data Nascimento</label>
            <input class="uk-input uk-form-width-medium" id="date" type="date" placeholder="">
          </div>
        </tab-content>
        <tab-content title="Informações da ONG"
                      icon="el-icon-setting">
          My second tab content
        </tab-content>
        <tab-content title="Conclusão"
                      icon="el-icon-check">
          Yuhuuu! This seems pretty damn simple
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignUp',

  // components: {
  //   FormWizard,
  //   TabContent
  // },

  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }
        ]
      }
    }
  },

  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    },
    validateFirstStep () {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validate((valid) => {
          resolve(valid)
        })
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
