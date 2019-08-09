<template>
    <v-layout column class="my-5">
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
            <v-layout align wrap>
                <v-flex xs5>
                    <v-card dark color="primary">
                        <codemirror v-model="code" :options="cmOption"></codemirror>
                    </v-card>
                </v-flex>
                <v-flex xs4>
                    <v-card dark height="100%">
                        <div class="JS9Menubar" id="JS9" data-width="100%"></div>
                        <div class="JS9" id="JS9" data-width="100%" data-height="100%"></div>
                        <div class="JS9Colorbar mt-1" id="JS9" data-width="100%"></div>
                    </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card dark color="primary">
                        
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
    data: () => ({
        fits: [
            "/home/javier/Desktop/Trabajos/gpuvmem-web/src/assets/test_1.fits"
        ],
        opts: [
            {
                parentFile: "/home/javier/Desktop/Trabajos/gpuvmem-web/src/assets/test_1.fits",
                colormap: "cool"
            }
        ]
    }),
    computed: {
        code(){
            return "# include <stdio>\nint main(){}"
        },
        cmOption(){
            return {
                readOnly: true,
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
        },
    },
    created() {
        // eslint-disable-next-line no-console
        JS9.init();
        JS9.imageOpts.wcsunits = "degrees";
        JS9.Preload('http://js9.si.edu/js9/fits/casa.fits')
        //JS9.Preload(this.fits[0], this.opts[0]);
    }
}
</script>
