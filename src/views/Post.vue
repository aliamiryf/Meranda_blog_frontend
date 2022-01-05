<template>
    <v-app>
        <navbar/>
        <v-main class="mainArea">
            <loader :loadering="isload" />
            <center>
                <div class="default_contianer mt-5" >
                    <v-row>
                        <v-col cols="12" lg="8">
                            <div class="titleArea">
                                <img :src="data.index_pricture" width="100%" alt="">
                                <h3>{{data.title}}</h3>
                                <p>
                                    <b>{{data.writer.name}}</b>
                                    در
                                    <b>{{data.category.title}}</b>
                                </p>
                            </div>
                            <div class="contentArea">
                                <p>
                                    {{data.body}}
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="4">
                            <h4 class="title_trend">محبوب ترین ها </h4>
                            <trends class="mt-5"/>
                        </v-col>
                    </v-row>
                </div>
            </center>
        </v-main>
        <fotter/>
    </v-app>
</template>

<script>
    import Navbar from "../components/main/navbar";
    import Trends from "../components/main/tends";
    import axios from "axios";
    import Loader from "../components/main/loader";
    import Fotter from "../components/main/fotter";

    export default {
        name: "post",
        components: {Fotter, Loader, Trends, Navbar},
        props: {
            slug: Number,
        },
        data:function(){
            return{
                data:[],
                isload:false,
            }
        },
        mounted() {
            this.apiHandler()
        },
        methods:{
            async apiHandler() {
                this.isload = true
                const response = await axios.get('http://simba-market.ir/theme/meranda/api/main/post/'+this.slug)
                if (response.status == 200) {
                    this.isload = false;
                    this.data = response.data[0];
                    console.log(this.data)
                }
            }
        },
        watch:{
            '$route.params.slug'(){
                this.apiHandler()
            }
        }
    }
</script>

<style scoped>
    .titleArea {
        font-family: main;
    }

    .contentArea {
        font-family: main;
        line-height: 45px;
        text-align: justify;
        /*font-size: ;*/
    }

    .titleArea img {
        border-radius: 10px;
    }

    .titleArea h3 {
        text-align: right;
        margin: 20px 0px 10px 0px;
    }

    .titleArea p {
        text-align: right;
        font-size: 12px;
    }
    /*a{*/
    /*    color: inherit !important;*/
    /*}*/
</style>
