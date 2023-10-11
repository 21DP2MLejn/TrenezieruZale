<template>
<body>
  <NavBar />
  <ImageSlider />
  <Reasons />
</body>
</template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import ImageSlider from '../components/ImageSlider.vue';
  import Reasons from '../components/Reasons.vue';
  
  export default {
    components: {
      NavBar,
      ImageSlider,
      Reasons,
    },
  };
  </script>

<style scoped>

html

body{
    background-color: var(--TeaGreen);
    width: 100vw;
    height: 100vh;
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
}

</style>