import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      // `this` указывает на экземпляр компонента
      this.count++;
    },
  },
});
//++
const app = createApp(Root);
const vm = app.mount('#app');
