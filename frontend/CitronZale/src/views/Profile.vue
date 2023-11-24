<template>
    <div class="navbar">
        <NavBar />
    </div>
    <div class="container">
        <div class="user-details">
            <input type="text" class="name" placeholder="Name">
            <input type="text" class="lastname" placeholder="Lastname">
            <input type="date" class="birthdate" placeholder="Birthdate">
        </div>
        <div class="user-contact">
            <input type="text" class="email" placeholder="E-mail">
            <input type="text" class="phone-number" placeholder="Phone Number">
        </div>
        <div class="user-guardian">
            <input type="text" class="guardian-name" placeholder="Guardian Name">
            <input type="text" class="guardian-lastname" placeholder="Guardian Lastname">
            <input type="text" class="guardian-email" placeholder="Guardian E-mail">
            <input type="text" class="guardian-country" placeholder="Country" v-show="country">
            <button id="choosecountry" @click="ShowCountry">Country</button>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default{
    components:{
    NavBar,
},
data(){
    return{
        country: false
    }
},
method:{
    ShowCountry(){
        this.country = !this.country;

    }
}

}
</script>

<style scoped>
.container{
    position: relative;
}

.navbar{
    position: relative;
    margin: 0;
    padding: 0;
    left: 0;
    top: 0;
}

</style>