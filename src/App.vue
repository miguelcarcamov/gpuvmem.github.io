<template>
    <v-app>
        <navbar></navbar>
        <v-content>
            <router-view></router-view>
        </v-content>
        <!-- Footer -->
    </v-app>
</template>

<script>
    import Navbar from './components/ui/Navbar'

    export default {
        name: 'App',
        components: {
            Navbar
        }
    }
</script>
