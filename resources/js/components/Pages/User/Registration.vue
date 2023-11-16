<template>
    <form class="w-25">
        <input v-model="name" type="text" class="form-control mt-3" placeholder="name" autofocus>
        <div v-if="errors.name" class="form-text text-danger">{{ errors.name }}</div>

        <input v-model="email" type="email" class="form-control mt-3" placeholder="email">
        <div v-if="errors.email" class="form-text text-danger">{{ errors.email }}</div>

        <input v-model="password" type="password" class="form-control mt-3" placeholder="password" autocomplete>
        <div v-if="errors.password" class="form-text text-danger">{{ errors.password }}</div>

        <input v-model="password_confirmation" type="password" class="form-control mt-3" placeholder="password_confirmation" autocomplete>
        <div v-if="errors.password_confirmation" class="form-text text-danger">{{ errors.password_confirmation }}</div>

        <input @click.prevent="register" :disabled="!enableButton" type="button" class="btn btn-primary mt-3" value="Register">
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
    },

    methods: {
        register() {
            this.errors.name = ''
            this.errors.email = ''
            this.errors.password = ''
            this.errors.password_confirmation = ''

            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then(res => {
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN'])
                    this.$router.push({ name: 'user.personal' })
                })
                .catch(err => {
                    // Не прошли валидацию
                    if (err.response.status === 422) {
                        const errors = err.response.data.errors;
                        Object.keys(errors).forEach(key => {
                            this.errors[key] = errors[key][0]
                        });
                    }
                })
            })
        }
    },

    computed: {
        enableButton() {
            return this.name && this.email && this.password && this.password_confirmation
        }
    }
}
</script>

<style scoped>

</style>
