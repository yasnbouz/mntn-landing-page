<template>
  <div class="blog_container">
    <h1>An awesome blog</h1>
    <div class="card">
      <h2>An awesome blog post</h2>
      <img
        height="200px"
        width="100%"
        src="https://images.unsplash.com/photo-1617190539768-d5ffe5bee4cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        alt="my home"
      />
      <p>
        Lorem ipsum dolor sit <a href="">amet consectetur</a> adipisicing elit.
        Tenetur magnam laudantium sint! In iure, voluptatibus dolorum facilis
        aliquam distinctio qui cumque laborum perferendis, vel culpa sit at
        commodi labore blanditiis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magnam
        laudantium sint! In iure, <a href="">voluptatibus dolorum</a> facilis
        aliquam distinctio qui cumque laborum perferendis, vel culpa sit at
        commodi labore blanditiis!
      </p>
      <a href="">Read more...</a>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.blog_container {
  --color-100: #2e7ad3;
  --color-200: #104c90;
  --color-300: #ff8000;
  --color-400: #f1f1f1;
  --fontSize-heading-100: 32px;
  --fontSize-heading-200: 48px;
  --fontSize-text-100: 16px;
  font-size: var(--fontSize-text-100);
  margin: 1rem;
  display: inline-block;
  h1 {
    font-size: var(--fontSize-heading-200);
    color: var(--color-100);
    text-align: center;
    margin-bottom: 45px;
  }
}
.card {
  max-width: 500px;
  margin: auto;
  background-color: var(--color-400);
  padding: 25px;
  h2 {
    color: var(--color-200);
    font-size: var(--fontSize-heading-100);
    margin-bottom: 9px;
  }
  img {
    margin-bottom: 25px;
  }
  p {
    margin-bottom: 9px;
    line-height: 1.5;
  }
  a {
    color: var(--color-300);
    font-weight: bold;
    background-color: red;
    &:focus,
    &:hover {
      color: var(--color-100);
    }
  }
}
</style>