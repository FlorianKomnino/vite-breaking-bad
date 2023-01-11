<script>
import { store } from '../store.js';

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
            alert('Vediamo se tuti i comandi funzionano');
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
