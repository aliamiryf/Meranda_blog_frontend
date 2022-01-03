<template>
    <v-carousel :height="height" cycle  class="mt-5 sliderComponent" v-model="model"  hide-delimiter-background hide-delimiters>
        <v-carousel-item
                v-for="(item,i) in data" :key="i">
            <center>
                <div class="sliderItem" >
                    <v-row>
                        <v-col cols="12" lg="6">
                            <div class="sliderItem_image" v-bind:style="{ backgroundImage: 'url(' + item.index_pricture + ')' }" ></div>
                        </v-col>
                        <v-col cols="12" lg="6">
                            <div class="sliderItem_text">
                                <p class="sliderItem_label">{{item.category.title}}</p>
                                <h4>{{item.title}}</h4>
                                <p class="sliderItem_caption">
                                    {{item.description}}
                                </p>
                                <p class="writer_area">
                                    <b>{{item.writer.name}} </b>
                                    در
                                    <b>
                                        {{item.category.title}}
                                    </b>
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
        props:{
          data:Object,
        },
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
            console.log(this.data)
        }
    }
</script>
