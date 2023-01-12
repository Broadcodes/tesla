<template>
  <div id="app">
    <nav>
      <div id="teslaLogo">
        <router-link to="/"><img src="./assets/teslaLogo.svg" alt="Tesla Logo"></router-link>
      </div>
      <div id="nav-models">
        <router-link to="/model_S">Model S</router-link>
        <router-link to="/model_3">Model 3</router-link>
        <router-link to="/model_X">Model X</router-link>
        <router-link to="/model_Y">Model Y</router-link>
        <router-link to="/powerwall">Powerwall</router-link>
        <router-link to="/ricarica">Ricarica</router-link>
      </div>
      <div class="menu">
        <router-link to="/assistenza">Assistenza</router-link>
        <input type="button" value="Menu">
      </div>
    </nav>
    <router-view id="viewRouter" />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: sans-serif;
}

nav {
  width: 100vw;
  height: 56px;
  padding: 0 30px;
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;

  #teslaLogo {
    width: 120px;
    height: 24px;
    display: flex;
    align-items: center;
    margin: 0 16px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

}

#viewRouter{
  position: relative;
  top: 56px;
}
</style>
