<script setup>
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <div>
    <nuxt-link to="/posts">See posts</nuxt-link>
  </div>
</template>
