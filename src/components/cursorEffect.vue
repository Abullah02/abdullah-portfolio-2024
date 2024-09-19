<template>
    <div class="cursor" ref="cursor"></div>
  </template>
  
  <script>
  import { gsap } from 'gsap';
  
  export default {
    mounted() {
      this.initCursor();
    },
    methods: {
      initCursor() {
        const cursor = this.$refs.cursor;
  
        // GSAP animation
        gsap.to(cursor, {
          duration: 0.3,
          ease: "power2.out",
          x: "var(--mouse-x)",
          y: "var(--mouse-y)",
          repeat: -1,
        });
  
        // Update cursor position
        window.addEventListener('mousemove', (event) => {
          document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`);
          document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .cursor {
    position: fixed;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 10000;
  }
  </style>
  