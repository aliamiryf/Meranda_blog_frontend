<template>
    <div class="mb-7 horizontalPost">
        <v-row class="horizontalPost">
            <v-col cols="4">
                <div class="image_area"  v-bind:style="{ backgroundImage: 'url(' + image + ')' }">></div>
            </v-col>
            <v-col cols="8">
               <div class="title_area">
                   <h5>{{title}}</h5>
               </div>
                <p class="writer_area mt-5">
                    <b>{{writer}}</b>
                    در
                    <b>{{category}}</b>
                </p>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name : "horizontalPost",
        props:{
            image: String,
            title: String,
            writer:String,
            writer_path:String,
            category:String,
            category_path:String,
            path:String,
        }
    }
</script>
<!--<img src="https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp" width="100%" alt="">-->
<style scoped>
    .horizontalPost{
        height: 100px;
        /*background: red;*/
    }
    .image_area{
        background: black;
        height: 100px;
        background-size: cover !important;
        background-position: center;
        background: url("https://preview.colorlib.com/theme/meranda/images/ximg_h_1.jpg.pagespeed.ic.IUFbLUay1G.webp");
    }
    .title_area{
        height: 50px;
        overflow: hidden;
        line-height: 25px;
    }
    .horizontalPost{
        font-family: main;
        text-align: right;
    }
</style>
