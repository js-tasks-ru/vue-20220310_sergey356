import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      digit1: 0,
      digit2: 0,
      result: '',
    };
  },

  methods: {
    sumValues() {
      this.result = this.digit1 + this.digit2;
      return this.result;
    },
    subtractValues() {
      this.result = this.digit1 - this.digit2;
      return this.result;
    },
    multiplyValues() {
      this.result = this.digit1 * this.digit2;
      return this.result;
    },
    divideValues() {
      this.result = this.digit1 / this.digit2;
      return this.result;
    },
  },
});

const app = createApp(Root);
const vm = app.mount('#app');
