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
                        
                    </v-card>
                </v-flex>
                <v-flex xs3>
                    <v-card>
                        <v-fits
                            id="3"
                            source="http://avro.alerce.online/get_stamp?oid=ZTF18ablpycj&candid=580469734915015004&type=science&format=fits"
                            width=400
                            height=400
                            :display="display"
                        />
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        
    </v-layout>
</template>
<script>
import VFits from 'vue-fits/src/components/VFits.vue'
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
        ],
      source: 'https://www.dl.dropboxusercontent.com/s/vdm4hl7h51fuhho/mod_out.fits',
      width: 512,
      height: 512,
      display: {
        menubar: false,
        toolbar: true,
        main: true,
        colorbar: true
      }
    }),
    components: {
        VFits
    },
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
}
</script>
