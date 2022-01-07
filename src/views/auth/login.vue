<template>
    <div class="login">

        <loader :loadering="isload"/>
        <div class="loginArea">
            <h4 style="text-align: center !important;" class="logoText">Meranda</h4>
            <v-divider></v-divider>
            <br>
            <v-text-field v-model="email" clearable hint="meranda@meranda.com" filled label="ایمیل"
                          style="direction: rtl !important;"></v-text-field>
            <v-text-field v-model="password" @click:append="show1 = !show1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" filled
                          label="رمز عبور " style="direction: rtl !important;" :type="show1 ? 'text' : 'password'"
            ></v-text-field>
            <v-btn @click="apiHandler" dark style="padding: 20px">
                <div v-if="isload == false">ورود</div>
                <div v-else>
                    <v-progress-circular
                            indeterminate
                            color="primary"
                            size="20"
                    ></v-progress-circular>
                </div>

            </v-btn>
            <br>
            <br>
            <router-link to="register">? حساب کاربری ندارید</router-link>
            <br>
            <router-link to="forgot-password">
                رمز عبور را فراموش کرده اید؟
            </router-link>
            <v-snackbar
                    v-model="errorLoad"
                    color="red"
                    style="text-align: center"
            >
                <p style="text-align: center">{{erroreMessage}}</p>
            </v-snackbar>
        </div>

    </div>
</template>

<script>
    import Loader from "../../components/main/loader";
    import axios from 'axios'
    export default {
        name: "login",
        components: {Loader},
        data: function () {
            return {
                show1: false,
                isload: false,
                errorLoad: false,
                erroreMessage: null,
                email: "aliamiry@gmail.com",
                password: "123456789"
            }
        },
        methods: {
            async apiHandler() {
                this.isload = true
                const article = {
                    'grant_type': 'password',
                    'client_id': '3',
                    'client_secret':'Zi9fvokvWp18C1wSv8BCze6tiuInBQiS5hddgLMw',
                    'username':this.email,
                    'password':this.password,
                    'scope':''
                };
                const response = await axios.post('http://simba-market.ir/theme/meranda/oauth/token' , article)
                console.log(response.data)
            }
        }
    }
</script>

<style scoped>
    @media (min-width: 200px ) and (max-width: 600px) {
        .loginArea {
            width: 90% !important;
        }
    }

    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 100vh;
    }

    .loginArea {
        width: 500px;
        height: 500px;
        background-color: #f8f9fa !important;
        border: 1px solid #eeeeee;
        border-radius: 20px;
        padding: 20px;
    }

    a {
        text-decoration: none;
        color: inherit;

    }
</style>
