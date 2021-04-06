<template>
  <div class="app">
    <header>
      <h1>
        Let's start <span class="highlight">getting a little</span> more fancy!
      </h1>
      <div class="img-wrapper"></div>
    </header>
    <main>
      <section class="row">
        <article class="content col col-sm">
          <h2>Dolor sit</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
            esse totam ut, minima blanditiis excepturi vel dignissimos harum,
            cumque nesciunt fugit suscipit. Asperiores esse possimus soluta,
            sapiente velit nobis? Enim, et temporibus quae dolores nam, ipsam
            similique non itaque ratione repellendus quo architecto. Asperiores
            veritatis, perspiciatis fugit praesentium dolorem sapiente, iure
            architecto alias
          </p>
        </article>
        <article class="col content">
          <h2>Lorem ipsum dolor sit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            expedita quos exercitationem. Autem temporibus dolores eius ut!
            Deleniti in ullam ipsum labore iure voluptates maiores explicabo
            sed, hic aliquam dolor enim. Veritatis deserunt eaque maiores
            dolorem voluptatum natus consectetur quae amet! Mollitia iste, hic
            aliquam ab temporibus blanditiis recusandae corporis unde qui iusto
            quia beatae impedit eos ut nesciunt sit?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            nesciunt est quisquam pariatur quod non nihil saepe. Soluta hic,
            quos fugiat architecto nulla magni provident eum reiciendis
            recusandae quibusdam non?, consectetur adipisicing elit. Dicta
            nesciunt est quisquam pariatur quod non nihil saepe. Soluta hic,
            quos fugiat architecto nulla magni provident eum reiciendis
            recusandae quibusdam non?
          </p>
        </article>
        <article class="col col-sm content bg-brown">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            ipsum magni aliquam recusandae cupiditate, odit consequatur placeat,
            hic odio dignissimos voluptatum architecto ipsa nobis molestiae
            accusamus! Officia doloribus dolore dignissimos quisquam porro esse
            itaque ipsum incidunt corrupti consequuntur eos, ex nihil nisi
            eveniet culpa blanditiis at voluptatum recusandae veritatis natus
          </p>
        </article>
      </section>
      <section class="row">
        <article class="col content">
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            libero maiores porro adipisci odio, consequuntur similique. Nostrum,
            quos magni! Velit nostrum pariatur totam aliquam inventore, dicta,
            enim adipisci facilis ut, expedita a consequatur! Porro dolor
            provident, consequuntur ex sunt soluta, sit consequatur doloribus
            tempore iusto est. Veniam, corrupti? Illo vel aspernatur dolor ipsam
            numquam, molestiae voluptatem amet similique veritatis soluta.Illo
            vel aspernatur dolor ipsam numquam, molestiae voluptatem amet Illo
            vel aspernatur dolor ipsam numquam, molestiae voluptatem amet
          </p>
        </article>
        <article class="col col-sm content bg-brown">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            asperiores laudantium quidem assumenda ad minus dolorum. Possimus
            vero nobis tenetur fuga cum quisquam atque tempora dignissimos nam.
            Magnam, suscipit nostrum.
          </p>
        </article>
      </section>
    </main>
  </div>
</template>

 

<style lang="scss" scoped>
.app {
  max-width: 70rem;
  margin: 1rem auto;
  padding: 2em;
  background-color: #fff;
  color: #222;
  box-sizing: content-box;
  line-height: 1.5;
  font-size: 1.125rem;
}

header {
  margin-bottom: 2em;
}
.img-wrapper {
  height: 200px;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1517003142208-feb84c80413e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
  background-position: center 40%;
  background-repeat: no-repeat;
}
h1 {
  font-size: 3rem;
  padding: 0.5em;
  margin-bottom: 0.5em;
  text-align: center;
}
h2 {
  font-size: 1.5rem;
  color: #434343;
  margin-bottom: 0.75em;
}
p {
  & + * {
    margin-top: 1.5em;
  }
}

.highlight {
  color: #caa200;
}
.row {
  display: flex;
  gap: 1em;
  flex-direction: column;
  @media screen and (min-width: 780px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    .col {
      flex: 0 0 calc(50% - 1em);
    }
  }
  @media screen and (min-width: 980px) {
    .col {
      flex: 1;
    }
    .col-sm {
      flex: 0 0 280px;
    }
  }
}

section {
  background-color: #ffffff;
  & + * {
    margin-top: 2em;
  }
}
.content {
  padding: 0.75em 0;
  color: #434343;
}
.bg-brown {
  background-color: #414141;
  color: #f3f3f3;
  padding-left: 1.5em;
  padding-right: 1.5em;
}
</style>