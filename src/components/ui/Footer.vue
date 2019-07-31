<template>
    <v-footer dark padless flat>
        <v-card class="white--text text-center" width="100%" color="#272a3b">

            <v-card-text>
                <v-btn class="mx-4" icon href="https://github.com/radioastronomy-usach-uch-man" target="_blank">
                    <v-icon size="40px">mdi-github-circle</v-icon>
                </v-btn>
            </v-card-text>
            <v-layout align-center justify-center column fill-height>
                <v-flex class="row-footer">
                    The software is under GNU General Public v3.0 license
                </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Developed by Radioastronomy-USACH-UCH-MAN</strong>
            </v-card-text>
        </v-card>
    </v-footer>
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