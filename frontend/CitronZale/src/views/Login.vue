<template>
    <div>
      <router-view></router-view>
      <LoginBox />
    </div>
  </template>
  
  <script>
  import LoginBox from '../components/LoginRegisterbox.vue';
  
  export default {
    components: {
      LoginBox,
    },
  }
  </script>