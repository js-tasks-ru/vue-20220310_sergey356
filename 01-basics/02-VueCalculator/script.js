import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      digit1: 0,
      digit2: 0,
      operation: '+',
    };
  },

  computed: {
    result(){
      switch (this.operation) {
        case '+':
          return this.digit1 + this.digit2;
        break;
        case '-':
          return this.digit1 - this.digit2;
        break;
        case '*':
          return this.digit1 * this.digit2;
        break;
        case '/':
          return this.digit1 / this.digit2;
        break;
      }
    },
  },
});

const app = createApp(Root);
const vm = app.mount('#app');
