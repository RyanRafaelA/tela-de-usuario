<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <corpo/>
      <novoUsuario/>
      <rodape/>
    </v-main>
  </v-app>
</template>

<script>
import botaoNovoUsuarioVue from './components/botaoNovoUsuario.vue'
  import cabecalho from './components/cabecalho.vue' 
  import corpo from './components/corpo.vue'
  import rodape from './components/rodape.vue'
  import novoUsuario from './components/botaoNovoUsuario.vue'

  export default{
    components:{
      cabecalho,
      corpo,
      novoUsuario,
      rodape
    }
  }
</script>