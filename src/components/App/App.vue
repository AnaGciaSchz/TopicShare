<template>
    <div id="app">
      <Card :text="textContent" :hashtags="cardHashtags" @refresh="handleRefresh"/>
      <Sources :sources="sources" @refresh="handleRefresh"/>
    </div>
  </template>
  
  <script>
  import Card from '../Card/Card.vue';
  import Sources from '../SourcesList/Sources.vue';
  
  export default {
    name: 'App',
    components: {
      Card,
      Sources
    },
    data() {
      return {
        textContent: '',
        cardHashtags: [],
        sources: []
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
        handleRefresh() {
            this.fetchData();
    },
      async fetchData() {
        try {
          const response = await fetch('http://localhost:3000/topics/random');
          const data = await response.json();
          this.textContent = data.content;
          this.cardHashtags = data.hashtags;
          this.sources = data.sources;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    }
  };
  </script>
  
  <style>
@import "./app.css";
  </style>