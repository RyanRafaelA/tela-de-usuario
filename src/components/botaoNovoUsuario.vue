<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="700px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Novo Usuario <v-icon>mdi-acount</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Novo Usuario</span>
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
              <v-col cols="12">
                <v-text-field label="Email*" required v-model="email"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="idade*" type="number" required v-model="idade"></v-text-field>
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
export default {
  data(){
    return{
      dialog: false,
      pNome: '',
      sobrenome: '',
      idade: '',
      email: '',
      sexo:'',
      curso: '',
      lista: []
    }
  },
  methods:{
    salvar(){
      if(this.pNome ===''||this.sobrenome===''||this.idade ==''||this.email === ''||this.sexo ===''||this.curso===''){
        alert('Campos não fornecidos')
      } else{
        this.lista[this.pNome, this.sobrenome, this.idade, this.sexo, this.email, this.curso]
        this.pNome=''
        this.sobrenome=''
        this.idade=''
        this.email=''
        this.sexo=''
        this.curso=''

        this.fechar()
        return this.lista
      }
    },
    fechar(){
      this.dialog = false
    }
  }
}
</script>