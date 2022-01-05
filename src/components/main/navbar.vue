<template>
    <div>
        <v-app-bar app elevation="0" class="com_appbar hidden-sm-and-down">
            <v-container style="text-align: center;">
                <v-row>
                    <v-col cols="9" class="">
                        <ul class="listMenuCom">
                            <li @click="searchBox = !searchBox"><p class="searchNavbar">جست و جو </p></li>
                            <li>درباره ما</li>
                            <li>
                                <router-link to="/category/web_developer">
                                    طراحی وب
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/category/graphic">
                                    گرافیک
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/category/network">
                                    شبکه
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/category/programming">
                                    برنامه نویسی
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/">
                                    خانه
                                </router-link>
                            </li>
                        </ul>
                    </v-col>
                    <v-col cols="3">
                        <router-link to="/" style="color: inherit;text-decoration: none">
                            <h4 class="logoText">Meranda</h4>
                        </router-link>
                    </v-col>
                </v-row>
            </v-container>
            <v-dialog
                    v-model="searchBox"
                    fullscreen
                    hide-overlay
                    transition="dialog-bottom-transition"
                    overlay-color="black"
            >
                <v-card dark>
                    <p style="padding: 20px" @click="searchBox = !searchBox"><i class="fas fa-times"></i></p>
                    <div class="searchArea">
                        <v-row>
                            <v-col cols="9">
                                <v-text-field placeholder="جست و جو در میراندا"></v-text-field>
                            </v-col>
                            <v-col cols="3">
                                <v-btn color="white" elevation="0"><i class="fas fa-search" style="color:#000;"></i>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-card>
            </v-dialog>
        </v-app-bar>
        <div class="hidden-md-and-up">
            <v-app-bar elevation="0">
                <v-row>
                    <v-col cols="6" sm="6" style="text-align: right;margin-top: 5px">
                        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    </v-col>
                    <v-col cols="6" sm="6">
                        <router-link to="/" style="color: inherit;text-decoration: none">
                            <h4 class="logoText">Meranda</h4>
                        </router-link>
                    </v-col>

                </v-row>
            </v-app-bar>
            <v-navigation-drawer
                    v-model="drawer"
                    absolute
                    temporary
                    right>
                <v-divider></v-divider>
                <v-list dense>
                    <v-list-item>خانه</v-list-item>
                    <v-list-item>برنامه نویسی</v-list-item>
                    <v-list-item>شبکه</v-list-item>
                    <v-list-item>گرافیک</v-list-item>
                    <v-list-item>طراحی وب</v-list-item>
                    <v-list-item>درباره ما</v-list-item>
                    <v-list-item @click="searchBox = !searchBox"><p class="searchNavbar">جست و جو </p></v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data: function () {
            return {
                searchBox: false,
                drawer: false
            }
        }
    }
</script>

<style scoped>
    .logoText {
        color: inherit !important;
    }

    a {
        color: inherit !important;
        text-decoration: none;
    }
</style>
