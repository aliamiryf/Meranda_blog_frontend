<template>
    <v-app>
        <navbar/>
        <router-view/>
    </v-app>
</template>

<script>
    import Navbar from "../../components/main/navbar";
    export default {
        name:"main_layout",
        components: {Navbar}
    }
</script>

<style scoped>

</style>
