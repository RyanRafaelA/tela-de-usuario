<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <corpo/>
      
    </v-main>
  </v-app>
</template>

<script>
  import cabecalho from './components/cabecalho.vue' 
  import corpo from './components/corpo.vue'

  export default{
    components:{
      cabecalho,
      corpo
    }
  }
</script>