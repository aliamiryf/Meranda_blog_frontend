<template>
    <v-carousel :height="height" cycle  class="mt-5 sliderComponent" v-model="model"  hide-delimiter-background hide-delimiters>
        <v-carousel-item
                v-for="(color, i) in colors"
                :key="i"
        >
            <center>
                <div class="sliderItem">
                    <v-row>
                        <v-col cols="12" lg="6">
                            <div class="sliderItem_image"></div>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <div class="sliderItem_text">
                                <p class="sliderItem_label">منتخب ادمین</p>
                                <h4>آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت</h4>
                                <p class="sliderItem_caption">محبوبیت زبان برنامه نویسی جاوا اسکریپت به علت عملکرد غنی
                                    آن روز به روز در حال افزایش است. فریم ورک های جاوا اسکریپت را امروزه می توان در
                                    طراحی فرانت اند و بک اند پروژه های تحت وب مورد استفاده قرار داد که این مسئله به شما
                                    کمک می کند تا بتوانید رابط های کاربری ساده و کاربر پسندی را طراحی کنید.</p>
                                <p class="writer_area">
                                    <b>علی امیری </b>
                                    در
                                    <b>برنامه نویسی وب </b>
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </center>
        </v-carousel-item>
    </v-carousel>
</template>
<script>
    export default {
        name: "slider",
        data: function () {
            return{
                colors: [
                    'primary',
                    'secondary',
                    'yellow darken-2',
                    'red',
                    'orange',
                ],
                height:null,
            }
        },
        mounted() {
            if (window.outerWidth > 800){
                this.height = 350
            }else{
                this.height = 500
            }
        }
    }
</script>
