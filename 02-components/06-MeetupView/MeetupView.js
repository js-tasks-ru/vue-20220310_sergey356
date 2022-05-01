import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div >
      <meetup-cover :title="meetup.title" :style="meetup.image && {'--bg-url': \`url(\${ meetup.image })\` }" />
      <ui-container>
        <!-- <template v-slot:ui-content>-->
          <div class="meetup"> <!--v-for="item in meetup"--> 
            <div class="meetup__content">
              <h3>Описание</h3>
              
              <meetup-description :description="meetup.description" />
              <h3>Программа</h3>
              <meetup-agenda :agenda="meetup.agenda" /> 
              <ui-alert v-if="meetup.agenda === null">Программа пока пуста...</ui-alert>
                                
            </div>
            <div class="meetup__aside">
              <meetup-info 
                :organizer="meetup.organizer" 
                :date="meetup.date"  
                :place="meetup.place"
              />              
            </div>     
          </div>
        <!-- </template>     -->   
      </ui-container>
    </div>`,
});

