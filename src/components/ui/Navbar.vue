<template>
    <v-parallax :src="images.background" height="500">
        <v-layout row wrap>
            <v-flex xs8>
                <h1>GPUVMEM LOGO</h1>
            </v-flex>
            <v-flex xs4>
                <v-layout row wrap>
                    <v-flex>
                        <h2>Link 1</h2>
                    </v-flex>
                    <v-flex>
                        <h2>Link 2</h2>
                    </v-flex>
                    <v-flex>
                        <h2>Link 3</h2>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-parallax>
</template>


<script>
    //TODO Hacer un if para cambiar de jumbotron a navbar

    export default {
        name: 'navbar',
        data: () => ({
            images: {
                logo: require('@/assets/logo_gpuvmem.png'),
                background: require('@/assets/astronomy_image_1.jpg')
            }
        })
    }
</script>

<style scoped>
    .nav-container {
        background-color: #a8abaa;
    }

    .nav-header {
        color: white;
        background-color: #a8abaa;
    }
</style>