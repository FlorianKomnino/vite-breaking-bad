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
  <header>
    <Header />
  </header>

  <main>
    <Main />
  </main>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;

main {
  background-color: #de8522;
}
</style>
