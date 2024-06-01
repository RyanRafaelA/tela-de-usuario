<template>
    <v-app>
      <v-main>
        <cabecalho/>
        <novoUsuario/>
        <tabelaUsuario :listaAlunos="listaAlunos" @deletarAluno="deletarAluno($event)" @editarAluno="atualizarAluno($event)"/>
        <rodape/>
      </v-main>
    </v-app>
  </template>
  
  <script>
    //import { db } from '@/services/firebase'
    import { //collection, 
            //doc, 
            //getDocs, 
            //updateDoc, 
            //deleteDoc
          } from 'firebase/firestore'

    import cabecalho from '../components/cabecalho.vue' 
    import rodape from '../components/rodape.vue'
    import tabelaUsuario from '../components/tabelaUsuario.vue'
    import novoUsuario from '../components/botaoNovoUsuario.vue'
  
    export default{
      components:{
        cabecalho,
        novoUsuario,
        tabelaUsuario,
        rodape
      },
      data(){
        return{
          listaAlunos: []
        }
      },
      created(){
        this.incializar

      },
      methods:{
        incializar(){

        },
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