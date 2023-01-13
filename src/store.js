import { reactive } from 'vue';

export const store = reactive({
    cardsArrayFromResponse: {},
    arrayOfFoundCardsLength: 0,
    archetypesList: ['Alien', 'Laval', 'Vylon', 'Inzektor', 'Umi', 'Gusto'],
    chosenArchetype: '',
})