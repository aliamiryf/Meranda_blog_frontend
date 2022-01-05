<template>
    <router-link :to="postpath">
        <div>
            <img :src="image"
                 width="100%" alt="">
            <div class="details_area mt-3">
                <h5>{{title}}</h5>
                <div class="caption">
                    <p>{{caption}}</p>
                </div>
                <p class="writer_area">
                    <b>{{writer}}</b>
                    در
                    <b>{{category}}</b>
                </p>
            </div>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "verticalPost",
        props: {
            image: String,
            title: String,
            caption:String,
            writer:String,
            writer_path:String,
            category:String,
            category_path:String,
            slug:String,
        },
        data:function () {
            return{
                postpath: "/post/" + this.slug,
            }
        }

    }
</script>

<style scoped>
    p {
        font-size: 11px;
        line-height: 25px;
        text-align: justify;
    }

    .caption {
        font-family: main !important;
        height: 80px;
        overflow: hidden;
    }
    h5{
        text-align: right !important;
        font-family: main;
    }
    .writer_area{
        font-family: main;
    }
    img{
        height: 200px;
    }
    a{
        color: inherit !important;
        text-decoration: none !important;
    }
</style>
