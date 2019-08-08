<template>
    <v-layout row wrap class="my-5">
        <!--TITLE AND DESCRIPTION-->
        <v-container  align-center>
            <v-flex xs12>
                <div class="text-center">
                    <h2 class="headline"> {{ title }}</h2>
                    <span class="subheading">
                        {{ description }}
                    </span>
                </div>
            </v-flex>
        </v-container>
        <v-container grid-list-md>
            <v-layout alig wrap>
                <v-flex xs4>
                    <v-card dark color="primary">
                        <codemirror v-model="code" :options="cmOption"></codemirror>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card dark color="primary">
                        <v-card-text class="px-0">Image 1</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card dark color="primary">
                        <v-card-text class="px-0">Image 2</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
    </v-layout>
</template>
<script>
export default {
    name: "result",
    props: ["id", "title", "description"],
    computed: {
        code(){
            return "# include <stdio>\nint main(){}"
        },
        cmOption(){
            return {
                tabSize: 4,
                styleActiveLine: false,
                lineNumbers: true,
                styleSelectedText: false,
                line: true,
                foldGutter: true,
                gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true },
                mode: 'text/x-c++src',
                keyMap: "sublime",
                matchBrackets: true,
                showCursorWhenSelecting: true,
                theme: "monokai",
            }
        }
    }
}
</script>

