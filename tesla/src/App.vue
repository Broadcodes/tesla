<template>
  <div id="app">
    <nav>
      <div>
        <router-link to="/">Logo</router-link>
      </div>
      <div>
        <router-link to="/model_S">Model S</router-link>
        <router-link to="/model_3">Model 3</router-link>
        <router-link to="/model_X">Model X</router-link>
        <router-link to="/model_Y">Model Y</router-link>
        <router-link to="/powerwall">Powerwall</router-link>
        <router-link to="/ricarica">Ricarica</router-link>
      </div>
    </nav>
    <router-view />
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
</style>
