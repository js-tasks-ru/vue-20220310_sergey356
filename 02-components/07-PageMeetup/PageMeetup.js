import { defineComponent } from './vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js';
import MeetupView from '../06-MeetupView/MeetupView.js';
import { fetchMeetupById } from './meetupService.js';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgendaItem,
    MeetupAgenda,
    MeetupView,
  },

  props: {
    meetupId: Number,
  },

  watch: {
    meetupId(meetupId) {
      fetchMeetupById(meetupId)
        .then( (meetupId)=>{
          return resolve(meetupId) ;
        })
        /*.then(
          (!meetupId) => {
            return  reject('error');
          }       
        );*/
      
    },
  },

  template: `
    <div class="page-meetup">
      <meetup-view> </meetup-view>

      <ui-container>
        <ui-alert>Загрузка...</ui-alert>
      </ui-container>

      <ui-container>
        <ui-alert>error</ui-alert>
      </ui-container>
    </div>`,
});
// Как использовать fetchMeetupById ? 
