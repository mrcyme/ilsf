import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);


const messages = {
  fr: {
    "musiccabine": 'La cabine musicale:',
    "dirigent": "Le chef d'orchestre",
  },
  nl: {
    "musiccabine": 'De muziekcabine:',
    "dirigent": "De dirigentenruimte",
  },
};


const i18n = new VueI18n({
  locale: 'fr',
  messages
});


new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
