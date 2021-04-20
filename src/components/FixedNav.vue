<template>
  <div class="fixed__section main-grid">
    <aside class="aside__social">
      <ul class="social">
        <li>Follow us</li>
        <li>
          <a href="#" aria-label="MNTN instagram">
            <font-awesome-icon :icon="['fab', 'instagram']" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="#" aria-label="MNTN twitter"> <font-awesome-icon :icon="['fab', 'twitter']" aria-hidden="true" /> </a>
        </li>
      </ul>
    </aside>
    <aside class="nav__track">
      <ul :style="{ '--count': currentSectionIndex }">
        <li>
          <a href="#hero" :style="[{ opacity: currentSectionIndex === 0 ? 1 : 0.6 }]">Start</a>
        </li>
        <li>
          <a href="#article--1" :style="[{ opacity: currentSectionIndex === 1 ? 1 : 0.6 }]">01</a>
        </li>
        <li>
          <a href="#article--2" :style="[{ opacity: currentSectionIndex === 2 ? 1 : 0.6 }]">02</a>
        </li>
        <li>
          <a href="#article--3" :style="[{ opacity: currentSectionIndex === 3 ? 1 : 0.6 }]">03</a>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  computed: {
    currentSectionIndex() {
      return this.$store.state.currentSectionIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
/* social */
.aside__social {
  grid-column: 2 / 3;
  grid-row: 1;
  align-self: center;
  pointer-events: all;
  ul {
    display: flex;
    column-gap: 24rem;
    writing-mode: vertical-lr;
  }
}

/* nav section */
.nav__track {
  grid-column: -3/-2;
  align-self: center;
  justify-self: end;
  overflow: hidden;
  pointer-events: all;
  ul {
    border-right: 3px solid hsla(0, 0%, 100%, 0.3);
    > li {
      position: relative;
      &:first-child::after {
        content: "";
        display: block;
        height: 100%;
        width: 3px;
        background-color: var(--color-white);
        position: absolute;
        right: -3px;
        top: 0;
        transition: transform 0.5s ease-out;
        transform: translateY(calc(82.4rem * var(--count)));
      }
      > a {
        display: block;
        padding: 30rem;
        text-align: right;
        transition: opacity 0.25s ease-out;
      }
    }
  }
}
.fixed__section {
  z-index: 2;
  position: fixed;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
@media (max-width: 830px) {
  .aside__social {
    grid-column: 1;
  }
  .nav__track {
    grid-column: 3;
  }
}
</style>
