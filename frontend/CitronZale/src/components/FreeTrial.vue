<template>
    <div class="container">
        <div class="free-trial">
            <h1>Not ready to start? Get 3 day free trial.</h1>
            <p>By submitting this free training form, you agree to receive marketing information. You can withdraw your consent at any time by contacting help@citronzale.com .</p>
            <input type="text" name="" id="" placeholder="Your email">
            <button type="submit">GET FREE TRIAL</button>
        </div>
    </div>
</template>

<script>
export default{
    name: 'freetrial',
}
</script>

<style scoped>

.container{
    width: 100vw;
    height: auto;
    background-color: var(--ShinyShamrock);
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 1rem;
}

input{
    width: 16rem;
    height: 2rem;
    padding-left: 1rem;
    border-radius: 1rem;
    border: 0.15rem solid var(--PastelGreen);
    margin-bottom: 1rem;
    outline: none;
  }

  button{
    width: 8rem;
    height: 1.8rem;
    border-radius: 1rem;
    border: 0.15rem solid var(--PastelGreen);
    margin-bottom: 1rem;
    transition: 0.3s ease-in-out;
    margin-left:  1rem; ;
  }

  button:hover{
    transform: scale(1.1);
}

</style>