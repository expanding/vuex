<template>
  <button @click="num">{{text}}</button>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  methods: {
    num () {
      let text = this.text
      if (text === '+') {
        this.$store.commit({
          type: 'add'
        })
      } else if (text === '-') {
        this.$store.commit({
          type: 'minus'
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
