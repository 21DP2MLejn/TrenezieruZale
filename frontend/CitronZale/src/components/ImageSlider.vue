<template>
  <div class="background">
    <div class="image-slider">
      <div class="slider-image-container">
        <div class="text-container">
          <button id="startnow"> START NOW!</button>
          <h2>The only bad workout is one you didn't do.</h2>
          <p>What are you waiting for? Join NOW and get your dream physique! We have the best deals for everyone!</p>
          <ul>
            <li>Spacious exercise hall</li>
            <li>Wide variety of modern equipment</li>
            <li>Friendly customer service</li>
            <li>Professional coaches</li>
            <li>Exclusive membership deals</li>
            <li>OPEN 24/7</li>
          </ul>
        </div>
        <vue-responsive-image
          :image-url="currentImageSrc"
          :image-ratio="16/9"
          class="slider-image"
        ></vue-responsive-image>
      </div>
      <div class="button-container">
        <button @click="prevImage"><p> &leftarrow; </p></button>
        <button @click="nextImage"><p> &RightArrow; </p></button>
      </div>
    </div>
  </div>
 </template>
 
 <script>
 import gymPicture1 from '@/assets/images/gym_picture3.jpg';
 import gymPicture2 from '@/assets/images/gym_picture5.jpg';
 import gymPicture3 from '@/assets/images/gym_picture1.jpg';
 import VueResponsiveImage from 'vue-responsive-image';
 
 export default {
  components: {
    VueResponsiveImage
  },
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
        }, 1000);
      }
    },
    prevImage() {
      if (!this.transitioning) {
        this.transitioning = true;
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        setTimeout(() => {
          this.transitioning = false;
        }, 1000);
      }
    },
  },
  props: {
    isNavOpen: Boolean,
  },
  mounted() {
    setInterval(() => {
      this.nextImage();
    }, 7000);
  },
 };
 </script>
  
<style scoped>

#startnow{
  left: 10vw;
  top: 0.5rem;
}

button {
  --b: 3px;   /* border thickness */
  --s: .15em; /* size of the corner */
  
  padding: calc(.05em + var(--s)) calc(.3em + var(--s));
  color: var(--black);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--black) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .2em;
}
button:hover,
button:focus-visible{
  --_p: 0px;
  outline-color: var(--black);
  outline-offset: .05em;
}
button:active {
  background: var(--black);
  color: var(--TeaGreen);
}

button{
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    margin: .1em;
    transition: 0.5s;
    position: relative;
    top: -4px;
}

body{
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}
.text-container {
  z-index: 2;
  color: var(--Black);
  position: absolute;
  width: 30vw;
  height: 100vh;
  background-color: var(--TeaGreen);
}

h1, h2 {
  font-weight: var(--font-bold);
}

.image-slider {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 position: relative;
}

.slider-image-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  top: 4.6rem;
}

.slider-image {
 width: 90%;
 height: auto;
 opacity: 1;
 animation: fade 1.5s forwards;
 position: relative;
 left: 12rem;
 transition: 0.3s ease;
}

.slider-image:hover {
 transform: scale(1.05);
 box-shadow: 0 0 10px rgba(0,0,0,0.3);
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
  position: relative;
  left: 10rem;
}

.button-container button {
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
  opacity: 50%;
  left: 8rem;
}

.button-container button:hover {
  background-color: var(--PastelGreen);
  transform: scale(1.05);
  opacity: 100%;
}

@media (max-width: 992px) {
  .slider-image-container {
    width: 100vw;
    height: 70vh;
  }

  button {
    display: none;
  }


  .text-container {
    color: var(--Black);
    width: 100%;
    height: auto; 
    top: 30rem;
  }

#startnow {
  display: block;
  left: 0vw;
  top: 0.5rem;
}

  .slider-image-container {
    height: 100vh;
    width: 100vw;
  }

  .slider-image {
    left: 0;
    width: 100vw;
  }

  .image-slider {
   display: block;
 }

 .text-container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   top: 58vh;
 }
}

@media (max-width: 720px ){

    .text-container{
      top: 48vh;
    }

}

@media (max-width: 600px ){

    .text-container{
      top: 40vh;
    }
}


@media screen and (max-width: 479px) {

    .text-container{
      top:35vh
    }

}

</style>
