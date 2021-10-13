<template>
  <div id="app">
    <Header/>
    <LanguageSwitcher/>
    <MuziekCabine />
    <DirigentenRuimte />
    <ChatBotDescription/>
    <Chatbot/>

  </div>
</template>

<script>
import MuziekCabine from './components/MuziekCabine.vue'
import DirigentenRuimte from './components/DirigentenRuimte.vue'
import Chatbot from './components/Chatbot.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import ChatBotDescription from './components/ChatBotDescription.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
    LanguageSwitcher,
    MuziekCabine,
    DirigentenRuimte,
    ChatBotDescription,
    Chatbot,

  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: 0%
}
</style>
