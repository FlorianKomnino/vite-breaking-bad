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
div.cardsContainer {
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

}
</style>
