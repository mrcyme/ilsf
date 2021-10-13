<template>
  <div id="app">
    <LanguageSwitcher/>
    <MuziekCabine />
    <DirigentenRuimte />
    <Chatbot/>

  </div>
</template>

<script>
import MuziekCabine from './components/MuziekCabine.vue'
import DirigentenRuimte from './components/DirigentenRuimte.vue'
import Chatbot from './components/Chatbot.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

export default {
  name: 'app',
  components: {
    LanguageSwitcher,
    MuziekCabine,
    DirigentenRuimte,
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
}
</style>
