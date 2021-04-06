<template>
  <header>
    <div class="container container-nav">
      <div class="logo">
        <h1>Living the simple life</h1>
        <p>a blog exploring a minimalism in life</p>
      </div>
      <nav class="nav_menu">
        <ul class="nav_list">
          <li><router-link class="nav_link" to="/">Home</router-link></li>
          <li><router-link class="nav_link" to="/about">about me</router-link></li>
          <li><router-link class="nav_link" to="/posts">recent posts</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: hsl(0deg 0% 96%);
}
.container-nav {
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;

  @media (min-width: 780px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  }
}

.logo {
  text-align: center;
  h1 {
    color: var(--color-blue-200);
    margin-bottom: 0.125em;
  }
  p {
    color: var(--color-blue-100);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.nav_list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  @media (min-width: 480px) {
    flex-direction: row;
  }
}

.nav_link {
  display: inline-block;
  text-decoration: none;
  color: var(--color-black);
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  padding: 0.25em 0;
  border-bottom: 1px solid transparent;
  &:focus,
  &:hover {
    color: var(--color-blue-200);
  }
  &.router-link-active {
    color: var(--color-blue-200);
    border-bottom: 1px solid var(--color-black);
  }
}
</style>
