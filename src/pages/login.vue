<template>
    <div>
        Ola estou na home
        <v-btn @click="navegar('/telaUsuarios')">ir para tela de usuario</v-btn>
    </div>
</template>

<script>
export default{
    methods:{
        navegar(path){
            this.$router.push(path)
        }
    }
}
</script>