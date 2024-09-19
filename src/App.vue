<template>
  <div>
    <Default  />
    <div id="cursor"></div>
    <div id="cursor-border"></div>  
  </div>
</template>
<script>
import Default from './layout/Default.vue';
import Lenis from "@studio-freight/lenis";
import { gsap } from 'gsap';
export default {
  data() {
    return {
      
    }
  },
  components:{ Default },
  mounted() {
    this.tset()
    const lenis = new Lenis({
        duration: 1.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  },
  methods: {
    tset() {
      const cursor = document.querySelector("#cursor");
      const cursorBorder = document.querySelector("#cursor-border");
      const cursorPos = { x: 0, y: 0 };
      const cursorBorderPos = { x: 0, y: 0 };

      document.addEventListener("mousemove", (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;

        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });

      requestAnimationFrame(function loop() {
        const easting = 8;
        cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
        cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

        cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
        requestAnimationFrame(loop);
      });

      document.querySelectorAll("[data-cursor]").forEach((item) => {
        item.addEventListener("mouseover", (e) => {
          if (item.dataset.cursor === "pointer") {
            cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
            cursorBorder.style.setProperty("--size", "30px");
          }
          if (item.dataset.cursor === "pointer2") {
            cursorBorder.style.backgroundColor = "white";
            cursorBorder.style.mixBlendMode = "difference";
            cursorBorder.style.setProperty("--size", "80px");
          }
        });
        item.addEventListener("mouseout", (e) => {
          cursorBorder.style.backgroundColor = "unset";
          cursorBorder.style.mixBlendMode = "unset";
          cursorBorder.style.setProperty("--size", "50px");
        });
      });

    }
  }
}
</script>

<style>
#cursor {
  position: fixed;
  top: -5px;
  left: -5px;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  pointer-events: none;
  z-index: 999;
  cursor: default
}

#cursor-border {
  --size: 50px;
  position: fixed;
  top: calc(var(--size) / -2);
  left: calc(var(--size) / -2);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  box-shadow: 0 0 0 1px #fff;
  pointer-events: none;
  transition: top 0.15s ease-out, left 0.15s ease-out, width 0.15s ease-out,
    height 0.15s ease-out, background-color 0.15s ease-out;
  z-index: 999;
}

input {
  font-family: "Century Gothic", sans-serif;
  font-size: 2rem;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 0;
  box-shadow: 0 0 10px #64ffda, 0 0 10px #64ffda inset;
  text-shadow: 0 0 5px #64ffda, 0 0 10px #64ffda;
  transition: 0.3s ease-out;
}

input:hover {
  color: black;
  background-color: #64ffda;
  border-color: #64ffda;
  box-shadow: 0 0 80px #64ffda;
}

input:active {
  transform: scale(0.85);
  box-shadow: 0 0 30px #64ffda;
}

input:nth-of-type(2) {
  margin-left: 2rem;
  color: white;
  border: 1px solid white;
  box-shadow: 0 0 10px white, 0 0 10px white inset;
  text-shadow: 0 0 5px white, 0 0 10px white;
}

input:nth-of-type(2):hover {
  color: black;
  background-color: white;
  border-color: white;
  box-shadow: 0 0 80px white;
}

input:nth-of-type(2):active {
  transform: scale(0.85);
  box-shadow: 0 0 30px white;
}
</style>