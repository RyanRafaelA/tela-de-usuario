<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <novoUsuario/>
      <tabelaUsuario/>
      <rodape/>
    </v-main>
  </v-app>
</template>

<script>
  /**eslint-disable**/

  import cabecalho from './components/cabecalho.vue' 
  import rodape from './components/rodape.vue'
  import tabelaUsuario from './components/tabelaUsuario.vue'
  import novoUsuario from './components/botaoNovoUsuario.vue'

  export default{
    components:{
      cabecalho,
      novoUsuario,
      tabelaUsuario,
      rodape
    },

  }
</script>