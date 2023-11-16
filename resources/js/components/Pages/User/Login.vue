<template>
    <form class="w-25">
        <input v-model="email" type="email" class="form-control mb-3 mt-3" placeholder="email" autofocus>
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <p v-if="error" class="text-danger">{{ error }}</p>
        <input @click.prevent="login" type="button" :disabled="!enableButton" class="btn btn-primary" value="Login">
    </form>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: '',
            password: '',
            error: '',
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/login', {email: this.email, password: this.password})
                    .then(res => {
                        localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({ name: 'user.personal' })
                    })
                    .catch(error => {
                        this.error = error.response.data.message
                    })
            })
        }
    },

    computed: {
        enableButton() {
            return this.email && this.password
        }
    }
}
</script>

<style scoped>

</style>
