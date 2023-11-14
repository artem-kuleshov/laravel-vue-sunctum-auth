<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link :to="{name:'user.login'}" class="nav-link">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'user.registration'}" class="nav-link">Registration</router-link>
                </li>
                <li class="nav-item" >
                    <router-link :to="{name:'get'}" class="nav-link">Get</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
}
</script>

<style scoped>

</style>
