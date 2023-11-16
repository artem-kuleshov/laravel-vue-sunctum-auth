<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <template v-if="token">
                    <li class="nav-item" >
                        <router-link :to="{name:'get'}" class="nav-link">Get</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'user.personal'}" class="nav-link">Personal</router-link>
                    </li>
                </template>
                <template v-if="!token">
                    <li class="nav-item">
                        <router-link :to="{name:'user.login'}" class="nav-link">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'user.registration'}" class="nav-link">Registration</router-link>
                    </li>
                </template>

                <li class="nav-item" v-if="token">
                    <a @click.prevent="logout" class="nav-link" href="javascript:void(0)">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import axios from "axios";

export default {
    name: "Navbar",

    data() {
        return {
            token: null
        }
    },

    mounted() {
        this.getToken()
    },

    methods: {
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token')
        },

        logout() {
            axios.post('/api/logout')
            .then(res => {
                localStorage.removeItem('x_xsrf_token')
                this.$router.push({ name: 'user.login' })
            })
        }
    }
}
</script>

<style scoped>

</style>
