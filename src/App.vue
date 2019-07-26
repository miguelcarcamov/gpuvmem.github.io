<template>
  <v-app id="app">
    <AppNav></AppNav>
    <v-content>
      <router-view></router-view>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppNav from './components/ui/Navbar'
import AppFooter from './components/ui/Footer'

export default {
  name: 'App',
  components: {
    AppNav,
    AppFooter
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
  }
</style>
