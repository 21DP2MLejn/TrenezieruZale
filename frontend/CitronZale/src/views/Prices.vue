<template>
<main>
    <div>
        <NavBar />
    </div>
    <div class="prices-container">
        <div class="card regular">
            <h2>Regular</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="card flex">
            <h2>Flex</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        </div>
        <div class="card super">
            <h2>Super</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div class="card deluxe">
            <h2>Deluxe</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
</main>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components:{
    NavBar,
},
}
</script>

<style scoped>

</style>