<template>
    <section>
        <v-parallax :src="background" height="400">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-4 text-center">{{ title }}</div>
            <em>{{ subtitle }}</em>
            <v-btn
              class="mt-12"
              color="blue lighten-2"
              dark
              large
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
</template>

<script>
export default {
    name: 'sectionFunctionalities',
    data: () => ({
        drawer: false,
    }),
    computed: {
      title() {
        return this.$store.state.home.funcionalities.title;
      },
      subtitle() {
        return this.$store.state.home.funcionalities.subtitle;
      },
      background() {
        return this.$store.state.home.funcionalities.background;
      }
    }
}
</script>

<style scoped>
    .section {
        color: white;
        background-color: rgba(23, 23, 69, 0.91);
        padding: 200px 0;
    }
</style>