<script>
import HoloList from "../components/HoloList.vue"
import Navbar from "../components/NavBar.vue"

export default {
    name:"HomePage",
    components:{HoloList,Navbar}
}
</script>

<template>
    <Navbar />
    <HoloList />
</template>