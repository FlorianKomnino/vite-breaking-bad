<script>
import { store } from '../store.js';
import axios from 'axios';
import CardComponent from './cardComponent.vue'

export default {
    name: 'Main',

    components: {
        CardComponent,
    },

    data() {
        return {
            store,
            cardsArrayFromResponse: {},
        }
    },

    methods: {
        getCards() {
            //recupero le carte desiderate con questo metodo

            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0', {
                params: {

                }
            })
                .then((response) => {
                    console.log(response.data.data);
                    this.cardsArrayFromResponse = response.data.data;
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
                    Found XX cards
                </h1>
            </div>
        </div>

        <!-- cards container -->
        <div class="row">
            <div class="cardsContainer col-3">
                <CardComponent v-for="card, index in cardsArrayFromResponse"
                    :imgPath="cardsArrayFromResponse[index].card_images[0].image_url"
                    :cardName="cardsArrayFromResponse[index].name"
                    :archetype="cardsArrayFromResponse[index].archetype" />
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
