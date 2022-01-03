<template>
    <div>
        <div class="trends_item">
            <v-row>
                <v-col cols="2">
                    <div class="counter">01</div>
                </v-col>
                <v-col cols="10">
                    <div class="caption">
                        <p> آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت</p>
                    </div>
                    <p class="writer_area">
                        <b>علی امیری</b>
                        در
                        <b>شبکه</b>
                    </p>
                </v-col>
            </v-row>
        </div>
        <div class="trends_item">
            <v-row>
                <v-col cols="2">
                    <div class="counter">02</div>
                </v-col>
                <v-col cols="10">
                    <div class="caption">
                        <p> آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت</p>
                    </div>
                    <p class="writer_area">
                        <b>علی امیری</b>
                        در
                        <b>شبکه</b>
                    </p>
                </v-col>
            </v-row>
        </div>
        <div class="trends_item">
            <v-row>
                <v-col cols="2">
                    <div class="counter">03</div>
                </v-col>
                <v-col cols="10">
                    <div class="caption">
                        <p> آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت</p>
                    </div>
                    <p class="writer_area">
                        <b>علی امیری</b>
                        در
                        <b>شبکه</b>
                    </p>
                </v-col>
            </v-row>
        </div>
        <div class="trends_item">
            <v-row>
                <v-col cols="2">
                    <div class="counter">04</div>
                </v-col>
                <v-col cols="10">
                    <div class="caption">
                        <p> آشنایی با 6 مورد از بهترین فریم ورک های جاوا اسکریپت</p>
                    </div>
                    <p class="writer_area">
                        <b>علی امیری</b>
                        در
                        <b>شبکه</b>
                    </p>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "trends"
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
