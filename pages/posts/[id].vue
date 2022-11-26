<script setup>
const route = useRoute();
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);
const { data: response } = await useFetch("/api/date");

useHead({ title: post.title });
</script>

<template>
  <div>
    <p>Current date: {{ response.currentDate }}</p>
    <h1>Post title: {{ post.title }}</h1>
    <p>Post body:</p>
    <p>{{ post.body }}</p>
  </div>
</template>
