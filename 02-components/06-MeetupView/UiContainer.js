import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'UiContainer',

  /*props: {
    description: String,

    agenda: Array,

    organizer: String,
    place: String,
    date: Number,
  },*/
  
  template: `  
    <div class="container">
      <slot /> 
    </div>`,
});
// name="ui-content"
