<template>
    <div>
      <LoginBox
        :title="'Register Page'"
        :loginButtonText="'Sign Up'"
        :loginLinkText="'Already have an account? Login.'"
      />
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

  <style scoped></style>