<script>
import { store } from './store.js';
import axios from 'axios';
import Main from './components/Main.vue'
import Header from './components/Header.vue'

export default {
  components: {
    Main,
    Header,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getCards() {
      //recupero le carte desiderate con questo metodo

      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien', {
        params: {

        }
      })
        .then((response) => {
          console.log(response.data.data);
          this.store.cardsArrayFromResponse = response.data.data;
          this.store.arrayOfFoundCardsLength = response.data.data.length;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
  },

  created() {
    this.getCards();
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
