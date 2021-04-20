<template>
  <header class="header main-grid">
    <div class="logo">
      <span>MNTN</span>
    </div>
    <nav class="main__nav">
      <ul class="main__list">
        <li><a class="nav__link" href="/equipment">equipment</a></li>
        <li><a class="nav__link" href="/about us">about us</a></li>
        <li><a class="nav__link" href="/blog">blog</a></li>
        <li class="account__link">
          <a class="nav__link nav__link--icon" href="/account"> <font-awesome-icon :icon="['far', 'user-circle']" /> <span>account</span></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
/* ===============
    start header
================ */

.header {
  align-items: center;
  position: absolute;
  width: 100%;
  left: 0;
  top: 64rem;
  row-gap: 32rem;
  z-index: 2;
}
.logo {
  grid-column: 2;
  font-family: "Chronicle";
  font-size: 32rem;
  font-weight: 900;
}
.main__nav {
  grid-column: 7 / -2;
}

.main__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20rem 40rem;
  > li {
    flex: 0 0 auto;
  }
}
.account__link {
  margin-left: auto;
}
.nav__link {
  font-family: inherit;
  font-size: 18rem;
  display: inline-block;
  border-bottom: 2px solid transparent;
  transition: color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-bottom: 8rem;
  margin-bottom: -8rem;
  &::first-letter {
    text-transform: capitalize;
  }
  &:focus,
  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
  &--icon {
    svg,
    span {
      display: inline-block;
      vertical-align: middle;
    }
    svg {
      margin-right: 8rem;
    }
    span::first-letter {
      text-transform: uppercase;
    }
  }
}
@media (max-width: 830px) {
  .logo {
    grid-column: 2;
    justify-self: center;
  }
  .main__nav {
    grid-column: 2;
    grid-row: 2;
    justify-self: center;
  }
  .account__link {
    margin-left: 0;
  }
}
/* ===============
    end header
================ */
</style>
