import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      emails,

      filter: {
        search: '',
      },
    };
  },

  computed: {
    filteredEmails() {
      return this.filterEmails();
    },
  },
  methods: {
    // здесь происходить фильтрация данных,
    // а в data() filteredEmails попадают фильтрованные данные
    filterEmails() {
      return this.emails.map(email => {
        if (this.filter.search.length > 0 && email.toLowerCase().includes(this.filter.search.toLowerCase())) {
          return { text: email, active: true };
        } else {
          return { text: email, active: false };
        }
      });
    },
  },
});
// следующий шаг в инпуте выправить получение и отправку данных
const app = createApp(Root);
const vm = app.mount('#app');

window.vm = vm;
