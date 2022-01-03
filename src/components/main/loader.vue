<template>
    <div>
        <v-dialog
                v-model="loadering"
                width="500"
        >
            <v-card color="black" style="padding: 20px">
                <v-progress-linear
                        indeterminate
                        color="white"
                ></v-progress-linear>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name :"loader",
        data:function(){
            return{
                test:true
            }
        },
        props:{
            loadering:Boolean
        },
        mounted() {
          console.log(this.loadering)
        }
    }
</script>

<style scoped>

</style>
