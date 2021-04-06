<template>
  <div class="app">
    <header>
      <div class="container">
        <h1>CSS is lot of fun</h1>
      </div>
    </header>
    <main>
      <section class="section-one">
        <div class="container">
          <h2 class="section_title">section one title</h2>
          <img
            src="https://images.unsplash.com/photo-1617040415471-29aed113f175?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80"
            alt="my home at night"
          />
          <p>
            Lorem ipsum dolor sit, amet
            <a href="" class="link">consectetur adipisicing</a> elit.
            <strong>Perferendis nam quos nemo harum.</strong> Eveniet, saepe
            doloremque! Ex provident deleniti eligendi?
          </p>
        </div>
      </section>
      <section class="section-two">
        <div class="container">
          <h2 class="section_title">section two title</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae at
            enim, sed repudiandae mollitia suscipit laudantium aliquid facilis
            maxime fugiat adipisci officiis nesciunt rerum dolorum, atque esse
            id possimus! Vitae.
          </p>
          <p>
            Lorem
            <a href="" class="link">consectetur adipisicing</a> elit.
            <strong>Perferendis nam quos nemo harum.</strong>
            Eveniet, saepe doloremque! Ex provident deleniti eligendi?
          </p>
          <div>
            <a href="" class="btn btn-accent">contact us</a>
            <a href="" class="btn btn-white">more info</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap");

.app {
  max-width: 50rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  border-right: 1px solid #2e354f;
}

.container {
  max-width: 620px;
  margin: auto;
  padding: 0 1em;
  box-sizing: content-box;
}
h1,
h2,
strong {
  font-weight: 900;
}
h1 {
  font-size: 2.25rem;
}
h2 {
  font-size: 1.5rem;
}

header {
  background-color: #2e354f;
  color: #fff;
}
header,
section {
  padding: 2rem 0;
}
.section-one {
  background-color: rgb(255, 255, 255);
  color: #000;
}
.section-two {
  background-color: #2e354f;
  color: #fff;
}
img {
  margin-bottom: 1em;
}
.section_title {
  color: #ef5839;
  text-transform: capitalize;
  margin-bottom: 1.125em;
}
p {
  font-size: 1rem;
  line-height: 1.5;
  & + * {
    margin-top: 1.25rem;
  }
}

a {
  color: #ef5839;
  display: inline-block;
  &:focus,
  &:hover {
    color: green;
  }
}
.btn {
  font-size: 0.8rem;
  display: inline-block;
  padding: 1em 2em;
  text-decoration: none;
  font-weight: 900;
  & + * {
    margin-left: 2em;
  }
}
.btn-accent {
  background-color: #ef5839;
  color: #fff;
  &:focus,
  &:hover {
    opacity: 0.9;
  }
}
.btn-white {
  background-color: #fff;
  color: #333;
  &:focus,
  &:hover {
    opacity: 0.9;
  }
}
</style>;
