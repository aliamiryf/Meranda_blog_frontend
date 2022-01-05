<template>

    <v-app>
        <navbar/>
        <loader :loadering="isload"/>
        <v-main class="mainArea">
            <center>
                <div class="default_contianer mt-4">
                    <h3>{{data.title}}</h3>
                    <v-row class="mt-5">
                        <v-col cols="12" lg="4" v-for="(item , i) in data.posts" :key="i">
                            <!--                            {{item.title}}-->
                            <vertical-post
                                    :image="item.index_pricture"
                                    :title="item.title"
                                    :caption="item.description"
                                    :writer="item.writer.name"
                                    :category="item.category.title"
                                    :slug="item.slug"
                            />
                        </v-col>
                    </v-row>
                </div>
            </center>
        </v-main>
        <fotter/>
    </v-app>
</template>

<script>
    import axios from "axios";
    import Loader from "../components/main/loader";
    import Navbar from "../components/main/navbar";
    import VerticalPost from "../components/main/verticalPost";
    import Fotter from "../components/main/fotter";

    export default {
        name: "category",
        components: {Fotter, Navbar, Loader, VerticalPost},
        props: {
            slug: String,
        },
        data: function () {
            return {
                isload: false,
                data: [],
            }
        },

        mounted() {
            this.apiHandler()
        },
        methods: {
            async apiHandler() {
                this.isload = true
                const response = await axios.get('http://simba-market.ir/theme/meranda/api/main/postBycategory?slug=' + this.slug)
                if (response.status == 200) {
                    this.isload = false
                    this.data = response.data[0]
                    // console.log(this.data.posts.title)
                    // console.log(response.data.title)
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
    h3 {
        font-family: main;
        font-weight: bolder;
    }
</style>
