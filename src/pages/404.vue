<template>
    <main class="grid min-h-screen place-items-center sm:px-6 px-2  lg:px-8 overflow-auto">
        <div class="text-center mx-auto">          
          <h1 class="-mt-10 sm:text-[28rem] font-bold tracking-wide text-[#313c0e]">404</h1>
          <h2 class="mt-2 sm:text-[6rem] font-bold tracking-wide ">Page not found</h2>
          <p class="mt-3 smsm:text-[2.5rem] leading-7 ">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6 flex items-center justify-center gap-x-6">
            <router-link to="/" class="button-container">
                <a href="Abdullah-Resume.pdf" download class="button type--C">
                  <div class="button__line"></div>
                  <div class="button__line"></div>
                  <span class="button__text">Go Back Home</span>
                  <div class="button__drow1"></div>
                  <div class="button__drow2"></div>
                </a>
            </router-link>
          </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style></style>