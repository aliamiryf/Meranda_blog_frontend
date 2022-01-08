<template>
    <div class="login">

        <loader :loadering="isload"/>
        <div class="loginArea">
            <h4 style="text-align: center !important;" class="logoText">Meranda</h4>
            <v-divider></v-divider>
            <br>
            <v-text-field v-model="name" clearable hint="علی امیری" filled label="نام و نام خانوادگی"
                          style="direction: rtl !important;"></v-text-field>
            <v-text-field v-model="email" clearable hint="meranda@meranda.com" filled label="ایمیل"
                          style="direction: rtl !important;"  type="email"></v-text-field>
            <v-text-field v-model="password" @click:append="show1 = !show1"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" filled
                          label="رمز عبور " style="direction: rtl !important;" :type="show1 ? 'text' : 'password'"
            ></v-text-field>
            <v-text-field v-model="repassword" @click:append="show1 = !show1"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" filled
                          label="تکرار رمز عبور " style="direction: rtl !important;" :type="show1 ? 'text' : 'password'"
            ></v-text-field>
            <v-btn @click="apiHandler" dark style="padding: 20px">
                <div v-if="isload == false">ثبت نام</div>
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
            <router-link to="register">? حساب کاربری دارید</router-link>
            <br>
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
    import axios from "axios";
    import router from "../../router";

    export default {
        name: "register",
        data: function () {
            return {
                show1: false,
                isload: false,
                name: null,
                email: null,
                password: null,
                repassword: null,
                errorLoad: false,
                erroreMessage: null,
                // eslint-disable-next-line no-useless-escape
                reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            }
        },
        methods: {
            sEmailValid: function() {
                return (this.email == "")? "" : (this.reg.test(this.email)) ? true : false;
            },
            async apiHandler() {
                if (this.name == null || this.email == null || this.password == null || this.repassword == null) {
                    this.errorLoad = true
                    this.erroreMessage = "پر کردن فیلد های بالا اجباری است"
                    return;
                }
                if (this.sEmailValid() == false ) {
                    this.errorLoad = true
                    this.erroreMessage = "ایمیلی با ساختار مناسب وارد گنید"
                    return;
                }
                if (this.password != this.repassword) {
                    this.errorLoad = true
                    this.erroreMessage = "رمز عبور و تکرار رمز عبور با یک دیگرر برابر نیستند"
                    return;
                }

                this.isload = true
                const article = {
                    'name':this.name,
                    'email':this.email,
                    'password':this.password
                };
                try {
                    this.response = await axios.post('http://simba-market.ir/theme/meranda/api/main/register' , article)
                    this.errorLoad = true;
                    this.erroreMessage="خوش آمدید"
                    this.isload = false
                    setTimeout(function () {
                        router.push('/login')
                    },3000)
                }catch (e) {
                    this.errorLoad = true;
                    this.erroreMessage="مشکلی پیش آمده است"
                    this.isload = false
                }
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
        height: 650px;
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
