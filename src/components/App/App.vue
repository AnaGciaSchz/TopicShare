<template>
  <div id="app">
    <h1 class="webTitle"> Welcome to TopicShare</h1>
    <Card class="cardSection":text="textContent" :hashtags="cardHashtags" :sources=sources @refresh="handleRefresh"/>
    <Sources class="sourcesSection" :sources="sources"/>
  <footer class="footer">
    App prototype by <a href="https://github.com/AnaGciaSchz">@AnaGciaSchz</a> on GitHub
    <address>
    Written by <a href="mailto:anagciaschz@gmail.com">Ana 'anuskuskus' García</a>.<br>

    Visit me at:<br>
<a href="https://anuskuskus.me/">https://anuskuskus.me/</a>
</address>
  </footer>
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