<script setup>
const route = useRoute();
const { data: post } = await useFetch(
  `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
);
</script>

<template>
  <div>
    <h1>1:{{ post.title }}</h1>
    {{ post.body }}
  </div>
</template>
