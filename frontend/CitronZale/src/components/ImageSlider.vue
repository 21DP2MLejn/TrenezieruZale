<template>
    <div class="image-slider">
      <div class="slider-image-container">
        <img :key="currentIndex" :src="currentImageSrc" alt="Slider Image" class="slider-image" />
      </div>
      <div class="button-container">
        <button @click="prevImage">Previous</button>
        <button @click="nextImage">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  import gymPicture1 from '@/assets/images/gym_picture3.jpg';
  import gymPicture2 from '@/assets/images/gym_picture4.jpg';
  import gymPicture3 from '@/assets/images/gym_picture5.jpg';
  
  export default {
    data() {
      return {
        images: [gymPicture1, gymPicture2, gymPicture3],
        currentIndex: 0,
        transitioning: false,
      };
    },
    computed: {
      currentImageSrc() {
        return this.images[this.currentIndex];
      },
    },
    methods: {
      nextImage() {
        if (!this.transitioning) {
          this.transitioning = true;
          this.currentIndex = (this.currentIndex + 1) % this.images.length;
          setTimeout(() => {
            this.transitioning = false;
          }, 1000); // Adjust the duration to match your transition duration
        }
      },
      prevImage() {
        if (!this.transitioning) {
          this.transitioning = true;
          this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
          setTimeout(() => {
            this.transitioning = false;
          }, 1000); // Adjust the duration to match your transition duration
        }
      },
    },
    mounted() {
      setInterval(() => {
        this.nextImage();
      }, 7000);
    },
  };
  </script>
  
  <style scoped>
  .image-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .slider-image-container {
    width: 60vw;
    max-height: 70vh;
    overflow: hidden;
    position: relative;
    top: 5rem;
  }
  
  .slider-image {
    width: 100%;
    height: auto;
    opacity: 1;
    animation: fade 1.5s forwards; /* Adjust the duration here (e.g., 2s) */
  }
  
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  .button-container {
    z-index: 10000;
  }
  
  button {
    margin: 10px;
    width: 6rem;
    height: 3rem;
    font-size: 16px;
    background-color: var(--ShinyShamrock);
    color: var(--White);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10000;
    transition: 0.5s;
    position: relative;
  }
  
  button:hover {
    background-color: var(--PastelGreen);
  }

  @media (max-width: 992px){

    .slider-image-container {
        top: 20rem;
        width: 80vw;
    }

    button{
        top: 15rem;
    }

  }
  </style>