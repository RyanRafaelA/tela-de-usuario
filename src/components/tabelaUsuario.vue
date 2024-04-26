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
              Idade
            </th>
            <th class="text-left">
              Sexo
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in ListaAluno" :key="item">
            <td>{{ item.primeiroNome }}</td>
            <td>{{ item.sobrenome }}</td>
            <td>{{ item.idade }}</td>
            <td>{{ item.sexo }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
</template>

<script>
  export default {
    data () {
      return {
        listaAluno: [
          {id: 1, primeiroNome: 'Ryan', sobrenome:'Santos', idade:22, sexo: 'Masculino', email:'ryan@gmail.com', curso: 'Java POO'},
          {id: 1, primeiroNome: 'Ryan', sobrenome:'Santos', idade:22, sexo: 'Masculino', email:'ryan@gmail.com', curso:['Java POO', 'Desenvolvimento Web']}
        ]
      }
    }
  }
</script>