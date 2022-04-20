import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

/**
 * Как получить митапы и откуда?
 * Какие данные ложаться в data?
 * Как реализовать через watch?
 */
//const app = Vue.createApp({})
const app = createApp({
  name: 'Root',

  data() {
    return {
      meetupId: 1,
      meetupTitle: '',
    };
  },
  //console.log(newValue);
  watch: {
    meetupId(newValue) {
      fetchMeetupById(newValue)
        .then( (res)=> {
          this.meetupTitle = res.title ;
        });
    },

  },

});

// Требуется создать Vue приложение

//const app = createApp();
const vm = app.mount('#app');
window.vm = vm;

/*
1) Обеспечили работу радиокнопоко через v-model

*/
