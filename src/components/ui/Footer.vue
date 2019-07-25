<template>
    <v-container fluid class="container-footer">
        <v-layout align-center justify-center column fill-height>
            <v-flex class="row-footer">
                <v-icon large light>mdi-github-circle</v-icon>
            </v-flex>
            <v-flex class="row-footer">
                The software is under GNU General Public v3.0 license
            </v-flex>
            <v-flex class="row-footer">
                Developed by Radioastronomy-USACH-UCH-MAN
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style scoped>
    .container-footer {
        color: #808080;
        background-color: #eeeeee;
        padding: 5% 0%;
    }

    .row-footer {
        margin: 1% 0;
    }
</style>