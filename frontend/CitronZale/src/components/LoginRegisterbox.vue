<template>
    <div class="container">
        <h2>Login/SignUp</h2>
        <input type="text" placeholder="email@example.com">
        <input type="password" placeholder="password">
        <router-link>Log In</router-link>
        <router-link to="/register">Dont have an account? Register.</router-link>
    </div>
</template>

<script>
export default{
    name: 'LoginBox',
}
</script>

<style scoped>
</style>