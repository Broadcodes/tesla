<template>
    <div>
        <!-- MODEL 3 -->
        <div v-if="scrollValue >= 0 && scrollValue < 717" class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Ordine personalizzato">
                <input type="button" value="Pronta consegna">
            </div>

            <p class="descriptionText">Ha ricevuto 5 stelle sulla valutazione complessiva di Euro NCAP</p>

            <i class="btnScrollHome fa-solid fa-chevron-down"></i>
        </div>

        <!-- MODEL Y -->
        <div v-else-if="scrollValue >= 717 && scrollValue < 1435" class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Ordine personalizzato">
                <input type="button" value="Pronta consegna">
            </div>

            <p class="descriptionText">5 stelle nella valutazione di sicurezza Euro NCAP</p>
        </div>

        <!-- MODEL S -->
        <div v-else-if="scrollValue >= 1435 && scrollValue < 2152" class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Ordine personalizzato">
                <input type="button" value="Scopri i veicoli in pronta consegna">
            </div>
        </div>

        <!-- MODEL X -->
        <div v-else-if="scrollValue >= 2152 && scrollValue < 2870" class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Ordine personalizzato">
                <input type="button" value="Scopri di più">
            </div>
        </div>

        <!-- POWERWALL -->
        <div v-else-if="scrollValue >= 2870 && scrollValue < 3588" class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Scopri di più">
            </div>
        </div>

        <!-- ACCESSORI -->
        <div v-else class="areaButtonContainer">
            <div class="areaButton">
                <input type="button" value="Acquista ora">
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "AreaButtonHome",
    props: {
        scrollValue: Number
    },
}
</script>

<style lang="scss" scoped>
.areaButtonContainer {
    position: absolute;
    bottom: 4%;
    left: 50%;
    height: 122px;
    transform: translateX(-50%);
    text-align: center;

    .areaButton {
        display: flex;
        justify-content: center;
        align-items: center;

        input {
            padding: 12px 60px;
            font-size: .95rem;
            border: none;
            border-radius: 3px;
            height: 40px;
            letter-spacing: .03rem;
            cursor: pointer;
            margin: 0px 12px;
        }

        input:nth-child(1) {
            color: #fff;
            background-color: rgba(0, 0, 0, 0.6);
            
        }

        input:nth-child(2) {
            color: #000;
            background-color: rgba(255, 255, 255, 0.6);
        }
    }

    .descriptionText {
        font-size: .8rem;
        margin: 35px 0 10px;
        letter-spacing: .03rem;
    }

    .btnScrollHome {
        font-size: 1.2rem;
        cursor: pointer;
        position: relative;
        top: 8px;
        animation-name: moveElement;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
    }

    @keyframes moveElement {
        0% {
            top: 0px;
        }

        15% {
            top: 8px;
        }

        30% {
            top: 2px;
        }

        45% {
            top: 6px;
        }

        60% {
            top: 4px;
        }

        75% {
            top: 4px;
        }

        100% {
            top: 4px;
        }
    }
}
</style>