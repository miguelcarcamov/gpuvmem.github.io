<template>
  <v-app>
    <AppNav></AppNav>
    <v-content>
      <v-container>
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
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
