import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);


const messages = {
  fr: {
    "musiccabine": 'Activitée 1: La cabine musicale',
    "dirigent": "Activitée 2 : Le chef d'orchestre",
    "chatbot" : "Activitée 3 : Le chatbot",
    "explain_musiccabine": "La cabine musicale, c'est une expérience immersive dans laquel tu peux composer ta propre musique en appuyant sur les différents boutons lumineux, pour la version en ligne nous avons remplacé les bouton par des touches de piano. La mélodie est générée automatiquement par une intelligence artificielle !",
    "explain_dirigent": "Le chef d'orcheste c'est une activités musicale dans laquelle tu prends la place du chef d'orcheste. En bougant tes mains tu va pouvoir controller le tempo et les instruments de ton orchestre",
    "explain_chatbot": "Clique sur l'icone en bas a droite pour discuter avec notre chatbot. Il pourra t'expliquer les différentes activités que nous proposons ainsi que ce que nous faisons à la Erasmushoogeshool",
    "click": "Clique ici pour accéder à l'activitée"
  },
  nl: {
    "musiccabine": 'Activiteit 1: De muziekcabine',
    "dirigent": "Activiteit 2: De dirigentenruimte",
    "chatbot": "Activiteit 3: De chatbot",
    "explain_musiccabine": "De muziek cabine is een meeslepende ervaring waarin je je eigen muziek kunt componeren door op de verschillende verlichte knoppen te drukken. De muziek wordt automatisch gegenereerd door artificiële intelligentie ! Dit is misschien wel de toekomst van muziek",
    "explain_dirigent": "De dirigent is een muzikale activiteit waarbij je de plaats inneemt van de dirigent. Door je beide armen willekeurig op en neer  te bewegen, kan je het tempo en de toonhoogte van de piano regelen.  Het het kunstmatige intelligentie algoritme zal dan zelfstandig een melodie maken.",
    "explain_chatbot": "Klik op het icoontje rechtsonder om met onze chatbot te chatten. Zij zal kunnen uitleggen welke verschillende activiteiten wij aanbieden en wat wij op de Erasmushoogeschool doen",
    "click": "Klik hier om naar de activiteit te gaan"
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
