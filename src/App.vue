<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <corpo/>
      <rodape/>
      
    </v-main>
  </v-app>
</template>

<script>
  import cabecalho from './components/cabecalho.vue' 
  import corpo from './components/corpo.vue'
  import rodape from './components/rodape.vue'

  export default{
    components:{
      cabecalho,
      corpo,
      rodape
    }
  }
</script>