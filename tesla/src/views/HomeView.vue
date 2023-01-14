<template>
  <div>
    <div class="container" @scroll="handleScroll">

      <head>
        <title>Auto elettriche, energia solare e pulita | Tesla Italia</title>
      </head>

      <div v-for="(element, index) in classBox" :key="index">
        <div :id="element">
          <AreaTitlePage :title="titlePageArea[index]" :subtitle="subTitlePageArea" />
        </div>
      </div>
      <AreaButtonHome :scrollValue="scrollTop" />
    </div>

  </div>

</template>

<script>
import AreaTitlePage from '@/components/home/AreaTitlePage.vue';
import AreaButtonHome from '@/components/home/AreaButtonHome.vue';

export default {
  name: 'HomeView',
  data() {
    return {
      classBox: ['model_3', 'model_Y', 'model_S', 'model_X', 'model_Powerwall', 'model_Accessori'],
      titlePageArea: ['Model 3', 'Model Y', 'Model S', 'Model X', 'Impianto fotovoltaico e Powerwall', 'Accessori'],
      subTitlePageArea: ['Pronata un test drive', 'Energia per tutto'],
      scrollTop: 0,
    }
  },
  components: {
    AreaTitlePage,
    AreaButtonHome,
  },
    methods: {
    handleScroll(event) {
      this.scrollTop = Math.floor(event.currentTarget.scrollTop);
    },
  }
}

</script>


<style lang="scss" scoped>
.container {
  scroll-snap-type: both mandatory;
  white-space: nowrap;
  aspect-ratio: 1/1;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;

  &>div>div {
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    aspect-ratio: 1/1;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
  }

  #model_3 {
    background-image: url("../assets/home/model_3.png");
  }

  #model_Y {
    background-image: url("../assets/home/model_Y.png");
  }

  #model_S {
    background-image: url("../assets/home/model_S.png");
  }

  #model_X {
    background-image: url("../assets/home/model_X.png");
  }

  #model_Powerwall {
    background-image: url("../assets/home/powerwall.png");
  }

  #model_Accessori {
    background-image: url("../assets/home/accessori.png");
  }
}
</style>