<template>
<main>
    <div>
        <NavBar />
    </div>
    <div class="select-period">
        <button id="longterm period" @click="changeColor('longterm')">Long-term</button>
        <button id="indefinite period" @click="changeColor('indefinite')">Indefinite period</button>
    </div>
    <div class="prices-container">
        <div class="card regular" id="regularsub">
            <h2>Regular</h2>
            <h3>Price: 14.99$</h3>
            <p>Advantages</p>
            <ul>
                <li>Unlimited visit 24/7</li>
                <li>Membership freeze</li>
                <li>Rewrite membership to another person</li>
                <li>Minimal period of contract: 12months</li>
            </ul>
            <button id="buyregular">BUY NOW</button>
        </div>
        <div class="card flex" id="flexsub">
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
            <button id="buyflex">BUY NOW</button>
        </div>
        <div class="card super" id="supersub">
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
            <button id="buysuper">BUY NOW</button>
        </div>
        <div class="card deluxe" id="deluxesub">
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
            <button id="buydeluxe">BUY NOW</button>
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
  methods: {
    changeColor(buttonClicked) {
      var longtermButton = document.getElementById('longterm period');
      var indefiniteButton = document.getElementById('indefinite period');
      var regulersub = document.getElementById('regularsub');
      var flexsub = document.getElementById('flexsub');
      var supersub = document.getElementById('supersub');
      var deluxesub = document.getElementById('deluxesub');

      if (buttonClicked === 'longterm') {
        longtermButton.style.backgroundColor = 'var(--ShinyShamrock)';
        longtermButton.style.color = 'black';
        indefiniteButton.style.backgroundColor = '';
        indefiniteButton.style.color = '';
        regulersub.style.display = 'block';
        flexsub.style.display = 'block';
        supersub.style.display = 'block';
        deluxesub.style.display = 'block';

      } else if (buttonClicked === 'indefinite') {
        indefiniteButton.style.backgroundColor = 'var(--ShinyShamrock)';
        indefiniteButton.style.color = 'black';
        longtermButton.style.backgroundColor = '';
        longtermButton.style.color = '';
        regulersub.style.display = 'none';
        flexsub.style.display = 'none';
      }
    }
  }
};
</script>

<style scoped>


.select-period{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.15rem solid var(--PastelGreen);
    border-radius: 32px;
    padding: 1.1rem;
    width: 17rem;
    background-color: transparent;
    position: relative;
    top: 5rem;
    margin: 0 auto;
    height: 4rem;
}

.select-period button{
    height: 2.8rem;
    margin: 2px;
    background-color: transparent;
}


button{
    width: 8rem;
    height: 1.8rem;
    border-radius: 1rem;
    border: 0.15rem solid var(--PastelGreen);
    margin-bottom: 1rem;
    transition: 0.3s ease-in-out;
}

button:hover{
    transform: scale(1.05);
}
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