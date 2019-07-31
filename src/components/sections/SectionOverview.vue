<template>
    <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >
            <v-flex xs12 sm4 class="my-4">
                <div class="text-center">
                    <h2 class="headline"> {{ title }}</h2>
                    <span class="subheading">
                        {{ subtitle }}
                    </span>
                </div>
            </v-flex>
          <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center justify-center>
                    <funcionality v-for="f in cards" :key="f.title" :title="f.title" :text="f.text" :image="f.image"></funcionality>
                </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
    </section>
</template>

<script>
import funcionality from "../ui/Funcionality.vue"
export default {
    name: 'sectionOverview',
    components: {
        funcionality,
    },
    computed: {
        cards () {
            return this.$store.state.home.overview.cards;
        },
        title () {
            return this.$store.state.home.overview.title;
        },
        subtitle () {
            return this.$store.state.home.overview.subtitle;
        }
    }
}
</script>

<style scoped>
    .section {
        background-color: #fdfdfd;
        padding: 200px 0;
    }

    .section-flex {
        margin: 5% 0;
        text-align: center;
        font-size: 25px;
        font-weight: bold;
        color: #181849;
    }

    .section-flex-text {
        margin: 5% 50px;
        text-align: center;
        font-size: 18px;
        color: #808080;
    }

    .section-img {
        text-align: center;
    }
</style>