<template>
    <div>
        <div class="trends_item" v-for="(item , i) in data" :key="i">
            <v-row>
                <v-col cols="2">
                    <div class="counter" v-text="'0'+(parseInt(i)+1)"></div>
                </v-col>
                <v-col cols="10">
                    <div class="caption">
                        <p>{{item.title}}</p>
                    </div>
                    <p class="writer_area">
                        <b>{{item.writer.name}}</b>
                        در
                        <b>{{item.category.title}}</b>
                    </p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "trends",
        data:function(){
            return{
                data:[]
            }
        },
        mounted() {
            this.apiHandler();
        },
        methods:{
            async apiHandler(){
                const response = await axios.get('http://simba-market.ir/theme/meranda/api/main/trends')
                if (response.status == 200) {
                    this.data = response.data
                    console.log(this.data)
                }
            }
        }
    }
</script>

<style scoped>
    .counter {
        font-family: logofont;
        font-size: 40px;
        color: #ccc;
    }

    .trends_item {
        /*padding: 20px;*/
    }
    .caption{
        font-family: main !important;
        text-align: right;
        margin-top: 5px;
        overflow: hidden;
        height: 45px;
        line-height: 23px;
    }
    .writer_area{
        /*margin-top: -15px;*/
        text-align: right;
    }
</style>
