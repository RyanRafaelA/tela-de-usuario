<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <tabelaUsuario />
    </v-main>
  </v-app>
</template>

<script>
  import cabecalho from './components/cabecalho.vue' 
  import tabelaUsuario from './components/tabelaUsuario.vue'

  export default{
    components:{
      cabecalho,
      tabelaUsuario
    }
  }
</script>