<template>
  <navbar></navbar>
  <transition name="view" appear enter-active-class="animated zoomInRight" leave-active-class="animated zoomOutLeft">
    <router-view></router-view>
  </transition>
<footer>
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0);">
    © {{year}} Copyright: DeShop
  </div>
</footer>
</template>

<script>

import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 960px;
  margin: 0 auto;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}


</style>
