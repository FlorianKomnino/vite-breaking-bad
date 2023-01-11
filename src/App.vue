<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Main,
    Header,
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
