<template>
  <div class="container container-flex">
    <main>
      <article>
        <img src="/img/about-me.jpg" alt="" class="image-full" />
        <h2 class="about-title">My name is John and living the simple life saved my life</h2>

        <p class="about-body"><strong>I used to be a pack rat.</strong> I had so many things that I thought that I loved, but the truth was I couldn't even appreciate any of it because there was too much.</p>
        <p class="about-body">Things were terrible. I had a job that I hated, a home that I didn't want to live in, and I couldn't hold a relationship.</p>

        <h3 class="about-subtitle">How I turned things around</h3>
        <p class="about-body"><strong>I was on the verge of a breakdown when I got rid of everything.</strong> I literally put 90% of my possessions in the garbage, sold my place and moved into a smaller apartment, and I quit my job.</p>
        <p class="about-body">It wasn't easy at all, but everything around me was in such a bad place, I didn't know what else to do. And it worked.</p>

        <h3 class="about-subtitle">Now I live the simple life</h3>
        <p class="about-body">Now that I'm living a simple life, things are so much better. I'm less stressed, enjoy life and work more, and I have more free time to enjoy.</p>
        <p class="about-body">With how much it turned my life around, <strong>I felt like I had no choice but to start sharing how I did it</strong>, and how others can benefit from living a simple life as well, which is why I started this site!</p>
      </article>
    </main>
    <aside class="sidebar">
      <section class="sidebar-widget">
        <h2 class="widget-title">Recent posts</h2>
        <div class="widget-recent-post">
          <img src="/img/food.jpg" alt="" />
          <h3 class="widget-post-title">Keeping cooking simple</h3>
        </div>
        <div class="widget-recent-post">
          <img src="/img/work.jpg" alt="" />
          <h3 class="widget-post-title">Simplicity and work</h3>
        </div>
        <div class="widget-recent-post">
          <img src="/img/deco.jpg" alt="" />
          <h3 class="widget-post-title">Simple decorations</h3>
        </div>
      </section>
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.container-flex {
  display: flex;
  flex-direction: column;
  gap: 2em;
  @media (min-width: 768px) {
    flex-direction: row;
  }
}
/* main */
main {
  flex: 2;
  padding: 2em 0;
}
.sidebar {
  flex: 1;
  padding: 2em 0;
}

.about-title {
  color: var(--color-blue-200);
  margin-bottom: 0.5em;
  font-weight: bold;
}

.about-subtitle {
  color: var(--color-blue-100);
  /* margin: 1em 0; */
  margin-bottom: 1em;
}

.image-full {
  max-height: 400px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 2em;
}

.about-body {
  line-height: 1.7;
  margin-bottom: 1em;
  &:last-child {
    margin-bottom: 0;
  }
}

/* sidebar */
.widget-title {
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: var(--color-blue-200);
  margin-bottom: 0.5em;
}

.widget-post-title {
  color: var(--color-blue-100);
  margin-top: 0.5em;
}
.sidebar-widget,
.widget-recent-post {
  margin-bottom: 1.25em;
  &:last-child {
    margin-bottom: 0;
  }
}
.sidebar-widget {
  padding: 1.5em;
  border: 1.5em solid #f5f5f5;
}
</style>
