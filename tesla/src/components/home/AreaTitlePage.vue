<template>
    <div class="titleCard">
        <h2>{{title}}</h2>
        <router-link v-if="title === 'Model 3'" class="link" to="/drive">{{subtitle[0]}}</router-link>
        <router-link v-else-if="title === 'Impianto fotovoltaico e Powerwall'" class="subText" to="/drive">{{subtitle[1]}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'AreaTitlePage',
    props:{
        title: String,
        subtitle: Array,
    }
}
</script>

<style lang="scss" scoped>
.titleCard {
    position: relative;
    top: 15%;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        margin-bottom: 10px;
    }

    .link {
        color: #000;
        text-decoration: none;
        border: 0;
        box-shadow: 0px 1px 0px #000;
        transition: box-shadow .2s;

        &:hover {
            box-shadow: 0px 2px 0px #000;
        }
    }

    .subText{
        color: #000;
        text-decoration: none;
        font-size: 1.05rem;
        letter-spacing: .1rem;
    }
}
</style>