<template>
    <v-container fluid fill-height pa-0 ma-0>
        <v-layout align-center justify-center row class="section">
            <v-flex xs12 md3>
                <v-layout row>
                    <v-flex xs12>
                        <div class="section-img">
                            <img v-bind:src="images.gpu_icon" height="100px" width="100px"/>
                        </div>
                    </v-flex>
                    <v-flex xs12 class="section-flex">
                        <p>Graphical Processing Unit</p>
                    </v-flex>
                    <v-flex xs12 class="section-flex-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cum cupiditate dicta dignissimos dolores fugit illum, incidunt itaque minus obcaecati quis recusandae repellendus repudiandae sapiente sint, tempore unde vitae voluptatem.</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md3>
                <v-layout row>
                    <v-flex xs12>
                        <div class="section-img">
                            <img v-bind:src="images.framework_icon" height="100px" width="100px"/>
                        </div>
                    </v-flex>
                    <v-flex xs12 class="section-flex">
                        <p>Framework</p>
                    </v-flex>
                    <v-flex xs12 class="section-flex-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium consectetur cumque earum error fuga inventore maxime nam odio, odit placeat quo, unde, veritatis? Animi aperiam enim id nemo unde.</p>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md3>
                <v-layout row>
                    <v-flex xs12>
                        <div class="section-img">
                            <img v-bind:src="images.gpu_icon" height="100" width="100"/>
                        </div>
                    </v-flex>
                    <v-flex xs12 class="section-flex">
                        <p>holaaaaa</p>
                    </v-flex>
                    <v-flex xs12 class="section-flex-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem beatae distinctio, dolores dolorum eaque est in magnam nemo non odit placeat provident, repellendus sequi temporibus ullam vel veritatis vero.</p>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'sectionIcon',
        data: () => ({
            images: {
                gpu_icon: require("@/assets/gpu_icon.svg"),
                antenna_icon: require("@/assets/antenna_icon.svg"),
                framework_icon: require("@/assets/framework_icon.png")
            }
        })
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