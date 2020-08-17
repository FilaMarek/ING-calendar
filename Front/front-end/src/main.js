import Vue from 'vue'
import App from './App.vue'

window.axios = require('axios');

new Vue({
  el: '#app',

  mounted: function () {
    axios
      .get('http://localhost:3001/query.json')
      .then(response => console.log(response))
  },



  render: h => h(App),




})
