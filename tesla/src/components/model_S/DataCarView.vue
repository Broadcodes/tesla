<template>
    <div class="containerBoxData">
        <div class="areaBoxData">
            <h3>600 km</h3>
            <h5>Autonomia</h5>
            <h5>(WLTP)</h5>
        </div>
        <div class="areaBoxData">
            <h3>2,1 s</h3>
            <h5>0-100 km/h*</h5>
        </div>
        <div class="areaBoxData">
            <h3>322 km/h</h3>
            <h5>Velocità massima*</h5>
        </div>
        <div class="areaBoxData">
            <h3>1020 cv</h3>
            <h5>Potenza di picco</h5>
        </div>
        <div class="areaBoxData">
            <input type="button" value="Ordina ora">
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataCarView'
}
</script>

<style lang="scss" scoped>
.containerBoxData {
    width: 65vw;
    height: 150px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    z-index: 15;

    .areaBoxData {
        width: calc(100% / 5);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h3 {
            color: #fff;
            font-size: 1.9rem;
            font-weight: 500;
            margin-bottom: 8px;
        }

        h5 {
            color: #fff;
            font-size: 0.8rem;
        }

        input {
            border: 3px solid #fff;
            padding: 10px 60px;
            background: none;
            border-radius: 3px;
            color: #fff;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                background-color: #fff;
                color: #000;
            }
        }
    }
}
</style>