<template>
  <div class="content">
    <h1>
      Lorem ipsum dolor, sit amet
      <span class="highlight">adipisicing elit.</span> Voluptas vel, aliquid
      veniam totam provident
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      <a href="#">unde provident odio quasi quis</a>
      <b>ea sapiente? Unde voluptatibus ex</b>, minima, tempora omnis possimus
      autem vero quod nemo sed, id at.
    </p>
    <div class="links">
      <a href="#" class="btn-sm">contact me</a>
      <a href="#" class="">about me</a>
      <a href="#" class="btn-big">about me</a>
    </div>
  </div>
</template>

<script setup>
</script>


<style lang="scss" scoped>
.content {
  display: grid;
  gap: 2em;
  max-width: 800px;
  background-color: #111;
  color: white;
  padding: 4em;
  margin: 1em;
}

h1 {
  font-size: 1.5rem;
}
p {
  font-size: 1.25rem;
}
.highlight {
  color: #f4af01;
}
.links {
  align-items: center;
  display: flex;
  gap: 2em;
}
a {
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0 8px;
}

a:visited {
  color: plum;
}
a:focus,
a:hover {
  color: lightgreen;
}

.links a {
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #f4af01;
  color: #111;
  padding: 0.5em 1.5em;
}
.btn-sm {
  font-size: 0.75rem;
}
.btn-big {
  font-size: 1.75rem;
}
</style>