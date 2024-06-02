<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Novo Estudante <v-icon>mdi-plus-thick</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Estudante</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Primeiro nome*" required v-model="pNome"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Sobrenome*" persistent-hint required v-model="sobrenome"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <v-text-field label="CPF*" persistent-hint required v-model="cpf"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="5">
                <v-text-field label="Telefone*" persistent-hint required v-model="telefone"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*" required v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="dataNascimento*" required v-model="dataNascimento"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['Masculino', 'Feminino']" label="Sexo" v-model="sexo"></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select :items="['Desenvolvimento Web', 'Desenvolvimento de Jogo', 'Java POO', 'Teste - Manutenção e Análise de Sistemas']" label="Curso" v-model="curso"></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="fechar()">
            Fechar
          </v-btn>
          <v-btn color="blue darken-1" text @click="salvar()" >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import { db } from '@/services/firebase'
  import { collection, addDoc } from 'firebase/firestore';

export default {
  data(){
    return{
      dialog: false,
      pNome: '',
      sobrenome: '',
      dataNascimento: '',
      cpf: '',
      telefone: '',
      email: '',
      sexo:'',
      curso: ''
    }
  },
  methods:{
    async salvar(){
      if(this.pNome ===''||this.sobrenome===''||this.cpf==''||this.telefone=='' ||this.dataNascimento ==''||this.email === ''||this.sexo ===''||this.curso===''){
        alert('Campos não fornecidos')
      } else{
        var lista={nome:this.pNome, sobrenome:this.sobrenome, cpf:this.cpf, telefone:this.telefone, dataNascimento:this.dataNascimento, sexo:this.sexo, email:this.email, curso:this.curso}
  
        await addDoc(collection(db, 'alunos'), lista)

        this.fechar()
      }
    },
    fechar(){
      this.dialog = false
      this.pNome= ''
      this.sobrenome= ''
      this.dataNascimento= ''
      this.cpf= ''
      this.telefone=''
      this.email=''
      this.sexo=''
      this.curso= ''
    }
  }
}
</script>