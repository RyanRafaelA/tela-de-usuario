<template>
    <v-app>
      <v-main>
        <cabecalho/>
        <novoUsuario/>
        <tabelaUsuario @deletarAluno="deletarAluno($event)" @editarAluno="atualizarAluno($event)"/>
        <rodape/>
      </v-main>
    </v-app>
  </template>
  
  <script>
    import cabecalho from '../components/cabecalho.vue' 
    import rodape from '../components/rodape.vue'
    import tabelaUsuario from '../components/tabelaUsuario.vue'
  
    export default{
      components:{
        cabecalho,
        tabelaUsuario,
        rodape
      }, 
      methods:{
        deletarAluno(id){
          for(let x=0; x<this.listaAlunos.length; x++){
            if(this.listaAlunos[x].id === id){
              this.listaAlunos.splice(x, 1)
            }
          }
        },
        atualizarAluno(alunoEditado){
          for(var x=0; x<this.listaAlunos.length; x++){
            if(this.listaAlunos[x].id == alunoEditado.id){
              this.listaAlunos[x] = alunoEditado
            }
          }
        }
      }
    }
  </script>