<template>
  <div>
    <Default  />
    <div id="cursor" class="sm:block hidden"></div>
    <div id="cursor-border" class="sm:block hidden"></div>  
  </div>
</template>

<script>
import Default from './layout/Default.vue';
import Lenis from "@studio-freight/lenis";

export default {
  data() {
    return {
      
    }
  },
  components:{ Default },
  mounted() {
    this.initialiseCursor()
    const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  },
  methods: {
    initialiseCursor() {
      const cursor = document.querySelector("#cursor");
      const cursorBorder = document.querySelector("#cursor-border");

      const cursorPos = { x: 0, y: 0 };
      const cursorBorderPos = { x: 0, y: 0 };
      const easing = 10;

      document.addEventListener("mousemove", (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;
        cursor.style.transform = `translate(${cursorPos.x - 5}px, ${cursorPos.y - 5}px)`; // Adjusting for dot size
      });

      const animateCursorBorder = () => {
        cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easing;
        cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easing;
        cursorBorder.style.transform = `translate(${cursorBorderPos.x - 25}px, ${cursorBorderPos.y - 25}px)`; // Adjusting for border size
        requestAnimationFrame(animateCursorBorder);
      };
      animateCursorBorder();

      document.addEventListener("mouseover", (e) => {
        if (e.target && e.target.classList.contains("hover-target")) {
          cursorBorder.style.backgroundColor = "rgba(255, 0, 0, 0)";
          cursorBorder.style.borderColor = "#c3ff00bb";
          cursor.style.backgroundColor= "#c3ff00bb"

        }
      });

      document.addEventListener("mouseout", (e) => {
        if (e.target && e.target.classList.contains("hover-target")) {
          cursorBorder.style.backgroundColor = "transparent";
          cursorBorder.style.borderColor = "#aaa";
          cursor.style.backgroundColor= "#aaa"
        }
      });
    }
  }
}
</script>

<style>
#cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: var(--text-color);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
}

#cursor-border {
  --size: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 2px solid var(--text-color);
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.15s ease-out, background-color 0.3s ease-out, border-color 0.3s ease-out;
}
</style>