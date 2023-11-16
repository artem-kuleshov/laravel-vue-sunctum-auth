<template>
    <div class="container">
        <Navbar ref="navbar" />
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
import Navbar from "./Includes/Navbar.vue";
export default {
    name: "App",
    components: {Navbar},
    updated() {
        this.$refs.navbar.token = localStorage.getItem('x_xsrf_token')
    }
}
</script>

<style scoped>

</style>
