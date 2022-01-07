<template>
    <v-app>
        <navbar/>
        <v-main class="mainArea">
            <loader :loadering="isload"/>
            <slider v-if="sliderData != []" :data="sliderData"/>
            <br>
            <center>
                <div class="default_contianer">
                    <v-row>
                        <v-col cols="12" lg="8">
                            <div class="editorpick">
                                <h4 class="title_editorpick">پیشنهاد سردبیر</h4>
                                <v-row class="mt-4">
                                    <v-col cols="12" lg="6">
                                        <vertical-post
                                                :image="suggest[0].suggestion_post.index_pricture"
                                                :title="suggest[0].suggestion_post.title"
                                                :caption="suggest[0].suggestion_post.description"
                                                :writer="suggest[0].suggestion_post.writer.name"
                                                :category="suggest[0].suggestion_post.category.title"
                                                :slug="suggest[0].suggestion_post.slug"
                                        />
                                    </v-col>
                                    <v-col cols="12" lg="6">
<!--                                        {{// suggest.}}-->
                                        <div v-for="(item , i) in suggest" :key="i">
                                            <horizontal-post
                                                    v-if="item.suggestion_post.id != suggest[0].suggestion_post.id "
                                                    :image="item.suggestion_post.index_pricture"
                                                    :title="item.suggestion_post.title"
                                                    :category="item.suggestion_post.category.title"
                                                    :writer="item.suggestion_post.writer.name"
                                            />

                                        </div>

                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                        <v-col cols="12" lg="4">
                            <div class="trends">
                                <h4 class="title_trend">محبوب ترین ها </h4>
                                <trends/>
                            </div>
                        </v-col>
                    </v-row>
                    <br>
                    <v-row>
                        <v-col cols="12" lg="6">
                            <div class="categoryPostTitle">
                                <h4 class="title_trend">شبکه </h4>
                            </div>
                            <div v-for="(item , i) in network[0].posts" :key="i" class="mt-1">
                                <horizontal-post
                                        :image="item.index_pricture"
                                        :title="item.title"
                                        :category="item.category.title"
                                        :writer="item.writer.name"
                                />
                            </div>

                        </v-col>
                        <v-col cols="12" lg="6">
                            <div class="categoryPostTitle">
                                <h4 class="title_trend">طراحی وب  </h4>
                            </div>
                            <div v-for="(item , i) in web_developer[0].posts" :key="i" class="mt-1">
                                <horizontal-post
                                        :image="item.index_pricture"
                                        :title="item.title"
                                        :category="item.category.title"
                                        :writer="item.writer.name"
                                />
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </center>
        </v-main>
        <br>
        <fotter/>
    </v-app>

</template>

<script>

    import Navbar from "../components/main/navbar";
    import Slider from "../components/index/slider";
    import VerticalPost from "../components/main/verticalPost";
    import HorizontalPost from "../components/main/horizontalPost";
    import Trends from "../components/main/tends";
    import Fotter from "../components/main/fotter";
    import axios from 'axios';
    import Loader from "../components/main/loader";
    // import {ajaxGet} from "../utils/utilities";
    export default {
        name: 'Home',
        components: {Navbar , Loader , Slider , VerticalPost , HorizontalPost , Trends , Fotter},
        data: function () {
            return {
                model: 0,
                isload: false,
                date: [],
                sliderData: [],
                suggest: [],
                network: [],
                web_developer: [],
            }
        },
        mounted() {
            this.apiHandler()
        },
        methods: {
            async apiHandler() {
                this.isload = true
                const response = await axios.get('http://simba-market.ir/theme/meranda/api/main/index')
                if (response.status == 200) {
                    this.isload = false
                    this.sliderData = response.data.lastpost
                    this.suggest = response.data.suggest
                    this.network = response.data.network
                    this.web_developer = response.data.web_developer
                    // console.log(this.network[0].posts)
                }
            }
        }
    }
</script>
