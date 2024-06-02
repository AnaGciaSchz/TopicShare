<template>
    <div class="card-container">
      <div class="card">
        <p class="text">{{ text }}</p>
        <ul class="hashtags">
          <li v-for="(tag, index) in hashtags" :key="index" class="hashtag">{{ tag }}</li>
        </ul>
      </div>
      <button class="refresh-button" @click="refreshCard">Refresh</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      hashtags: {
        type: Array,
        default: () => []
      },
      sources: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      refreshCard() {
        this.$emit('refresh');
      }
    }
  };
  </script>
  
  <style scoped>
@import "./card.css";
  </style>
  