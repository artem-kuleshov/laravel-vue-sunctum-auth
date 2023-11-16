<template>
get
</template>

<script>
import axios from "axios";

export default {
    name: "Get",

    mounted() {
        this.getData()
    },

    methods: {
        getData() {
            axios.get('/api/get')
            .then(res => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>

</style>
