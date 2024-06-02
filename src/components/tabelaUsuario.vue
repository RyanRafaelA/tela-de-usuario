<template>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Primeiro Nome
            </th>
            <th class="text-left">
              Sobrenome
            </th>
            <th class="text-left">
              CPF
            </th>
            <th class="text-left">
              Data de Nascimento
            </th>
            <th class="text-left">
              Sexo
            </th>
            <th class="text-left">
              E-mail
            </th>
            <th class="text-left">
              Telefone
            </th>
            <th class="text-left">
              Curso
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, index) in listaAlunos" :key="index">
            <td>{{ aluno.primeiroNome }}</td>
            <td>{{ aluno.sobrenome }}</td>
            <td>{{ aluno.cpf }}</td>
            <td>{{ aluno.dataNascimento }}</td>
            <td>{{ aluno.sexo }}</td>
            <td>{{ aluno.email }}</td>
            <td>{{ aluno.telefone }}</td>
            <td>{{ aluno.curso }}</td>
            <td>
              <editarUsuario :aluno="aluno" @editarAluno="editarAluno($event)"/>
            </td>
            <td>
              <v-btn icon @click="deletarAluno(aluno.id)" color="blue darken-2">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<script>
import { db } from '@/services/firebase'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'

import editarUsuario from './botaoEditarUsuario.vue'

  export default {
    components:{
      editarUsuario
    },
    data(){
      return{
        listaAlunos: []
      }
    },
    created(){
        this.inicializar()
    },
    methods:{
      inicializar(){
        this.listarAlunos()
      },
      async listarAlunos(){
        this.listaAlunos = []
        
        const querySnapshot = await getDocs(collection(db, 'alunos'))
        querySnapshot.forEach((doc) => {
        const data = {id: doc.id, ...doc.data()} 
          this.listaAlunos.push(data)
          console.log(data)
        })
      },
      async deletarAluno(id){
        await deleteDoc(doc(db, 'alunos', id))
        this.listarAlunos()
      },
      editarAluno(alunoEditado){
        this.$emit('editarAluno', alunoEditado)
      }
    }
  }
</script>