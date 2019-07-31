<template>
    <section>
        <!-- Display only in devices like smartphones -->
        <v-navigation-drawer
            v-model="drawer"
            fixed
            right
            app>
            <v-list shaped>
                <v-subheader>
                    <v-btn @click.stop="drawer = !drawer" icon> 
                        <v-icon icon>mdi-close</v-icon>
                    </v-btn>
                </v-subheader>
                <v-list-item-group>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-memory</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> Documentation </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> Contact Us </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-github-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> GitHub </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- Navbar -->
        <v-toolbar dark color="#232026">
            <v-toolbar-title></v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- Mobile section show drawer -->
            <v-toolbar-items class="hidden-md-and-up">
                <v-btn icon @click.stop="drawer = !drawer" class="hidden-md-and-up">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
            </v-toolbar-items>
            <!-- Desktop section show navbar -->
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn text>Documentation</v-btn>
                <v-btn text>Contact us</v-btn>
                <v-btn icon>
                    <v-icon>mdi-github-circle</v-icon>
                </v-btn>
            </v-toolbar-items>

        </v-toolbar>
        <v-parallax :src="images.background" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- Logo -->
            <v-img :src="images.logo" max-height="500" max-width="400"></v-img>
          </v-layout>
        </v-parallax>
      </section>
</template>


<script>
    export default {
        name: 'AppNav',
        data: () => ({
            drawer: false,
            images: {
                logo: require('@/assets/logo_gpuvmem_white.png'),
                background: require('@/assets/astronomy_image_3.jpg')
            }
        })
    }
</script>

<style scoped>
</style>