<template>
<main>
    <div>
        <NavBar />
    </div>
    <div class="prices-container">
        <div class="card regular">
            <h2>Regular</h2>
            <h3>Price: 14.99$</h3>
            <p>Advantages</p>
            <ul>
                <li>Unlimited visit 24/7</li>
                <li>Membership freeze</li>
                <li>Rewrite membership to another person</li>
                <li>Minimal period of contract: 12months</li>
            </ul>
        </div>
        <div class="card flex">
            <h2>Flex</h2>
            <h3>Price: 19.99$</h3>
            <p>Advantages</p>
            <ul>
                <li>Unlimited visit 24/7</li>
                <li>Membership freeze</li>
                <li>Rewrite membership to another person</li>
                <li>Intro training</li>
                <li>Minimal period of contract: 12months</li>
            </ul>

        </div>
        <div class="card super">
            <h2>Super</h2>
            <h3>Price: 24.99$</h3>
            <p>Advantages</p>
            <ul>
                <li>Unlimited visit 24/7</li>
                <li>Membership freeze</li>
                <li>Rewrite membership to another person</li>
                <li>Intro training</li>
                <li>Group trainings</li>
                <li>Sauna</li>
                <li>Unlimited period of contract</li>
            </ul>
        </div>
        <div class="card deluxe">
            <h2>Deluxe</h2>
            <h3>Price: 29.99$</h3>
            <p>Advantages</p>
            <ul>
                <li>Unlimited visit 24/7</li>
                <li>Membership freeze</li>
                <li>Rewrite membership to another person</li>
                <li>Intro training</li>
                <li>Group trainings</li>
                <li>Sauna</li>
                <li>Pool access</li>
                <li>Water refill every 20 minutes</li>
                <li>Unlimited period of contract</li>
            </ul>
        </div>
    </div>
    <div class="trial">
        <FreeTrial />
    </div>
</main>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import FreeTrial from '../components/FreeTrial.vue';
export default {
    components:{
    NavBar,
    FreeTrial,
},
}
</script>

<style scoped>

  .prices-container {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: row;
    position: relative;
    top: 5rem;
    flex-wrap: wrap; 
  }

  .card {
    max-width: 22rem; 
    width: 100%; 
    background-color: var(--ShinyShamrock);
    position: relative;
    margin: 2rem;
    border-radius: 2rem;
    padding: 1rem;
  }

  .trial{
    position: relative;
    top: 20rem;
    left: 0;
    margin: 0;
    padding: 0;

  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
    }
  }
</style>