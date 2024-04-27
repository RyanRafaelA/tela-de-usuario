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
            <td>
              <v-btn icon>
                <v-icon>mdi-pencil-circle</v-icon>
              </v-btn>
            </td>
            <td>
              <v-btn icon @click="deletarUser(item.id)">
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
  export default {
    data () {
      return {
        listaAluno: [
          {id: 1, primeiroNome: 'Ryan', sobrenome:'Amaral', idade:22, sexo: 'Masculino', email:'ryan@gmail.com', curso: 'Java POO'},
          {id: 2, primeiroNome: 'Felipe', sobrenome:'Sabino', idade:19, sexo: 'Masculino', email:'felipe@gmail.com', curso:'Java POO'},
          {id: 3, primeiroNome: 'Luiz', sobrenome:'Santos', idade:18, sexo: 'Masculino', email:'Luiz@gmail.com', curso:'Desenvolvimento de Jogo'},
          {id: 4, primeiroNome: 'Larissa', sobrenome:'Almeida', idade:26, sexo: 'Feminino', email:'larissa@gmail.com', curso:'Desenvolvimeto Web'},
          {id: 5, primeiroNome: 'Maria', sobrenome:'Silva', idade:17, sexo: 'Feminino', email:'Silva@gmail.com', curso:'Java POO'},
          {id: 6, primeiroNome: 'Rafaela', sobrenome:'Amorin', idade:23, sexo: 'Feminino', email:'rafaela@gmail.com', curso:'Teste - Manutenção e Análise de Sistemas'},
          {id: 7, primeiroNome: 'Jose', sobrenome:'Freitas', idade:21, sexo: 'Masculino', email:'jose@gmail.com', curso:'Teste - Manutenção e Análise de Sistemas'},
          {id: 8, primeiroNome: 'Ana', sobrenome:'Santos', idade:21, sexo: 'Feminino', email:'ana@gmail.com', curso:'Desenvolvimento de Jogo'},
          {id: 9, primeiroNome: 'Carlos', sobrenome:'Andrade', idade:25, sexo: 'Masculino', email:'carlos@gmail.com', curso:'Desenvolvimeto Web'},
          {id: 10, primeiroNome: 'Liliane', sobrenome:'Carine', idade:20, sexo: 'Feminino', email:'liliane@gmail.com', curso:'Java POO'},
          {id: 11, primeiroNome: 'Yris', sobrenome:'Lins', idade:21, sexo: 'Feminino', email:'yris@gmail.com', curso:'Desenvolvimeto Web'}, 
          {id: 12, primeiroNome: 'Ruan', sobrenome:'Amaral', idade:21, sexo: 'Masculino', email:'ruan@gmail.com', curso:'Desenvolvimento de Jogo'}
        ]
      }
    },
    methods:{
      deletarUser(id){
        for(let x=0; x<this.listaAluno.length; x++){
          if(this.listaAluno[x].id === id){
            this.listaAluno.splice(x, 1)
          }
        }
      }
    }
  }
</script>