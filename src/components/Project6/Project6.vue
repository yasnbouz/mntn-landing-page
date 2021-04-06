<template>
  <div class="app">
    <the-header />
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lora&family=Ubuntu:wght@300;700&display=swap");
html {
  font-size: clamp(10px, 10 * (1vw + 1vh) / 14, 16px);
}

.app {
  --color-black: #707070;
  --color-blue-100: #1792d2;
  --color-blue-200: #143774;
  font-size: 1.125rem;
  font-family: "Ubuntu", sans-serif;
  font-weight: normal;
  line-height: 1.5;
}
.container {
  max-width: 80rem;
  margin: 0 auto;
  width: 90%;
  box-sizing: content-box;
}
h1,
h2,
h3 {
  font-family: "Lora", serif;
  font-weight: normal;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
a {
  font-size: 0.875rem;
  font-weight: bold;
}
strong {
  color: #404040;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
