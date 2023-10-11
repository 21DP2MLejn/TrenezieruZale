<template>
<body>
    <NavBar />
    <div class="container">
      <ImageSlider />
      <div class="text-container">
      </div>
    </div>
  </body>
</template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import ImageSlider from '../components/ImageSlider.vue';
  
  export default {
    components: {
      NavBar,
      ImageSlider,
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