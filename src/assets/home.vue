<template>
  <div>
    <Button :text="add"></Button>
    <span>{{number}}</span>
    <Button :text="minus"></Button>
  </div>
</template>

<script>
import Button from '../components/button'

import {mapState} from 'vuex'
export default {
  data () {
    return {
      add: '+',
      minus: '-'
    }
  },
  computed: {
    ...mapState({
      number: state => state.num.number
    })
  },
  components: {
    Button
  }
}
</script>

<style scoped>

</style>
