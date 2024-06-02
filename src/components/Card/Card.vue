<template>
  <div class="card-container">
    <div class="card">
      <p class="text">{{ text }}</p>
      <ul class="hashtags">
        <li v-for="(tag, index) in hashtags" :key="index" class="hashtag">{{ tag }}</li>
      </ul>
    </div>
    <div class="card-buttons">
    <button class="popup-button" @click="openPopup"><svg class = "buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg> Share</button>
    <button class="refresh-button" @click="refreshCard">    <svg class = "buttonIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg> Refresh</button>
    </div>
    <Popup v-if="popupVisible" :preMadeMessage="preMadeMessage" @close="closePopup" />
  </div>
</template>

<script>
import Popup from '../Popup/Popup.vue';
export default {
  components: {
    Popup
  },
  data() {
return {
  popupVisible: false,
  preMadeMessage:''
};
},
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
    },
    openPopup() {
    this.preMadeMessage = 
        `My opinion on the topic: ${this.text}

        Introduction

        [You can use our sources to get inspiration: 
        
        ${this.sources.join(',\n')}]

        My Take

        [Insert opinion]

        Conclusion

        [Insert conclusion]

        You can also share your opinion! Go to TopicShare and share your opinion on this topic! 

        #TopicShare ${this.hashtags.join(' ')}`
        this.popupVisible = true;
    },
    closePopup() {
      this.popupVisible = false;
    },
  }
};
</script>

<style scoped>
@import "./card.css";
</style>
