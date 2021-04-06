<template>
  <div class="container container-flex">
    <main>
      <article class="article-recent">
        <div class="col-1">
          <img src="/img/life.jpg" alt="life" class="article-image" />
          <p class="article-info">July 23, 2019 | 3 comments</p>
        </div>
        <div class="col-2">
          <h2 class="article-title">Finding simplicity in life</h2>
          <p class="article-body">Life can get complicated really quickly, but it doesn't have to be! There are many ways to simplify your life, a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>
          <a href="" class="article-link">continue reading</a>
        </div>
      </article>
      <article class="article-recent">
        <div class="col-1">
          <img src="/img/food.jpg" alt="" class="article-image" />
          <p class="article-info">July 19, 2019 | 23 comments</p>
        </div>
        <div class="col-2">
          <h2 class="article-title">Keeping cooking simple</h2>
          <p class="article-body">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
          <a href="" class="article-link">continue reading</a>
        </div>
      </article>
      <article class="article-recent">
        <div class="col-1">
          <img src="/img/work.jpg" alt="" class="article-image" />
          <p class="article-info">July 19, 2019 | 40 comments</p>
        </div>
        <div class="col-2">
          <h2 class="article-title">Simplicity and work</h2>
          <p class="article-body">Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out.</p>
          <a href="" class="article-link">continue reading</a>
        </div>
      </article>
      <article class="article-recent">
        <div class="col-1">
          <img src="/img/deco.jpg" alt="" class="article-image image-left" />
          <p class="article-info">July 19, 2019 | 18 comments</p>
        </div>
        <div class="col-2">
          <h2 class="article-title">Simple decorations</h2>
          <p class="article-body">A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before.</p>
          <a href="" class="article-link">continue reading</a>
        </div>
      </article>
    </main>
    <aside class="sidebar">
      <section class="sidebar-widget">
        <h2 class="widget-title">About me</h2>
        <img src="/img/about-me.jpg" alt="" />
        <p class="widget-body">I find life better, and I'm happier, when things are nice and simple.</p>
      </section>
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

.article-title {
  color: var(--color-blue-200);
  margin-bottom: 0.5em;
  font-weight: bold;
}
.article-image {
  margin-bottom: 1em;
}
.article-info {
  color: var(--color-black);
  font-size: 0.875em;
  font-weight: normal;
}
.article-body {
  line-height: 1.7;
  margin: 1em 0;
}
.body-link {
  color: var(--color-blue-100);
  font-size: 1.125rem;
  font-weight: normal;
}
.article-link {
  color: var(--color-blue-100);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75em;
  letter-spacing: 1px;
  &:focus,
  &:hover {
    text-decoration: underline;
    color: var(--color-blue-200);
  }
}
.article-recent {
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 1000px) {
    flex-direction: row;
    .col-1 {
      flex: 0 0 200px;
    }
    .col-2 {
      flex: 2;
    }
    .article-image {
      min-height: 250px;
      object-fit: cover;
    }
    .image-left {
      object-position: left;
    }
  }
}
/* sidebar */
.widget-title {
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  color: var(--color-blue-200);
  margin-bottom: 0.5em;
}
.widget-body {
  line-height: 1.4;
  margin-top: 0.5em;
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
