<template>
    <Navbar />
    <router-view></router-view>
</template>

<script>
import Navbar from "./Includes/Navbar.vue";
export default {
    name: "App",
    components: {Navbar}
}
</script>

<style scoped>

</style>
