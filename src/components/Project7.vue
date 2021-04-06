<template>
  <div class="app">
    <section class="hero">
      <div class="hero-flex">
        <div class="intro">
          <h1 class="intro-title">Learn how to make <strong>the best BBQ ribs</strong> in town</h1>
          <p class="intro-subtitle">Join us for this live webinar</p>
          <p class="top-text">Mouthwateringly delicious</p>
        </div>
        <div class="hero-content">
          <h2>Become a BBQ master!</h2>
          <p class="hero-subtitle">register today</p>
          <p class="hero-body">BBQ isn't just standing in front of your grill with it on full blast and hoping for the best. It's an art! One way to speed up the process is to learn from the best. You can do just that by signing up for this free webinar!</p>
          <form>
            <input type="text" placeholder="First name" class="input-form" aria-label="your first name" />
            <input type="email" placeholder="Email" class="input-form" aria-label="your email" />
            <button type="submit" class="btn-register" @click.prevent="">register</button>
          </form>
          <div class="info">
            <p>We'll never share your information</p>
            <p>without your permission</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;900&display=swap");

.app {
  --color-primary: #f18119;
  --color-black: #404040;
  --color-white: #fff;
  --gradient-100: linear-gradient(90deg, rgba(255, 165, 29, 1) 35%, rgba(255, 113, 59, 1) 100%);
  --gradient-200: linear-gradient(to bottom, hsla(0, 0%, 0%, 0.6), hsla(0, 0%, 0%, 0.6));
  font-family: "Source Sans Pro", sans-serif;
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-black);
}
h1,
h2,
h3 {
  font-weight: 900;
}
h1 {
  font-size: 2.25rem;
}
h2 {
  font-size: 1.3125rem;
}

/* hero image */
.hero-flex {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.intro {
  background: url(https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80);
  background-color: var(--color-black);
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-white);
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1em;
  min-height: 50vh;
}

.intro-title {
  line-height: 1;
  font-weight: 300;
  max-width: 36ch;
  margin-bottom: 0.4em;
}

.top-text {
  order: -1;
  font-size: 0.625em;
  font-weight: bold;
  line-height: 2.4;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-primary);
  border-top: 4px solid;
  border-image-slice: 1;
  border-image-source: var(--gradient-100);
}
.intro-subtitle,
.hero-subtitle {
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-primary);
  font-weight: 900;
}
/* hero content */

/* hero content */
.hero-content {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-subtitle {
    margin-bottom: 2em;
  }
}
.hero-body {
  max-width: 40ch;
  text-align: center;
}
form {
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  margin: 1em 0;
  .input-form {
    font-family: inherit;
    font-size: 1rem;
    border: 1px solid #cacaca;
    border-radius: 4px;
    padding: 0.8rem 1.2rem;
  }
  .btn-register {
    padding: 0.8rem 1.2rem;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 0.625rem;
    color: var(--color-white);
    border: 0;
    background: var(--gradient-100);
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 0.25s ease;
    &:hover {
      color: var(--color-black);
    }
  }
}
.info {
  text-align: center;
}

/* media query tablet */

@media (min-width: 690px) {
  .app {
    font-size: 1.125rem;
  }
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 1.75rem;
  }
  .hero-flex {
    flex-direction: row;
    .intro {
      flex: 1;
    }
    .hero-content {
      flex: 0.7;
    }
  }
  .intro-title {
    margin-top: auto;
  }
  .intro-subtitle {
    margin-bottom: auto;
  }
  .hero-content {
    justify-content: center;
  }
}
</style>
