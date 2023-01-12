<script>
import { store } from '../store.js';
import CardComponent from './cardComponent.vue'

export default {
    name: 'Main',

    components: {
        CardComponent,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">

        <!-- selector -->
        <div class="row" id="selectorRow">
            <div class="col-12">
                <div class="selectorWrapper">
                    <label for="archetypeSelector">Choose the archetype you want to see...</label>
                    <select name="archetypes" id="archetypeSelector">
                        <option value=""> - Choose the achetype - </option>
                        <option value="alien"> Alien </option>
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
            <div class="cardsContainer col-3">
                <CardComponent v-for="card, index in store.cardsArrayFromResponse"
                    :imgPath="store.cardsArrayFromResponse[index].card_images[0].image_url"
                    :cardName="store.cardsArrayFromResponse[index].name"
                    :archetype="store.cardsArrayFromResponse[index].archetype" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
    background-color: white;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
}
</style>
