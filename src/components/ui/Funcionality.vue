<template>
    <v-flex xs12 md4>
        <v-card flat class="transparent">
            <v-card-text>
                <v-layout align-center justify-center>
                    <v-img :src="this.image" max-height="100px" max-width="100px"></v-img>    
                </v-layout>
            </v-card-text>
            <v-card-title primary-title class="layout justify-center">
                <div class="headline text-center" v-html="title"></div>
            </v-card-title>
            <v-card-text v-html="text"></v-card-text>
        </v-card>
    </v-flex>
</template>
<script>
export default {
    name: "funcionality",
    props: ["title", "text", "image"],
}
</script>
