<template>
    <div>
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
        }
    }
</script>

<style scoped>

</style>