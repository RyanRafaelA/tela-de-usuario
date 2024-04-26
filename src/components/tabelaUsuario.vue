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
            <th class="text-left">
              E-mail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, keys) in listaAluno" :key="keys">
            <td>{{ item.primeiroNome }}</td>
            <td>{{ item.sobrenome }}</td>
            <td>{{ item.idade }}</td>
            <td>{{ item.sexo }}</td>
            <td>{{ item.email }}</td>
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
          {id: 2, primeiroNome: 'Felipe', sobrenome:'Sabino', idade:19, sexo: 'Masculino', email:'felipe@gmail.com', curso:['Java POO']},
          {id: 3, primeiroNome: 'Luiz', sobrenome:'Santos', idade:18, sexo: 'Masculino', email:'Luiz@gmail.com', curso:['Desenvolvimento de Jogo']},
          {id: 4, primeiroNome: 'Larissa', sobrenome:'Almeida', idade:26, sexo: 'Feminino', email:'larissa@gmail.com', curso:['Desenvolvimeto Web']},
          {id: 5, primeiroNome: 'Maria', sobrenome:'Silva', idade:17, sexo: 'Feminino', email:'Silva@gmail.com', curso:['Java POO']},
          {id: 6, primeiroNome: 'Rafaela', sobrenome:'Amorin', idade:23, sexo: 'Feminino', email:'rafaela@gmail.com', curso:['Teste - Manutenção e Análise de Sistemas']},
          {id: 7, primeiroNome: 'Jose', sobrenome:'Freitas', idade:21, sexo: 'Masculino', email:'jose@gmail.com', curso:['Teste - Manutenção e Análise de Sistemas']},
        ]
      }
    }
  }
</script>