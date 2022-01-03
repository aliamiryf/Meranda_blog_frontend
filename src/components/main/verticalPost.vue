<template>
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
            path:String,
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
</style>
