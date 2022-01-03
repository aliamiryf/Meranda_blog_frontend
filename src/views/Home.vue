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
                                                image="https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp"
                                                title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                                caption="محبوبیت زبان برنامه نویسی جاوا اسکریپت به علت عملکرد غنی آن روز به روز در حال افزایش است. فریم ورک های جاوا اسکریپت را امروزه می توان در طراحی فرانت اند و بک اند پروژه های تحت وب مورد استفاده قرار داد که این مسئله به شما کمک می کند تا بتوانید رابط های کاربری ساده و کاربر پسندی را طراحی کنید."
                                                writer="علی امیری"
                                                category="برنامه نویسی"
                                        />
                                    </v-col>
                                    <v-col cols="12" lg="6">
                                        <horizontal-post
                                                image="https://preview.colorlib.com/theme/meranda/images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp"
                                                title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                                category="طراحی وب "
                                                writer="علی امیری"
                                        />
                                        <horizontal-post
                                                image="https://preview.colorlib.com/theme/meranda/images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp"
                                                title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                                category="طراحی وب "
                                                writer="علی امیری"
                                        />
                                        <horizontal-post
                                                image="https://preview.colorlib.com/theme/meranda/images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp"
                                                title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                                category="طراحی وب "
                                                writer="علی امیری"
                                        />

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
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                                    class="mt-5"
                            />
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                            />
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                            />

                        </v-col>
                        <v-col cols="12" lg="6">
                            <div class="categoryPostTitle">
                                <h4 class="title_trend">گرافیک </h4>
                            </div>
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/ximg_v_2.jpg.pagespeed.ic.LvRqrfFXI1.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                                    class="mt-5"
                            />
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/xbig_img_1.jpg.pagespeed.ic.K2N7KNYATl.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                            />
                            <horizontal-post
                                    image="https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp"
                                    title="آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت"
                                    category="طراحی وب "
                                    writer="علی امیری"
                            />

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
    export default {
        name: 'Home',
        components: {Loader, Fotter, Trends, HorizontalPost, VerticalPost, Slider, Navbar},
        data: function () {
            return {
                model: 0,
                isload:false,
                date: [],
                sliderData : []
            }
        },
        mounted() {
            this.apiHandler()
        },
        methods:{
            async apiHandler(){
                this.isload = true
                const response = await axios.get('http://simba-market.ir/theme/meranda/api/main/index')
                if (response.status == 200){
                    this.isload = false
                    this.sliderData = response.data.lastpost
                }
            }
        }
    }
</script>
