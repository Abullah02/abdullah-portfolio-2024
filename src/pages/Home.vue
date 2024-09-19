<template>
  <!-- site loader  -->
  <!-- <div v-if="isLoading = false" class="w-screen h-screen">
    <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
      <div class="counter">
        <div class="counter-number">
          <span v-for="(digit, index) in firstNumber" 
                :key="index" 
                class="digit" 
                :ref="'firstNumberDigits' + index">
            {{ digit }}
          </span>
        </div>
        <div class="counter-number-second">
          <span v-for="(digit, index) in secondNumber" 
                :key="index" 
                class="digit" 
                :ref="'secondNumberDigits' + index">
            {{ digit }}
          </span>
        </div>
      </div>
      <button @click="isLoading = false" ref="visitWebsite" class="opacity-0 top-[25px] uppercase relative inline-flex items-center leading-6 align-middle border-none after:content-[''] after:absolute after:h-0.5 after:w-full hover:after:w-0 after:end-0 hover:after:end-auto after:bottom-px after:start-0 after:duration-500 after:bg-black duration-500">
        Visit Website
      </button>
    </div>
    <div class="absolute bottom-1 left-2 uppercase !overflow-hidden">
      <span v-for="(char, index) in splitLoadingText" :key="index" class="letter" ref="letters">
        {{ char }}
      </span>
    </div>
  </div> -->
  <div>
    <!-- <Header /> -->
    <section class="flex items-center justify-between px-2 py-8">
      <div>Abdullah Suri</div>
      <div>
        <div class="container">
          <a href="#" class="button type--C">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">CONTACT</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </a>
        </div>
      </div>
    </section>
    <!-- Hero Section -->
    <section class="relative overflow-hidden flex justify-center flex-col h-screen px-16">
      <div class="flex items-center justify-between gap-5">
        <h1 ref="heading" id="HeroRightHeading">
          <span v-for="letter in frontLetters" class="hover:text-regular-text-color transition-all duration-300">{{ letter }}</span>
        </h1>
        <h1 ref="heading" id="frontendSeperator">
          <span v-for="letter in dashes">{{ letter }}</span>          
        </h1>
        <h1 ref="heading" id="HeroLeftHeading">
          <span v-for="letter in endLetters" class="hover:text-regular-text-color transition-all duration-300">{{ letter }}</span>
        </h1>
      </div>
      <div class="flex items-center justify-between">
        <h1 ref="heading">
          <span v-for="letter in devLetters" class="hover:text-regular-text-color transition-all duration-300">{{ letter }}</span>
        </h1>
        <span class="max-w-[32.5rem] custom-font text-regular-text-color hero-para">
          <span class="uppercase text-text-color mr-4">About</span>
          I am a developer based in Karachi, Pakistan focused on creating interactive digital experiences on the web, working with brands and industry leaders such as Google Fonts, Paystack, Printivo, Disney, Jelly, and Null amongst others to achieve this.</span>
      </div>
    </section>
    <div class="h-screen w-screen"></div>
    <div class="h-screen w-screen"></div>
    <div class="h-screen w-screen"></div>
    <div class="h-screen w-screen"></div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref, computed, onMounted, nextTick } from 'vue';
import Header from '@/components/Header.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      isLoading: false,
      loadingText: 'LOADING',
      firstNumber: ['5', '9', 'A'],
      secondNumber: ['0', '9', 'S'],
      // frontLetters: 'FRONT',
      // endLetters: 'END',
      // devLetters: 'DEVELOPER'
      frontLetters: ['F', 'R', 'O', 'N', 'T'],
      endLetters: ['E', 'N', 'D'],
      devLetters: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
      dashes: ['——']
    }
  },
  components: {
    Header
  },
  computed: {
    splitLoadingText() {
      return this.loadingText.split('');
    },
  },
  mounted() {
    this.isLoading = true
    nextTick(() => {
      this.scaleDash()
    //   // this.animateText();
    //   this.sequenceAnimation();
    });
    // this.scaleText(); // Initial scale
    // window.addEventListener("resize", this.scaleText);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.scaleText);
  },
  methods: {
    scaleDash() {
  // Animate the dash (#frontendSeperator) scaling
  gsap.fromTo(
    "#frontendSeperator",
    { scale: 1 }, // Start state
    {
      scale: 2.2, // Scale up to 2.2
      duration: 1,
      scrollTrigger: {
        trigger: "#frontendSeperator", // The element that triggers the scroll animation
        start: "top 15%", // Start when top of the element hits center of viewport
        end: "bottom top", // End when the element is at the top of the viewport
        scrub: true, // Smooth animation during scroll
        markers: true, // Debug markers (remove after testing)
      }
    }
  );

  // Animate the first heading (#HeroRightHeading) sliding to the left
  gsap.fromTo(
    "#HeroRightHeading",
    { x: 0 }, // Start state
    {
      x: -400, // Move left by 400px
      duration: 1,
      scrollTrigger: {
        trigger: "#HeroRightHeading", // The heading triggers the animation
        start: "top 15%", // Start when the top of the heading reaches 70% of viewport height
        end: "bottom top", // End when the heading reaches the top of the viewport
        scrub: true, // Smoothly animate as you scroll
        markers: true, // Debug markers
      }
    }
  );

  // Animate the third heading (#HeroLeftHeading) sliding to the right
  gsap.fromTo(
    "#HeroLeftHeading",
    { x: 0 }, // Start state
    {
      x: 400, // Move right by 400px
      duration: 1,
      scrollTrigger: {
        trigger: "#HeroLeftHeading", // The heading triggers the animation
        start: "top 15%", // Start when the heading reaches 70% of the viewport
        end: "bottom top", // End when the heading reaches the top of the viewport
        scrub: true, // Smoothly animate as you scroll
        markers: true, // Debug markers
      }
    }
  );
},
    // animateText() {
    //   gsap.from(this.$refs.letters, {
    //     opacity: 0,
    //     y: 20,
    //     stagger: 0.1,
    //     duration: 0.2,
    //     ease: 'power3.out',
    //   });
    // },
    // sequenceAnimation() {
    //   const firstGroup = Array.from(this.firstNumber.map((_, i) => this.$refs[`firstNumberDigits${i}`]));
    //   const secondGroup = Array.from(this.secondNumber.map((_, i) => this.$refs[`secondNumberDigits${i}`]));

    //   // Create a GSAP timeline for smoother control
    //   const tl = gsap.timeline({ ease: "power1.inOut" });

    //   // Faster timing (reduced duration) and clear step-by-step animation without loops
    //   const duration = 0.2; // Reduce duration for faster animation
    //   const delayBetweenGroups = 0.1; // Shorter delay between group animations

    //   tl.from(this.$refs.letters, {
    //     opacity: 0,
    //     y: 20,
    //     // delay: 1,
    //     stagger: 0.1, // Adds delay between each letter animation
    //     duration: 0.5,
    //     ease: 'power3.out',
    //   });

    //   // Step 1: First group - first digit
    //   tl.to(firstGroup[0], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   });

    //   // Step 2: Second group - first digit
    //   tl.to(secondGroup[0], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=${delayBetweenGroups}`);

    //   // Step 3: Pause for visibility before moving both digits up
    //   tl.to(firstGroup[0], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);
      
    //   tl.to(secondGroup[0], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   // Step 4: First group - second digit
    //   tl.to(firstGroup[1], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.4`);

    //   // Step 5: Second group - second digit
    //   tl.to(secondGroup[1], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=${delayBetweenGroups}`);

    //   // Step 6: Pause for visibility before moving both digits up
    //   tl.to(firstGroup[1], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(secondGroup[1], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   // Step 7: First group - third digit
    //   tl.to(firstGroup[2], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.4`);

    //   // Step 8: Second group - third digit
    //   tl.to(secondGroup[2], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=${delayBetweenGroups}`);

    //   // Step 9: Pause for visibility before moving both digits up
    //   tl.to(firstGroup[2], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(secondGroup[2], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   // Step 10: First group - fourth digit
    //   tl.to(firstGroup[3], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.4`);

    //   // Step 11: Second group - fourth digit
    //   tl.to(secondGroup[3], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=${delayBetweenGroups}`);

    //   // Step 12: Pause for visibility before moving both digits up
    //   tl.to(firstGroup[3], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(secondGroup[3], {
    //     y: `-${200}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(firstGroup[4], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(secondGroup[4], {
    //     y: `-${100}%`,
    //     duration: duration,
    //     ease: "power2.out",
    //   }, `+=0.2`);

    //   tl.to(this.$refs.visitWebsite, {
    //     opacity: 1,
    //     duration: 0.1, // Duration of the fade-in animation
    //     // ease: "power2.out"
    //   },`+=${delayBetweenGroups}` )
    // },
    scaleText() {
      const scaleValue = 1 / window.devicePixelRatio; // Calculate zoom ratio

      // Loop over all heading refs
      this.$refs.heading.forEach((heading) => {
        gsap.set(heading, { scale: scaleValue, transformOrigin: "0 0" });
      });
    },

  },
};
</script>

<style scoped>
.scroll-animation-container {
  height: 300vh; /* Adjust height to see scrolling effect */
}

.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.letter {
  display: inline-block;
  font-size: 2.2rem;
  margin-right: 2px;
  transform: translateY(-20)
}

.counter {
  display: flex;
  justify-content: center;
}

.counter-number, .counter-number-second {
  display: flex;
  flex-direction: column;
  height: 50px; /* Adjust height to fit your digits */
  overflow: hidden;
}

.digit {
  font-size: 3.5rem;
  font-weight: 700;
  display: block;
  height: 50px; /* Match the height of the counter div */
  line-height: 50px;
  text-align: center;
}

</style>
