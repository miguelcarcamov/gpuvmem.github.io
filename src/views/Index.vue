<template>
    <div>
        <section-icon></section-icon>
        <section-functionalities></section-functionalities>
    </div>
</template>

<script>
    import SectionIcon from '../components/sections/SectionIcon'
    import SectionFunctionalities from '../components/sections/SectionFunctionalities'

    export default {
        name: 'index',
        components: {
            SectionIcon,
            SectionFunctionalities
        }
    }
</script>

<style scoped>

</style>