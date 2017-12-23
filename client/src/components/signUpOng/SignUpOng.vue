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
            <label class="uk-form-label" for="name">{{ name }}</label>
            <input class="uk-input uk-form-width-medium" name="nome" id="name" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="mail">{{ email }}</label>
            <input class="uk-input uk-form-width-medium" name="email" id="mail" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="phone">{{ phone }}</label>
            <input class="uk-input uk-form-width-medium" name="telefone" id="phone" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="date">{{ dataNasc }}</label>
            <input class="uk-input uk-form-width-medium" name="dataNasc" id="date" type="date" placeholder="">
          </div>
        </tab-content>
        <tab-content title="Informações da ONG"
                      icon="el-icon-setting">
          <div class="uk-margin">
            <label class="uk-form-label" for="townHallRegister">{{ register }}</label>
            <input class="uk-input uk-form-width-medium" name="numRegistroPref" id="townHallRegister" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="stateSubscription">{{ insc }}</label>
            <input class="uk-input uk-form-width-medium" name="numInscEstadual" id="stateSubscription" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="employeesNumber">{{ employeesNumber }}</label>
            <input class="uk-input uk-form-width-medium" name="numFuncionarios" id="employeesNumber" type="text" placeholder="">
          </div>

        </tab-content>
        <tab-content title="Conclusão"
                      icon="el-icon-check">
          <div class="uk-margin">
            <label class="uk-form-label" for="address">{{ address }}</label>
            <input class="uk-input uk-form-width-medium" name="endereco" id="address" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="ongPhone">Telefone</label>
            <input class="uk-input uk-form-width-medium" name="telefoneOng" id="ongPhone" type="text" placeholder="">
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="occupationArea">{{ occupationArea }}</label>
            <select class="uk-select" name="areaAtuacao" id="occupationArea">
                <option :value="assistencia">{{ assistencia }}</option>
                <option :value="cultura">{{ cultura }}</option>
                <option :value="saude">{{ saude }}</option>
                <option :value="ma">{{ ma }}</option>
                <option :value="animal">{{ animal }}</option>
                <option :value="desenvolvimento">{{ desenvolvimento }}</option>
                <option :value="habitacao">{{ habitacao }}</option>
                <option :value="ep">{{ ep }}</option>
            </select>
          </div>

          <div class="uk-margin">
            <label class="uk-form-label" for="type">{{ ongType }}</label>
            <select class="uk-select" name="tipoOng" id="type">
                <option :value="fundacao">{{ fundacao }}</option>
                <option :value="osc">{{ osc }}</option>
                <option :value="cooperativa">{{ cooperativa }}</option>
                <option :value="oscip">{{ oscip }}</option>
                <option :value="os">{{ os}}</option>
                <option :value="institutoEmp">{{ institutoEmp }}</option>
                <option :value="ebas">{{ ebas }}</option>
                <option :value="negocioSocial">{{ negocioSocial }}</option>
            </select>
          </div>
        </tab-content>
      </form-wizard>
    </div>
  </div>
</template>
<script>
import router from '../../router'

export default {
  name: 'SignUp',

  data () {
    return {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      date: 'Data Nascimento',
      register: 'Número de Registro na Prefeitura',
      insc: 'Inscrição estadual',
      employeesNumber: 'Números de funcionários',
      address: 'Endereço',
      phoneOng: 'Telefone da ONG',
      occupationArea: 'Área de atuação',
      ongType: 'Tipo de ONG',
      fundacao: 'Fundação',
      osc: 'Organização da Sociedade Civil',
      cooperativa: 'Cooperativa',
      oscip: 'Organização da Sociedade Civil de Interesse Público',
      os: 'Organização Social',
      institutoEmp: 'Instituto Empresarial',
      ebas: 'Entidade Beneficente De Assistência Social',
      negocioSocial: 'Negócio Social',
      assitencia: 'Assistência Social',
      cultura: 'Cultura',
      saude: 'Saúde',
      ma: 'Meio Ambiente',
      animal: 'Animal',
      desenvolvimento: 'Desenvolvimento e defesa de direitos',
      habitacao: 'Habitação',
      ep: 'Educação e Pesquisa'
    }
  },

  methods: {
    onComplete: function () {
      alert('Requisição de conta solicitada. Em breve retornaremos!')
      router.push({ path: '/' })
    }
    // validateFirstStep () {
    //   return new Promise((resolve, reject) => {
    //     this.$refs.ruleForm.validate((valid) => {
    //       resolve(valid)
    //     })
    //   })
    // }
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
