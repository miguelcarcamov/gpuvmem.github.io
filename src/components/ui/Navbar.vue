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
                            <v-icon>mdi-account-supervisor-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> Support us </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-dev-to</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title> Developers </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-divider></v-divider>
                    <v-list-item href="https://github.com/radioastronomy-usach-uch-man" target="_blank">
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
        <v-toolbar dark color="#272a3b">
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
                <v-btn text>Support us</v-btn>
                <v-btn text>Developers</v-btn>
                <v-btn icon href="https://github.com/radioastronomy-usach-uch-man" target="_blank">
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
            <v-img :src="images.logo"  max-width="100%" min-width="375"></v-img>
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
                background: require('@/assets/astronomy_image_1.jpg')
            }
        })
    }
</script>

<style scoped>
</style>