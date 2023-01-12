
<script>
export default {
    name: 'CardComponent',

    props: {
        imgPath: String,
        cardName: String,
        archetype: String,
    }
}
</script>


<template>
    <div class="cardSpace">
        <figure>
            <img :src="imgPath" alt="card Image">
        </figure>
        <div class="cardDescription">
            <h3>
                {{ cardName }}
            </h3>
            <p>
                {{ archetype }}
            </p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
div.cardSpace {
    width: calc(100%/3);

    figure {
        width: 100%;
        padding: 2rem;

        img {
            width: 100%;
        }
    }
}

p,
h3 {
    text-align: center;
}
</style>