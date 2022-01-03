<template>
    <v-footer padless>
        <v-col
                class="text-center"
                cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Meranda</strong>
        </v-col>
    </v-footer>
</template>
<script>
    export default {
        name : "fotter"
    }
</script>

<style scoped>
    strong{

        font-family: logofont;
    }
</style>
