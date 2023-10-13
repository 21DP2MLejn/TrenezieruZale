<template>
    <div class="container">
        <div class="card-about">
            <div class="introduction">
                <h2>
                    Introduction    
                </h2>
                <p></p>
            </div>
            <img src="../assets/Images/gym_picture7.jpg" alt="image" id="background-image">
        </div>
        <div class="image">
            <img src="" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'introduction'
}
</script>

<style scoped>
    .container{
        width: 100vw;
        height: 100vh;
        position: relative;
        background-color: var(--White);
        left: 0;
        margin: 0;
        padding: 0;
    }

    .introduction{
        width: 22rem;
        height: 28rem;
        background-color: var(--ShinyShamrock);
        border-radius: 2rem;
        padding: 1.5rem;
        z-index: 10000000;
        position: absolute;
        right: 25vw;
        top: 2rem;

    }

    img{
        width: 45vw;
        height: 60vh;
    }

    #background-image{
        position: absolute;
        left: 36vw;
    }

</style>