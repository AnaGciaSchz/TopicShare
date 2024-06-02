<template>
    <div class="sources-container">
      <h2 class="title">Research about your topic!</h2>
        <div class="sources">
          <h3 class="sources-title">Sources:</h3>
          <ul>
            <li v-for="(source, index) in sources" :key="index" class="source">{{ source }}</li>
          </ul>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sources: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  
  <style scoped>
@import "./sources.css";
  </style>
  