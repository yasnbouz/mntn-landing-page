<template>
  <footer class="main-grid">
    <div class="brand__info">
      <div class="logo">
        <span>MNTN</span>
      </div>
      <p class="brand__text">Get out there & discover your next slope, mountain & destination!</p>
      <p class="copyright">Copyright 2019 MNTN, Inc. Terms & Privacy</p>
    </div>
    <nav class="footer__nav">
      <div>
        <h3 class="nav__title">More on The Blog</h3>
        <ul class="footer__list">
          <li><a href="/about" class="footer__link">About MNTN</a></li>
          <li><a href="/contributors" class="footer__link">Contributors & Writers</a></li>
          <li><a href="/write-for-us" class="footer__link">Write For Us</a></li>
          <li><a href="/contact-us" class="footer__link">Contact Us</a></li>
          <li><a href="/privacy" class="footer__link">Privacy Policy</a></li>
        </ul>
      </div>
      <div>
        <h3 class="nav__title">More on MNTN</h3>
        <ul class="footer__list">
          <li><a href="/team" class="footer__link">The Team</a></li>
          <li><a href="/jobs" class="footer__link">Jobs</a></li>
          <li><a href="/press" class="footer__link">Press</a></li>
        </ul>
      </div>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
/* ===============
    stat footer
================ */
footer {
  padding-bottom: 120rem;
}
.brand__info {
  grid-column: 3/9;
}
.brand__text {
  margin-top: 24rem;
  max-width: 30ch;
  line-height: 1.77;
}
.copyright {
  margin-top: 122rem;
  opacity: 0.6;
  font-weight: 500;
  line-height: 1.4;
}
.footer__nav {
  grid-column: 9/-3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32rem;
}
.nav__title {
  font-size: 24rem;
  color: var(--color-accent);
  margin-bottom: 1em;
}
.footer__list {
  display: grid;
  row-gap: 16rem;
}
.footer__link {
  font-weight: 500;
  transition: color 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
  &:focus,
  &:hover {
    color: var(--color-accent);
  }
}

@media (max-width: 830px) {
  .copyright {
    margin-top: 28rem;
  }
  .brand__info,
  .footer__nav {
    grid-column: 2/-2;
  }
  .footer__nav {
    margin-top: 120rem;
  }
}
/* ===============
    end footer
================ */
</style>
