<template>
  <div id="nav">
    <router-link to="/">Home</router-link> | <router-link to="/data">Data</router-link> |
    <router-link to="/method">Method</router-link> | <router-link to="/v-if">V-if</router-link> |
    <router-link to="/v-for">V-for</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/class-binding">ClassBinding</router-link> |
    <router-link to="/style-binding">StyleBinding</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style lang="sass">
.wrapper
  position: relative
  display: inline-block
  width: 300px
  height: 300px
  margin: 0 auto
  box-shadow: 0 2px 5px rgba(0,0,0,0.26)
  >div
    position: absolute
    width: 100%
    top: 50%
    left: 50%
    transform: translateY(-50%) translateX(-50%)
</style>
