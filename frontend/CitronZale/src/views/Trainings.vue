<template>
<main>
    <div class="navbar">
        <NavBar />
    </div>
    <div class="image-container">
        <div class="title"> <h1>EXPLORE OUR WORKOUTS</h1></div>
        <img src="../assets/Images/group_workout.png">
    </div>
    <div class="card-container">
        <div class="card group"> Group Trainings</div>
        <div class="card personal">Personal Trainings</div>
        <div class="card trainers">Trainers</div>
    </div>
</main>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default{
    components:{
        NavBar,
    }
}
</script>

<style scoped>

main{
    padding: 0;
    margin: 0;

}
.image-container, .card-container{
    width: 100vw;
    padding: 0;
    margin: 0;
    position: relative;
    left: -8px;
    top: 4.2rem;
    margin-bottom: 4rem;
}

.image-container .title {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   color: var(--White);
   text-align: center;
   z-index: 100;
   width: 26vw;
}

img{
    width: 100%;
    padding: 0;
    margin: 0;
    position: relative;
}

h1{
    font-weight: var(--font-bold);
    font-size: 5vw;
}

.card-container{
    width: 100vw;
    height: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap ;
}

.card{
    border-radius: 25px;
    margin: 2rem;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-content: center;
    width: 20rem;
    height: 30rem;
    background-color: var(--ShinyShamrock);
    display: inline-flex;
    margin: 1rem;
    position: relative;
    color: white;
}

@media (max-width: 1076px){
    .card{
        width: 15rem;
        height: 25rem;
    }
}

</style>