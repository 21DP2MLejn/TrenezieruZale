<template>
    <div class="container">
      <div class="image-container">
        <img src="../assets/Images/gym_picture7.jpg" alt="image" id="background-image">
      </div>
      <div class="introduction">
        <h2>Introduction</h2>
        <p>Welcome to Citronzale Gym, where fitness takes center stage. At Citronzale, we're not just a gym; we're a community committed to your well-being. Our state-of-the-art facilities offer a diverse range of equipment and classes, accommodating fitness enthusiasts of all levels. From personalized training sessions to group workouts and the latest in cutting-edge technology, we're here to help you achieve your fitness goals, one step at a time. Our team of experienced trainers and nutrition experts are dedicated to guiding you on your journey to a healthier, stronger you. Join us at Citronzale Gym and embark on a path to a fitter, more vibrant you today.</p>
      </div>
      <div class="image-container2">
        <img src="../assets/Images/gym_picture8.jpg" alt="image">
      </div>
      <div class="about-us">
        <h2>About Us</h2>
        <p>CitronZale is not just a gym; it's a lifestyle transformation hub. At CitronZale, we've redefined fitness as a holistic journey towards health and wellness. Our state-of-the-art facility boasts cutting-edge equipment, expert trainers, and a vibrant atmosphere. We offer a diverse range of fitness programs, from intense cross-training to serene yoga sessions, tailored for individuals of all levels. CitronZale prioritizes not just physical fitness, but also mental and emotional well-being. With a community of motivated members and a commitment to empowering personal growth, we're more than just a gym; we're your path to a healthier, happier, and more fulfilling life. Join CitronZale today and start your transformative journey.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'introduction'
  }
  </script>
  
  <style scoped>
  .container {
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: transparent;
    left: 0;
    margin: 0;
    padding: 0;
    top: 20rem;
    display: flex;
    flex-direction: column; 
    overflow: hidden; 
  }
  
  .introduction {
  width: 22rem;
  max-width: 22rem;
  height: auto;
  background-color: var(--ShinyShamrock);
  border-radius: 2rem;
  padding: 1.5rem;
  z-index: 10000000;
  text-align: center;
  position: relative;
  left: 50rem;
  top: 3rem; 
}

.about-us{
  width: 52rem;
  max-width: 52rem;
  height: auto;
  background-color: var(--ShinyShamrock);
  border-radius: 2rem;
  padding: 1.5rem;
  z-index: 10000000;
  text-align: center;
  position: relative;
  top: 50rem;
  left: 35rem; 
}
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .image-container, .image-container2 {
    width: 100%;
    position: relative;
  }

  .image-container2{
    top: 40rem;
  }
  
  @media (min-width: 721px) {
    .container {
      flex-direction: row; /* Revert to horizontal layout on desktop or larger screens */
    }
  
    .introduction, .about-us {
      max-width: 50%;
      margin-top: 0; 
      position: absolute;
      right: 0; 
    }

  
    .image-container {
      order: 2; /* Change the order to display the first image on the right side */
    }
  
    .image-container2 {
      order: 3; /* Change the order to display the second image at the bottom */
    }
  }
  </style>