<template>
  <!-- <h1 class="heading">CSS3 Practice</h1> -->
  <!-- <project-1 /> -->
  <!-- <project-2 /> -->
  <!-- <project-3 /> -->
  <!-- <project-4 /> -->
  <!-- <project-5 /> -->
  <!-- <project-6 /> -->
  <project-7 />
</template>

<script>
// import Project1 from "./components/Project1.vue";
// import Project2 from "./components/Project2.vue";
// import Project3 from "./components/Project3.vue";
// import Project4 from "./components/Project4.vue";
// import Project5 from "./components/Project5.vue";
// import Project6 from "./components/Project6/Project6.vue";
import Project7 from "./components/Project7.vue";
export default {
  components: {
    // Project1,
    // Project2,
    // Project3,
    // Project4,
    // Project5,
    // Project6,
    Project7,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  height: 100%;
}

body {
  min-height: 100%;
  line-height: 1;
}
.heading {
  color: crimson;
  text-align: center;
  background-color: orange;
  padding: 1rem;
  font-family: Nunito, sans-serif;
}
img {
  max-width: 100%;
  display: block;
}
</style>
