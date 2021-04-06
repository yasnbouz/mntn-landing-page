  <template>
  <div class="app">
    <header>
      <h1>This is a Heading</h1>
    </header>
    <main>
      <section class="section section-one">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo
          saepe, fugiat omnis deleniti nisi aperiam necessitatibus dolor numquam
          beatae magnam, eligendi iure delectus provident sequi inventore autem,
          perferendis possimus ab sed nam aliquid quae minima. Id similique
          suscipit dolore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure
          nisi nulla mollitia suscipit quidem soluta, aspernatur expedita rem
          at! Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          iure nisi nulla mollitia suscipit quidem soluta, aspernatur expedita
          rem at!
        </p>
        <div class="links">
          <a class="btn btn-yellow" href="">contact me</a
          ><a class="btn btn-yellow" href="">about me</a>
        </div>
      </section>
      <section class="section section-two">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quo
          saepe, fugiat omnis deleniti nisi aperiam necessitatibus dolor numquam
          beatae magnam, eligendi iure delectus provident sequi inventore autem,
          perferendis possimus ab sed nam aliquid quae minima. Id similique
          suscipit dolore!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iure
          nisi nulla mollitia suscipit quidem soluta, aspernatur expedita rem
          at!
        </p>
        <div class="links">
          <a class="btn btn-black btn-yellow" href="">contact me</a
          ><a class="btn btn-black" href="">about me</a>
        </div>
      </section>
    </main>
  </div>
</template>


  <style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
.app {
  max-width: 50rem;
  font-family: Nunito, sans-serif;
}
header {
  background-color: orange;
  h1 {
    color: #222;
    padding: 20px;
    text-align: center;
    font-size: 2rem;
  }
}
.section {
  padding: 40px;
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
}
.section-one {
  background-color: #111;
  color: white;
}
.section-two {
  background-color: #eee;
  color: #111;
}
.btn {
  display: inline-block;
  padding: 16px 32px;
  text-decoration: none;
  font-weight: bold;

  &::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
}
.btn-yellow {
  background-color: orange;
  color: #000;
  &:focus,
  &:hover {
    background-color: white;
  }
}
.btn-black {
  background-color: #111;
  color: #fff;
  &:focus,
  &:hover {
    background-color: #222;
  }
}
</style>