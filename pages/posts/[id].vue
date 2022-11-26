<script setup>
const route = useRoute();
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);
</script>

<template>
  <div>
    <h1>Post title: {{ post.title }}</h1>
    <p>Post body: {{ post.body }}</p>
  </div>
</template>
