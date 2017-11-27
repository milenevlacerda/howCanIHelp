<template>
  <div>
    <menu-component :title="title"></menu-component>
    
    <div class="wrapper">
      <vuestic-chart v-bind:data="chartData" :options="chartOptions" type="vertical-bar"></vuestic-chart>

    </div>

  </div>
</template>
<script>
import menuComponent from '../menu/Menu'

export default {
  name: 'ProjectData',

  components: {
    'menu-component': menuComponent
  },

  data () {
    return {
      title: 'Dados do Projeto'
    }
  },

  legend: {
    position: 'bottom',
    labels: {
      fontColor: '#333',
      fontFamily: 'sans-serif',
      fontSize: 14,
      padding: 20,
      usePointStyle: true
    }
  },
  tooltips: {
    bodyFontSize: 14,
    bodyFontFamily: 'sans-serif'
  },
  responsive: true,
  maintainAspectRatio: false
}

// let chartData = {
//   labels: ['January', 'February'],
//   datasets: [
//     {
//       label: 'GitHub Commits',
//       backgroundColor: '#f87979',
//       data: [40, 20]
//     }
//   ]
// }
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

