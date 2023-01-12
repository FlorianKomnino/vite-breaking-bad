
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
            <img :src="imgPath" alt="card Image" class="img-fluid">
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
figure {
    padding: 2rem;
}
</style>