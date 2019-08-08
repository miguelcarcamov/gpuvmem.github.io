<template>
    <div>
        <v-parallax :src="images.background" height="600">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <!-- Logo -->
            <v-img :src="images.logo"  max-width="600" width="100%" contain class="hidden-sm-and-down"></v-img>
            <v-img :src="images.logosmall"  max-width="400" width="100%" contain class="hidden-md-and-up"></v-img>
          </v-layout>
        </v-parallax>
        <section-overview></section-overview>
        <section-functionalities></section-functionalities>
        <section-organization></section-organization>
    </div>
</template>

<script>
    import SectionOverview from '../components/sections/SectionOverview'
    import SectionFunctionalities from '../components/sections/SectionFunctionalities'
    import SectionOrganization from '../components/sections/SectionOrganization'

    export default {
        name: 'index',
        components: {
            SectionOverview,
            SectionFunctionalities,
            SectionOrganization
        },
        data: () => ({
            images: {
                logo: require('@/assets/logo_gpuvmem_white.png'),
                logosmall: require('@/assets/main_logo_white.png'),
                background: require('@/assets/astronomy_image_1.jpg')
            }
        })
    }
</script>

<style scoped>

</style>