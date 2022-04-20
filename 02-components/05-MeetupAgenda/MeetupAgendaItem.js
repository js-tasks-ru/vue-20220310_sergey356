import { defineComponent } from './vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from './meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  components: {
    agendaItemIcons: agendaItemIcons,
    agendaItemDefaultTitles: agendaItemDefaultTitles,
  },
  props: {
    agendaItem: {
      type: Object,
      required: true,
    },
  },

  data(){
    return {
      type: '',
    }
  },
  computed: {
    // getTitle: function() {
    //  return this.agendaItem.title; // как вычислить agendaItem.title
    // },
  },

  //  { "agendaItem": null }   v-if="opening === 'cal-sm' "
  template: ` 
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img src="/assets/icons/icon-key.svg" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title"> {{ agendaItem.title }} </h3>
        <p  v-if="type === 'talk'" class="agenda-item__talk">
          <span> {{ agendaItem.speaker }} </span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang"> {{ agendaItem.language }}</span>
        </p> 
        <p>{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
