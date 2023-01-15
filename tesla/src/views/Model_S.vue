<template>
    <div class="container">

        <head>
            <title>Model S | Tesla Italia</title>
        </head>
        <div class="bg-containerMain">
            <div class="title">
                <h1>Model S</h1>
                <h4>Plad</h4>
            </div>
            <div class="areaDataCar">
                <DataCarView />
            </div>
        </div>

        <div class="areaText">
            <span class="areaText-bgTop"></span>
            <h2>Gli interni del futuro</h2>
            <span class="areaText-bgBottom"></span>
        </div>

        <div class="bg-containerInterior"></div>

    </div>
</template>

<script>
import DataCarView from '@/components/model_S/DataCarView.vue';

export default {
    name: 'Model_S',
    components:{
        DataCarView,
    }
}
</script>

<style lang="scss" scoped>
.container {
    overflow-x: auto;
    width: 100%;
    height: 100vh;
    position: relative;

    .bg-containerMain {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/model_S/Model-S-Main-Hero.png");
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        position: relative;

        .title {
            position: absolute;
            top: 16%;
            text-align: center;

            h1 {
                font-size: 2.5rem;
            }

            h4 {
                font-size: 1.1rem;
                font-weight: 400;
                letter-spacing: 0.1rem;
                margin-top: 5px;
            }
        }

        .areaDataCar {}
    }

    .areaText {
        width: 100%;
        position: relative;

        // background-color: #000;
        .areaText-bgTop {
            background: rgb(0, 0, 0);
            background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(240, 245, 244, 0) 100%);
            width: 100%;
            height: 100px;
            display: block;
            position: absolute;
            bottom: 28vh;
            z-index: 10;
        }

        h2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: calc(100vh / 3.5);
            color: rgb(255, 255, 255);
            background-color: rgb(0, 0, 0);
            font-size: 1.7rem;
        }

        .areaText-bgBottom {
            background: rgb(0, 0, 0);
            background: linear-gradient(180deg, rgb(0, 0, 0) 0%, rgba(240, 245, 244, 0) 100%);
            width: 100%;
            height: 100px;
            display: block;
            position: absolute;
            top: 28vh;
            z-index: 20;
        }
    }

    .bg-containerInterior {
        width: 100%;
        height: 100vh;
        background-image: url("../assets/model_S/Model-S-Interior-Hero-.png");
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: center;
        position: relative;
    }
}
</style>