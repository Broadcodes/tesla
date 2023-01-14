<template>
    <div>
        <footer>
            <router-link class="link" to="/">Tesla © 2023</router-link>
            <router-link class="link" to="/">Privacy e note legali</router-link>
            <router-link class="link" to="/">Contatti</router-link>
            <router-link class="link" to="/">Carriere</router-link>
            <router-link class="link" to="/">Notizie</router-link>
            <router-link class="link" to="/">Sedi</router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterArea',
}
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    height: 56px;
    display: flex;
    position: relative;
    bottom: 63px;
    left: 0px;
    justify-content: center;
    align-items: center;
    z-index: 50;

    .link {
        text-decoration: none;
        font-size: 0.75rem;
        font-family: 'Montserrat', sans-serif;
        color: #000;
        padding: 6px 8px;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>