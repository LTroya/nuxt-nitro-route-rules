<script setup>
const { data: posts } = await useFetch(
  "https://jsonplaceholder.typicode.com/posts"
);
</script>

<template>
  <div>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/posts/${post.id}`">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
