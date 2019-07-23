<template>
    <div>
        <v-parallax :src="images.background" height="100%" class="nav-parallax">
            <v-layout row wrap>
                <v-flex xs8>
                    <v-img :src="images.logo" height="300" width="350" position="top 0px left 0px" class="nav-logo"></v-img>
                </v-flex>
                <v-flex xs4>
                    <v-layout row wrap class="nav-links">
                        <v-flex>
                            <h3>DOCUMENTATION</h3>
                        </v-flex>
                        <v-flex>
                            <h3>CONTACT US</h3>
                        </v-flex>
                        <v-flex>
                            <!-- TODO Cambiar por un boton que indique es que patreon -->
                            <h3><router-link to="/support-us">SUPPORT US</router-link></h3>
                        </v-flex>
                        <v-flex>
                            <v-icon medium dark>mdi-github-circle</v-icon>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-parallax>
    </div>
</template>


<script>
    //TODO Hacer un if para cambiar de jumbotron a navbar

    export default {
        name: 'AppNav',
        data: () => ({
            images: {
                logo: require('@/assets/logo_gpuvmem_white.png'),
                background: require('@/assets/astronomy_image_2.jpg')
            }
        })
    }
</script>

<style scoped>
    .nav-parallax {
        height: 750px;
        opacity: 0.95;
    }

    .nav-links {
        font-size: 14px;
        margin-top: 150px;
    }
    
    .nav-links :hover {
        color: #000;
    }
    
</style>