<template>
    <div class="container">
      <h2>{{ title }}</h2>
      <input type="text" placeholder="email@example.com">
      <input type="password" placeholder="password">
      <button @click="login">{{ loginButtonText }}</button>
      <router-link to="/register">{{ registerLinkText }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginBox',
    props: {
      title: String,
      loginButtonText: String,
      registerLinkText: String,
    },
    methods: {
      login() {
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    width: 80vw;
    height: 50vh;
    background-color: var(--ShinyShamrock);
  }
  </style>