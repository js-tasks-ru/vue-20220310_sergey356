import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiAlert',

  props: {
    text: String,
  },

  template: `
    <div class="alert">
      <slot >{{ text }}</slot>
    </div>`,
});
//name="alert"