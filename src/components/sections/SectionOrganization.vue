<template>
    <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-12">
            <v-flex xs12 sm4>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">About us</div>
                </v-card-title>
                <v-card-text>
                  {{ description }}
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card flat class="transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-list class="transparent">
                  <v-list-item v-for="item in items" :key="item.text">
                    <v-list-item-action>
                      <v-icon class="blue--text text--lighten-2">{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </section>
</template>
<script>
export default {
    name: "SectionOrganization",
    computed: {
        description(){
            return this.$store.state.home.organization.description;
        },
        items() {
            return this.$store.state.home.organization.items;
        }
    }
}
</script>

