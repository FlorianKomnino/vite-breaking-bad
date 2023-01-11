<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Main',

    components: {
    },

    data() {
        return {
            store,

        }
    },

    methods: {
        getCards() {
            //recupero le carte desiderate con questo metodo

            axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0', {
                params: {

                }
            })
                .then(function (response) {
                    console.log(response.data.data);
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
    <div class="wrapper">
        <h1>
            Main
        </h1>
    </div>
</template>

<style lang="scss" scoped>

</style>
