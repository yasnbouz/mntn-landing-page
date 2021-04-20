<template>
  <app-header />
  <main>
    <app-hero />
    <fixed-nav />
    <app-articles />
  </main>
  <app-footer />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHero from "./components/AppHero.vue";
import FixedNav from "./components/FixedNav.vue";
import AppArticles from "./components/AppArticles.vue";

export default {
  components: { AppHeader, AppHero, FixedNav, AppArticles, AppFooter },
};
</script>

<style lang="scss">
@use "./styles/_typography.scss";

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #bbc0c2;
  border-radius: 9999px;

  &:hover {
    background-color: #fbd784;
  }
}
html {
  height: 100%;
  scroll-behavior: smooth;
}

img {
  max-width: 100%;
  display: block;
}

:root {
  font-size: 6.25%;
  --color-bg: #0b1d26;
  --color-accent: #fbd784;
  --color-white: hsl(0, 0%, 90%);
  @media (max-width: 1485px) {
    font-size: 5.25%;
  }
  @media (max-width: 955px) {
    font-size: 5%;
  }
}

body {
  font-family: "Gilroy";
  font-weight: 700;
  font-size: 18rem;
  line-height: 1.2;
  background-color: var(--color-bg);
  color: var(--color-white);
  letter-spacing: 1px;
  min-height: 100%;
}
h1,
h2 {
  font-family: "Chronicle";
  font-weight: 600;
}
h1 {
  font-size: 73rem;
  line-height: 1.13;
}
h2 {
  font-size: 64rem;
  line-height: 1.2;
  @media (max-width: 955px) {
    font-size: 46rem;
  }
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
li {
  font-family: inherit;
}
.btn {
  display: inline-block;
  appearance: none;
  background-color: transparent;
  border: 0;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  cursor: pointer;
}
.btn--icon {
  display: flex;
  align-items: center;
  column-gap: 16rem;
}
.hero__subtitle,
.article__subtitle {
  color: var(--color-accent);
  font-weight: 800;
  letter-spacing: 6px;
  text-transform: uppercase;
  position: relative;
  display: flex;
  column-gap: 32rem;
  align-items: center;
  align-content: center;
  order: -1;
  &::before {
    content: "";
    display: block;
    width: 62rem;
    height: 2px;

    background-color: var(--color-accent);
  }
}
/* main grid */
.main-grid {
  display: grid;
  grid-template-columns: minmax(20px, 1fr) repeat(12, minmax(auto, 100px)) minmax(20px, 1fr);
  column-gap: 32px;

  @media (max-width: 830px) {
    grid-template-columns: minmax(20px, 1fr) minmax(0, 500px) minmax(20px, 1fr);
    row-gap: 32rem;
  }
}
</style>
