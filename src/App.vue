<script>
import { store } from './store.js';
import axios from 'axios';
import Header from './components/Header.vue'
import CardComponent from './components/cardComponent.vue'

export default {
  components: {
    Header,
    CardComponent,
  },

  data() {
    return {
      store,
      apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
      selectedArchetype: 'Alien',
    }
  },

  methods: {
    getCards() {

      //recupero le carte desiderate con questo metodo
      axios.get(this.apiUrl, {
        params: {
          archetype: this.store.chosenArchetype,
          num: 10,
          offset: 0,
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
  }
}
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <div class="container">

      <!-- selector -->
      <div class="row" id="selectorRow">
        <div class="col-12">
          <div class="selectorWrapper">
            <label for="archetypeSelector">Choose the archetype you want to see...</label>


            <select @change="getCards" name="archetypes" id="archetypeSelector" v-model="store.chosenArchetype">

              <option v-for="(archetype, index) in store.archetypesList" :value="archetype">
                {{ archetype }}
              </option>

            </select>


          </div>
        </div>
      </div>

      <!-- cards found number -->
      <div class="row">
        <div class="col-12">
          <h1>
            Found {{ store.arrayOfFoundCardsLength }} cards
          </h1>
        </div>
      </div>

      <!-- cards container -->
      <div class="row">
        <div class="cardsContainer col-12">
          <CardComponent v-for="card, index in store.cardsArrayFromResponse"
            :imgPath="store.cardsArrayFromResponse[index].card_images[0].image_url"
            :cardName="store.cardsArrayFromResponse[index].name"
            :archetype="store.cardsArrayFromResponse[index].archetype" :key="store.chosenArchetype" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;

main {
  background-color: #de8522;
}

h1 {
  background-color: white;
  padding: 2rem 0 0 2rem;
}

div.selectorWrapper {
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;

  select {
    width: 150px;
  }
}

div.cardsContainer {
  width: calc(100% - 1.5rem);
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
</style>
