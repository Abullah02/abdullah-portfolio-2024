<template>
  <SiteLoader v-if="aaa" />
  <div>
    <!-- <Header /> -->
    <section ref="header" class="flex items-center justify-between px-16 sm:pt-8 pt-[6rem] sm:mb-0 mb-[24rem]">
      <div id="logo-element" class=" abdullah-logo"> 
        <div class="flex items-center sm:text-[2.4rem] text-[26px]">
          <span ref="logoRight" class="abudllah block relative overflow-hidden transi hover-target">Abdullah</span>
          <span ref="dashSeperator" class="block tracking-[-2px] px-2 logo-dash hover-target">——</span> 
          <span ref="logoLeft" class="block  hover-target">Suri</span>
        </div>
      </div>
      <div class="flex items-center gap-2.5">
        <div class="button-container">
          <a href="Abdullah-Resume.pdf" download class="button type--C">
            <div class="button__line"></div>
            <div class="button__line"></div>
            <span class="button__text">DOWNLOAD RESUME</span>
            <div class="button__drow1"></div>
            <div class="button__drow2"></div>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Hero Section Desktop -->
    <section class="relative overflow-hidden sm:flex justify-center flex-col h-screen px-16 hidden">
      <div ref="initialHeagingHide" class="overflow-hidden">
        <div ref="headingContainer" class="relative flex items-center justify-between gap-5"> <!--data-aos="fade-up" data-aos-duration="500"-->
          <h1 ref="heading" id="HeroRightHeading">
            <span v-for="letter in frontLetters" class="hover:text-regular-text-color transition-all duration-300 hover-target">{{ letter }}</span>
          </h1>
          <h1 ref="heading" id="frontendSeperator">
            <span v-for="letter in dashes">{{ letter }}</span>          
          </h1>
          <h1 ref="heading" id="HeroLeftHeading">
            <span v-for="letter in endLetters" class="hover:text-regular-text-color transition-all duration-300 hover-target ">{{ letter }}</span>
          </h1>
        </div>
      </div>

      <div class="overflow-hidden">
        <div ref="headingContainerTwo" class="relative flex items-center justify-between">
          <h1 ref="heading">
            <span v-for="letter in devLetters" class="hover:text-regular-text-color transition-all duration-300 hover-target">{{ letter }}</span>
          </h1>
          <span class="max-w-[32.5rem] custom-font text-regular-text-color hero-para">
            <span class="uppercase text-text-color mr-4">About</span>
            I am a developer based in Karachi, Pakistan, focused on crafting engaging and interactive digital experiences on the web. With a passion for innovation, I have collaborated with a diverse range of brands and industry leaders to deliver exceptional results.
            <span class="flex items-center justify-between pt-24 pr-10">
              <span>Scroll Down</span>
                <div id="wrapper-inner">
                  <div id="scroll-down">
                    <span class="arrow-down">
                    <!-- css generated icon -->
                    </span>
                    <!-- <span id="scroll-title">
                      Scroll down
                    </span> -->
                  </div>
                </div>
            </span>
          </span>
        </div>
      </div>
    </section>

    <!-- Hero Section Mobile -->
    <section class="relative overflow-hidden px-16 sm:hidden text-[160px] leading-[.9] tracking-[-.05em] break-words">
      Front
      <br>
      <span v-for="letter in dashes">{{ letter }}</span>  End
      <br>
      developer

      <div class="custom-font text-regular-text-color text-[17px] tracking-[0px] leading-relaxed mt-[32rem]">
        <span class="uppercase text-text-color mr-4">About</span>
        I am a developer based in Karachi, Pakistan, focused on crafting engaging and interactive digital experiences on the web. With a passion for innovation, I have collaborated with a diverse range of brands and industry leaders to deliver exceptional results.
        <span class="flex items-center justify-between pt-[12rem] pr-10">
          <span>Scroll Down</span>
            <div id="wrapper-inner">
              <div id="scroll-down">
                <span class="arrow-down">
                <!-- css generated icon -->
                </span>
                <!-- <span id="scroll-title">
                  Scroll down
                </span> -->
              </div>
            </div>
        </span>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="px-16 uppercase sm:mt-0 mt-[42rem]">
      <!-- Left ro right bar -->
      <div class="relative w-full h-px bg-transparent">
        <span ref="leftToRightLineOne" class="absolute h-px w-full bg-[#777] origin-left"></span>
      </div>

      <!-- project 1  -->
      <div class="relative overflow-hidden sm:py-20 py-[24rem]" >
        <div class="absolute right-0 top-2 w-full custom-font flex items-center justify-between">
          <span ref="featureProject" class="sm:text-[1.7rem] text-[10px]" >
            FEATURED
            PROJECTS (4)
          </span>
          <span ref="associatedOne" class="tracking-normal sm:text-[1.7rem] text-[10px] custom-font capitalize flex items-center gap-1.5">
            <img src="@/assets/teksyo_logo.jfif" class="sm:size-9 size-16 rounded-lg" alt="">
            <a href="https://www.teksyo.com/" target="_blank" class="hover-target">Associated with Teksyo (Pvt) Ltd</a>
          </span>
        </div>
        <h2 ref="portfolioHeadingLeftOne" class="whitespace-nowrap">
          <a href="https://elefant.net.ai/" target="_blank" :style="{ '--custom-background': svgBackground }" class="custom-link transition-all duration-500">
            Elegant Elefant: law for all. We got an elefant's memory for the law, and can't wait to help you access it!
          </a>
        </h2>
      </div>
      

      <!-- Left ro right bar -->
      <div class="relative w-full h-px bg-transparent">
        <span ref="RightToleftLine" class="absolute h-px w-full bg-[#777] origin-right"></span>
      </div>

      <!-- Project 2 -->
      <div class="relative overflow-hidden sm:py-20 py-[24rem]">
        <span ref="associatedTwo" class="absolute top-2 tracking-normal sm:text-[1.7rem] text-[10px] custom-font capitalize flex items-center gap-1.5 hover-target">
          <img src="@/assets/teksyo_logo.jfif" class="sm:size-9 size-16 rounded-lg" alt="">
          <a href="https://www.teksyo.com/" target="_blank" class="hover-target">Associated with Teksyo (Pvt) Ltd</a>
        </span>
        <h2 ref="portfolioHeadingRightOne" class="whitespace-nowrap">
          <a href="https://www.teksyo.com/" target="_blank" :style="{ '--custom-background': svgBackground }" class="custom-link transition-all duration-500">Teksyo - Creating Million-Dollar Websites & AI SaaS for Startup Ideas</a>
        </h2>
      </div>
      
      <!-- Left ro right bar -->
      <div class="relative w-full h-px bg-transparent">
        <span ref="leftToRightLineTwo" class="absolute h-px w-full bg-[#777] origin-left"></span>
      </div>

      <!-- Project 3 -->
      <div class="relative overflow-hidden sm:py-20 py-[24rem]">
        <span ref="associatedThree" class="absolute right-0 top-2 tracking-normal sm:text-[1.7rem] text-[10px] custom-font capitalize flex items-center gap-1.5">
          <img src="@/assets/teksyo_logo.jfif" class="sm:size-9 size-16 rounded-lg" alt="">
          <a href="https://www.teksyo.com/" target="_blank" class="hover-target">Associated with Teksyo (Pvt) Ltd</a>
        </span>
        <h2 ref="portfolioHeadingLeftTwo" class="whitespace-nowrap">
          <a href="https://platypusdreaming.com.au/" target="_blank" :style="{ '--custom-background': svgBackground }" class="custom-link transition-all duration-500 ">platypus dreaming - Chanting of the Rainforest</a>
        </h2>
      </div>

      <!-- Left ro right bar -->
      <div class="relative w-full h-px bg-transparent">
        <span ref="leftToRightLineThree" class="absolute h-px w-full bg-[#777] origin-right"></span>
      </div>

      <!-- Project 4 -->
      <div class="relative overflow-hidden sm:py-20 py-[24rem]">
        <h2 ref="portfolioHeadingRightTwo" class="whitespace-nowrap">
          <a href="https://abdullah-suri.netlify.app/" target="_blank" :style="{ '--custom-background': svgBackground }" class="custom-link transition-all duration-500">My Old Portfolio - Abdullah Suri</a>
        </h2>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="px-16 text-center overflow-hidden sm:mt-52 mt-[42rem]">
      <div class="sm:hero-para text-[14px] custom-font !leading-tight mb-16">Got a question, proposal or project or want to work <br> together on something? Feel free to reach out.</div>
      
      <div class="overflow-hidden">
        <!-- Left ro right bar -->
        <div class="relative w-full h-px bg-transparent">
          <span ref="contactHeadingLinesOne" class="absolute h-px w-full bg-[#777] origin-left left-0"></span>
        </div>
        <h2 ref="contactHeading" class="whitespace-nowrap sm:!my-36 !my-[24rem] custom-link">"LET’S TALK — LET’S COLLABORATE — SAY HELLO — WANNA BE STARTING SOMETHING?"</h2>
        <!-- Right ro Left bar -->
        <div class="relative w-full h-px bg-transparent">
          <span ref="contactHeadingLinesTwo" class="absolute h-px w-full bg-[#777] origin-right left-0"></span>
        </div>

        <div class="pt-20 pb-10">
            <a href="mailto:m.abdullahsuri@gmail.com" class="email-btn button type--C custom-font text-[3.28rem]">
              <span class="sm:hero-para text-[13px]">m.abdullahsuri@gmail.com</span>
              <div class="button__drow1"></div>
              <div class="button__drow2"></div>
            </a>
            <div class="flex items-center justify-between sm:mt-0 mt-10">
              <div class="hero-para max-sm:text-[12px]">Karachi, PK <span class="text-regular-text-color ml-1">{{ getPakistanTime() }}</span> </div>
              <div class="flex items-center gap-5">
                <a href="https://www.linkedin.com/in/abdullah-suri-a7b012269/" class="hover-target flex items-center justify-center sm:size-16 size-36 border dark:border-slate-50/60 border-gray-700 rounded-full hover:border-[#313c0e] hover:bg-[#313c0e] transition-all duration-500 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover-target sm:size-8 size-16 group-hover:text-white group-hover:scale-125" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
                </a>
                <a href="https://github.com/Abdullah-Suri" class="hover-target flex items-center justify-center sm:size-16 size-36 border dark:border-slate-50/60 border-gray-700 rounded-full hover:border-[#313c0e] hover:bg-[#313c0e] transition-all duration-500 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover-target sm:size-8 size-16 group-hover:text-white group-hover:scale-125" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
                </a>
                <a href="https://www.instagram.com/abdullah._.suri/" class="hover-target flex items-center justify-center sm:size-16 size-36 border dark:border-slate-50/60 border-gray-700 rounded-full hover:border-[#313c0e] hover:bg-[#313c0e] transition-all duration-500 group">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="hover-target sm:size-8 size-16 group-hover:text-white group-hover:scale-125" fill="currentColor"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path></svg>
                </a>
              </div>
            </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-2.5 left-2.5">
      <label class="theme-switch cursor-none">
            <input @click="toggleTheme" :checked="isDarkTheme" type="checkbox" class="theme-switch__checkbox">
            <div class="theme-switch__container">
              <div class="theme-switch__clouds hover-target"></div>
              <div class="theme-switch__stars-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z" fill="currentColor"></path>
                </svg>
              </div>
              <div class="theme-switch__circle-container">
                <div class="theme-switch__sun-moon-container hover-target">
                  <div class="theme-switch__moon">
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                    <div class="theme-switch__spot"></div>
                  </div>
                </div>
              </div>
            </div>
      </label>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick } from 'vue';
import Header from '@/components/Header.vue';
import SiteLoader from "../components/SiteLoader.vue";

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      isLoading: false,
      loadingText: 'LOADING',
      firstNumber: ['5', '9', 'A'],
      secondNumber: ['0', '9', 'S'],
      frontLetters: ['F', 'R', 'O', 'N', 'T'],
      endLetters: ['E', 'N', 'D'],
      devLetters: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
      dashes: ['——'],
      isDarkTheme: true,
    }
  },
  components: {
    Header,
    SiteLoader
  },
  computed: {
    splitLoadingText() {
      return this.loadingText.split('');
    },
    svgBackground() {
      const svgColor = this.isDarkTheme ? '#e0ff00' : '#313c0e';
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200%25' height='100%25'%3E%3Cdefs%3E%3Cstyle%3E .wave%7B animation:wave 1s ease-in-out infinite alternate; animation-delay:-0.25s; stroke:${encodeURIComponent(svgColor)}; stroke-width:2; stroke-linecap:square; %7D @keyframes wave%7B to%7B d:path('M 0 40 Q 20 42.5 40 40 Q 60 37.5 80 40'); %7D %7D %3C/style%3E%3C/defs%3E%3Cpattern id='wavePattern' x='0' y='0' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Cpath fill='none' class='wave' d='M 0 40 Q 20 37.5 40 40 Q 60 42.5 80 40' /%3E%3C/pattern%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23wavePattern)'%3E%3C/rect%3E%3C/svg%3E")`;
    }
  },
  mounted() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      this.isDarkTheme = storedTheme === 'dark';
      this.applyTheme();
    }
    nextTick(() => {
      this.initGsapAnimation()
    });
  },
  methods: {
    initGsapAnimation() {
      const logoDash = document.querySelector("#logo-element");

      // Hover animation
      logoDash?.addEventListener("mouseenter", () => {
        gsap.fromTo(
          this.$refs.dashSeperator,
          { scaleX: 1 }, 
          { scaleX: 2, duration: 0.5 }
        );
        gsap.fromTo(
          this.$refs.logoRight,
          {x: 0},
          {x: -10, duration: 0.5}
        );
        gsap.fromTo(
          this.$refs.logoLeft,
          {x: 0},
          {x: 10, duration: 0.5}
        )
      });

      // Reset animation on mouse leave
      logoDash?.addEventListener("mouseleave", () => {
        gsap.fromTo(
          this.$refs.dashSeperator,
          { scaleX: 2 }, 
          { scaleX: 1, duration: 0.5 }
        );
        gsap.fromTo(
          this.$refs.logoRight,
          {x: -10},
          {x: 0, duration: 0.5}
        );
        gsap.fromTo(
          this.$refs.logoLeft,
          {x: 10},
          {x: 0, duration: 0.5}
        )
      });

      // Overflow Show Hide 
      gsap.fromTo(
        this.$refs.initialHeagingHide,
        { overflow: 'hidden' },
        {
          overflow: 'visible',
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.initialHeagingHide,
            start: "top 15%",
            end: "bottom top", 
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate dash 
      gsap.fromTo(
        "#frontendSeperator",
        { scaleX: 1 },
        {
          scaleX: 2.2,
          duration: 1,
          scrollTrigger: {
            trigger: "#frontendSeperator",
            start: "top 15%",
            end: "bottom top", 
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate first heading (#HeroRightHeading) sliding to the left
      gsap.fromTo(
        "#HeroRightHeading",
        { x: 0 },
        {
          x: -400,
          duration: 1,
          scrollTrigger: {
            trigger: "#HeroRightHeading",
            start: "top 15%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate the third heading (#HeroLeftHeading) sliding to the right
      gsap.fromTo(
        "#HeroLeftHeading",
        { x: 0 },
        {
          x: 400,
          duration: 1,
          scrollTrigger: {
            trigger: "#HeroLeftHeading",
            start: "top 15%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );
      
      // Animate portfolio bars (Left to Right One)
      gsap.fromTo(
        this.$refs.leftToRightLineOne,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.leftToRightLineOne,
            start: "top 80%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      // Animate Portfolio Heading One
      gsap.fromTo(
        this.$refs.portfolioHeadingLeftOne,
        { x: 700 },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.portfolioHeadingLeftOne,
            start: "top 100%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );
      
      // Animate portfolio bars (Right to Left One) 
      gsap.fromTo(
        this.$refs.RightToleftLine,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.RightToleftLine,
            start: "top 80%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      // Animate Portfolio Heading Two
      gsap.fromTo(
        this.$refs.portfolioHeadingRightOne,
        { x: -800 },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.portfolioHeadingRightOne,
            start: "top 100%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate portfolio bars (Left to Right Two) 
      gsap.fromTo(
        this.$refs.leftToRightLineTwo,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.leftToRightLineTwo,
            start: "top 80%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.portfolioHeadingLeftTwo,
        { x: 800 },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.portfolioHeadingLeftTwo,
            start: "top 100%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate portfolio bars
      gsap.fromTo(
        this.$refs.leftToRightLineTwo,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.leftToRightLineTwo,
            start: "top 80%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.portfolioHeadingRightTwo,
        { x: -550 },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: this.$refs.portfolioHeadingRightTwo,
            start: "top 100%",
            end: "bottom top",
            scrub: true,
            markers: false,
          }
        }
      );

      // Animate portfolio bars
      gsap.fromTo(
        this.$refs.leftToRightLineThree,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.leftToRightLineThree,
            start: "top 80%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      const marqueeSpeed = 10;

      const contactHeading = this.$refs.contactHeading;
      const width = contactHeading.offsetWidth;

      // continuous scroll effect
      gsap.to(contactHeading, {
        xPercent: -100, // Moves it to the left until it's out of view
        repeat: -1, // Infinite scroll
        duration: marqueeSpeed, // Speed of the scroll
        ease: "none", // No easing for smooth linear scrolling
        modifiers: {
          xPercent: gsap.utils.unitize(value => parseFloat(value) % 100) // Keeps the scroll seamless
        }
      });

      // Animate portfolio bars (Left to Right One)
      gsap.fromTo(
        this.$refs.contactHeadingLinesOne,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.contactHeadingLinesOne,
            start: "0 100%",  
            end: "top 30%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.contactHeadingLinesTwo,
        { scaleX: 0 }, 
        {
          scaleX: 1, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.contactHeadingLinesTwo,
            start: "0 100%",  
            end: "50% 60%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.associatedOne,
        { x: 400, opacity: 0 }, 
        {
          x: 0, 
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.associatedOne,
            start: "0 100%",  
            end: "50% 60%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.associatedTwo,
        { x: -400, opacity: 0 }, 
        {
          x: 0,
          opacity: 1,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.associatedTwo,
            start: "0 100%",  
            end: "50% 60%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.associatedThree,
        { x: 400, opacity: 0 }, 
        {
          x: 0,
          opacity: 1, 
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.associatedThree,
            start: "0 100%",  
            end: "50% 60%",    
            // scrub: 1,         
            markers: false
          }
        }
      );

      gsap.fromTo(
        this.$refs.featureProject,
        { opacity: 0 }, 
        {
          opacity: 1, 
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: this.$refs.featureProject,
            start: "0 100%",  
            end: "50% 60%",    
            // scrub: 1,         
            markers: false
          }
        }
      );
      
      gsap.fromTo(
        this.$refs.headingContainer,
        { y: 400 }, 
        {
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        this.$refs.headingContainerTwo,
        { y: 400 }, 
        {
          y: 0, 
          delay: .2,
          duration: 1.3,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        this.$refs.header,
        { y: -400, opacity: 0 }, 
        {
          y: 0, 
          opacity: 1, 
          duration: .9,
          ease: "power3.out",
        }
      );

      contactHeading.addEventListener('mouseenter', () => {
        gsap.globalTimeline.pause();
      });

      contactHeading.addEventListener('mouseleave', () => {
        gsap.globalTimeline.resume();
      });

    },
    getPakistanTime() {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
      return formatter.format(new Date());
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      this.applyTheme();
    },
    applyTheme() {
      const theme = this.isDarkTheme ? 'dark' : 'light';
      document.documentElement.classList.toggle('light-theme', !this.isDarkTheme);
      localStorage.setItem('theme', theme);
    }
  },
};
</script>

<style scoped>
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
  height: 50px;
  overflow: hidden;
}

.digit {
  font-size: 3.5rem;
  font-weight: 700;
  display: block;
  height: 50px;
  line-height: 50px;
  text-align: center;
}

.scroll_down_infinite .scroll_down_arrow {
  transform: translateY(-100%);
 animation: infiniteArrow 1s infinite cubic-bezier(.175,.885,.32,1.275);
}

@keyframes infiniteArrow {
  to {
    transform: translateY(0);
  }
}
</style>
