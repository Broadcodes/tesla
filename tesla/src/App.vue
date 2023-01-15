<template>
  <div id="app">
    <nav>
      <div id="teslaLogo">
        <router-link to="/"><img src="./assets/teslaLogo.svg" alt="Tesla Logo"></router-link>
      </div>
      <div id="nav-models">
        <router-link class="link" to="/models">Model S</router-link>
        <router-link class="link" to="/model3">Model 3</router-link>
        <router-link class="link" to="/modelx">Model X</router-link>
        <router-link class="link" to="/modely">Model Y</router-link>
        <router-link class="link" to="/powerwall">Powerwall</router-link>
        <router-link class="link" to="/charging">Ricarica</router-link>
      </div>
      <div id="menu">
        <router-link class="link" to="/support">Assistenza</router-link>
        <input class="link no-btn" type="button" value="Menu">
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
html {
  overflow: hidden;
}

* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body {
  font-family: 'Montserrat', sans-serif;
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
  z-index: 50;

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

  #nav-models {
    transform: translateX(3%);
  }

  .link {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: #000;
    padding: 6px 16px;
    transition: all .5s;

    &:hover {
      margin-top: 2px;
      border-radius: 3px;
      background-color: rgba(0, 0, 0, 0.07);
    }
  }

  .no-btn {
    background: none;
    border: none;
  }

  #menu {
    input {
      cursor: pointer;
    }
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
