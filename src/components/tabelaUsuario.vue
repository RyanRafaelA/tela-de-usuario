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
          <tr v-for="(item, index) in listaAlunos" :key="index">
            <td>{{ item.primeiroNome }}</td>
            <td>{{ item.sobrenome }}</td>
            <td>{{ item.cpf }}</td>
            <td>{{ item.dataNascimento }}</td>
            <td>{{ item.sexo }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.telefone }}</td>
            <td>{{ item.curso }}</td>
            <td>
              <botaoEditarUsuario :aluno="item" @editarAluno="editarAluno($event)"/>
            </td>
            <td>
              <v-btn icon @click="deletarAluno(item.id)" color="blue darken-2">
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
import botaoEditarUsuario from './botaoEditarUsuario.vue'

  export default {
    components:{
      botaoEditarUsuario
    },
    props:{
      listaAlunos:{
        type: Object,
        required: true
      }
    },
    methods:{
      deletarAluno(id){
        this.$emit('deletarAluno', id)
      },
      editarAluno(alunoEditado){
        this.$emit('editarAluno', alunoEditado)
      }
    }
  }
</script>