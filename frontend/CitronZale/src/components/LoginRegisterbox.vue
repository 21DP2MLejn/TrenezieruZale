<template>
    <div class="container">
      <h2>{{ title }}</h2>
      <input type="text" placeholder="email@example.com">
      <input type="password" placeholder="password">
      <button @click="login">{{ loginButtonText }}</button>
      <router-link to="/register">{{ registerLinkText }}</router-link>
      <router-link to="/login">{{ loginLinkText }}</router-link>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginBox',
    props: {
      title: String,
      loginButtonText: String,
      registerLinkText: String,
      loginLinkText: String,
    },
    methods: {
      login() {
      },
    },
  };
  </script>
  
  <style scoped>

  button{
    width: 6rem;
    height: 1.8rem;
    border-radius: 1rem;
    border: 0.15rem solid var(--PastelGreen);
    margin-bottom: 1rem;
  }

  button:hover{
    transform: scale(1.05);
}

  input{
    width: 16rem;
    height: 1.8rem;
    padding-left: 1rem;
    border-radius: 1rem;
    border: 0.15rem solid var(--PastelGreen);
    margin-bottom: 1rem;
  }
  .container {
    width: 30vw;
    height: 50vh;
    background-color: var(--ShinyShamrock);
    border-radius: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  </style>