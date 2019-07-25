<template>
    <v-container fluid fill-height class="index-container">
        <v-layout align-content-center justify-center row>
            <v-flex xs12 md3 class="index-flex">
                <v-img :src="images.gpu_icon" height="100" width="100"></v-img>
                <p>Designed to run </p>
            </v-flex>
            <v-flex xs12 md3 class="index-flex">
                <v-img :src="images.gpu_icon" height="100" width="100"></v-img>
                <p>Designed to run </p>
            </v-flex>
            <v-flex xs12 sm6 md6>
                <v-img :src="images.antenna_icon" height="100" width="100"></v-img>
                <p>Designed to run </p>
            </v-flex>
            <v-flex xs12 sm6 md6>
                <v-img :src="images.antenna_icon" height="100" width="100"></v-img>
                <p>Designed to run </p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'index',
        data: () => ({
            images: {
                gpu_icon: require("@/assets/gpu_icon.svg"),
                antenna_icon: require("@/assets/antenna_logo.png")
            }
        })
    }
</script>

<style scoped>
    .index-container {
        background-color: #eeeeee;
        padding-top: 150px;
        padding-bottom: 150px;
    }

    .index-flex {
        margin: 0% 10%;
    }
</style>