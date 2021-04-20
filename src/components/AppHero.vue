<template>
  <div id="hero" class="hero main-grid">
    <section class="hero__content">
      <intersect @enter="updateSection(0), showContent()" @leave="hideContent" :threshold="[1.0]">
        <h1 class="hero__title">Be prepared for the Mountains and beyond!</h1>
        <p class="hero__subtitle">A Hiking guide</p>
        <a href="#article--1" class="btn btn__scroll btn--icon">
          scroll down
          <svg aria-hidden="true" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="currentcolor" />
          </svg>
        </a>
      </intersect>
    </section>
  </div>
</template>

<script>
import Intersect from "vue-intersect";
export default {
  components: {
    Intersect,
  },
  methods: {
    updateSection(value) {
      this.$store.commit("updatecurrentSection", value);
    },
    showContent() {
      document.querySelector(".hero__content").classList.remove("hideContent");
    },
    hideContent() {
      document.querySelector(".hero__content").classList.add("hideContent");
    },
  },
};
</script>

<style lang="scss" scoped>
/* ===============
    start hero
================ */
.hero {
  background: url("/img/bg_3.webp"), url("/img/bg_2.webp"), url("/img/bg_1.webp");
  background-repeat: no-repeat;
  background-position: center 620px, center 350px, center 0%;
  height: 1600px;
  position: relative;
  z-index: 0;
  @media (max-width: 980px) {
    height: 1200px;
    background-position: -440px 420px, center 250px, center 0%;
  }
  &::before {
    content: "";
    display: block;
    height: 80%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background: linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0b1d26 108.93%);
  }
  &::after {
    content: "";
    display: block;
    height: 700rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 61.38%);
  }
}
.hero__content {
  z-index: 2;
  grid-column: 5 / -5;
  max-width: 950rem;
  margin-top: 287rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 36rem;
  opacity: 1;
  transition: opacity 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  @media (max-width: 830px) {
    grid-column: 2/-2;
  }
  &.hideContent {
    opacity: 0;
  }
}
.hero__title {
  text-transform: capitalize;
  letter-spacing: 3px;

  @media (max-width: 830px) {
    font-size: 50rem;
  }
}

.btn__scroll {
  transition: color 0.25s;
  &:hover {
    color: var(--color-accent);
  }
}
</style>
