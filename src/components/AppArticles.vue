<template>
  <div class="articles main-grid">
    <article :id="`article--1`" class="article">
      <intersect @enter="updateSection(1)" :threshold="[1.0]">
        <h2 class="article__title">What level of hiker are you?</h2>
        <p class="article__subtitle">
          get started
          <span class="article__number" aria-hidden="true">01</span>
        </p>
        <p class="article__body">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
        <a class="btn btn--icon btn__read" href="#" @click.prevent="">
          read more
          <svg aria-hidden="true" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="currentcolor" />
          </svg>
        </a>
        <img loading="lazy" class="article__img" src="/img/01.webp" alt="A men walking on mountain" />
      </intersect>
    </article>
    <article :id="`article--2`" class="article">
      <intersect @enter="updateSection(2)" :threshold="[1.0]">
        <h2 class="article__title">Picking the right Hiking Gear!</h2>
        <p class="article__subtitle">
          Hiking Essentials
          <span class="article__number" aria-hidden="true">02</span>
        </p>
        <p class="article__body">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
        <a class="btn btn--icon btn__read" href="#" @click.prevent="">
          read more
          <svg aria-hidden="true" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="currentcolor" />
          </svg>
        </a>
        <img loading="lazy" class="article__img" src="/img/02.webp" alt="A man on top of a camel" />
      </intersect>
    </article>
    <article :id="`article--3`" class="article">
      <intersect @enter="updateSection(3)" :threshold="[1.0]">
        <h2 class="article__title">Understand Your Map & Timing</h2>
        <p class="article__subtitle">
          where you go is the key
          <span class="article__number" aria-hidden="true">03</span>
        </p>
        <p class="article__body">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
        <a class="btn btn--icon btn__read" href="#" @click.prevent="">
          read more
          <svg aria-hidden="true" width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="currentcolor" />
          </svg>
        </a>
        <img loading="lazy" class="article__img" src="/img/03.webp" alt="A man holding a compass" />
      </intersect>
    </article>
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
  },
};
</script>

<style lang="scss" scoped>
/* ===============
    start articles
================ */

.articles {
  row-gap: 200px;
  padding-bottom: 200rem;
  margin-top: -400px;
}
.article {
  grid-column: 3/-3;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 1fr repeat(4, auto) 1fr;
  column-gap: 32px;
  row-gap: 27rem;
  position: relative;
  &:nth-child(even) {
    .article__title,
    .article__subtitle,
    .article__body,
    .btn__read {
      grid-column: 5 / -1;
      margin-left: 140rem;
    }

    .article__img {
      grid-column: 1 / 5;
      grid-row: 1/-1;
    }
  }
}

.article__img {
  grid-column: 7/-1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-row: 1/-1;
  z-index: 2;
}
.article__title,
.article__subtitle,
.article__body,
.article__number,
.btn__read {
  grid-column: 1/7;
}
.article__title {
  font-size: 42rem;

  grid-row: 3;
}
.article__subtitle {
  grid-row: 2;
  position: relative;
}
.article__body {
  grid-row: 4;
  line-height: 1.7;
  font-weight: 700;
  max-inline-size: 60ch;
  @media (max-width: 1162px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
.article__number {
  font-size: 240rem;
  position: absolute;
  top: -130rem;
  left: -160rem;
  color: hsl(0deg 0% 90% / 14%);
  z-index: 1;
}
.btn__read {
  color: var(--color-accent);
  grid-row: 5;
  align-items: end;
  transition: color 0.25s;
  &:hover {
    color: var(--color-white);
  }
}

@media (max-width: 830px) {
  .article {
    grid-column: 2/-2;
    grid-template-columns: 1fr;
    grid-template-rows: auto 400px repeat(3, auto);
    row-gap: 32rem;

    &:nth-child(even) {
      .article__img {
        grid-column: 1 / -1;
        grid-row: 2;
      }
      .article__title,
      .article__subtitle,
      .article__body,
      .btn__read {
        margin-left: 0;
      }
    }

    & > * {
      grid-column: 1/-1 !important;
    }
  }
  .article__img {
    grid-row: 2/3;
  }
  .article__subtitle {
    grid-row: 1;
  }
}

/* ===============
    end articles
================ */
</style>
