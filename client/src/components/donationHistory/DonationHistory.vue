<template>
  <div>
    <menu-component :title="title"></menu-component>
    
    <div class="wrapper">
      <line-chart></line-chart>
    </div>

  </div>
</template>
<script>
import menuComponent from '../menu/Menu'
import lineChart from '../line-chart/LineChart'

export default {
  name: 'DonationHistory',

  components: {
    'menu-component': menuComponent,
    'line-chart': lineChart
  },

  data () {
    return {
      title: 'Histórico de Doações'
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  margin 0 auto
  padding 90px 20px 20px

.wrapper-card
  max-width 1000px
  padding-top 20px
  margin 0 auto 10px

</style>

