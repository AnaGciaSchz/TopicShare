<template>
    <div class="popup-container">
      <div class="popup">
        <div class="popup-header">
          <h2 class="poppup-title" >Share on Social Media!</h2>
          <svg class="closeButton" @click="closePopup" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
        <pre class="popup-content">{{ preMadeMessage }}</pre>
        <button class = "copyButton" @click="copyMessage">Copy</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      preMadeMessage: {
        type: String,
        required: true
      }
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      copyMessage() {
        const textarea = document.createElement('textarea');
        textarea.value = this.preMadeMessage;
  
        document.body.appendChild(textarea);
        textarea.select();
  
        document.execCommand('copy');

        document.body.removeChild(textarea);
      }
    }
  };
  </script>
  
  <style scoped>
@import "./popup.css";
  </style>
  