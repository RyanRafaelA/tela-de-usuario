<template>
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="700px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
                <v-icon>mdi-pencil-circle</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Editar Usuario</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="5">
                <v-text-field label="Telfone*" persistent-hint required v-model="telefone"></v-text-field>
              </v-col>
                <v-col cols="12">
                  <v-text-field label="Email*" required v-model="email"></v-text-field>
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
  export default {
    data(){
      return{
        dialog: false,
        telefone: '',
        email: '',
        curso: '',
        lista: []
      }
    },
    methods:{
      salvar(){
        if(this.email === ''||this.curso===''||this.telefone===''){
          alert('Campos não fornecidos')
        } else{
          this.lista[this.email,this.telefone, this.curso]
          this.email=''
          this.curso=''
        }
      },
      fechar(){
        this.dialog = false
      }
    }
  }
  </script>