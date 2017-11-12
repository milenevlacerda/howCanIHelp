<template>
  <div>
    <menu-component :title="title"></menu-component>
    <tabs-component></tabs-component> 
  </div>
</template>
<script>
import menuComponent from '../menu/Menu'
import tabsComponent from '../tabs/Tabs'

export default {
  name: 'GeneralData',

  components: {
    'menu-component': menuComponent,
    'tabs-component': tabsComponent
  },

  data () {
    return {
      title: 'Pagamento'
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>

