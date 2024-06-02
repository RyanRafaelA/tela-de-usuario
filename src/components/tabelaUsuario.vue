<template>
  <v-data-table
    :headers="headers"
    :items="alunos"
    class="elevation-1"
    >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="700px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Novo Aluno <v-icon>mdi-plus-thick</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editarAluno.primeiroNome"
                      label="Primeiro Nome"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editarAluno.sobrenome"
                      label="Sobrenome"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5">
                    <v-text-field
                      v-model="editarAluno.cpf"
                      label="CPF"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="5" >
                    <v-text-field
                      v-model="editarAluno.telefone"
                      label="Telefone"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editarAluno.email"
                      label="E-mail"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="editarAluno.dataNascimento"
                      label="Data de Nascimento"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['Masculino', 'Feminino']" v-model="editarAluno.sexo" label="Sexo"></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select :items="['Desenvolvimento Web', 'Desenvolvimento de Jogos', 'Java POO', 'Teste - Manutenção e Análise de Sistemas']" v-model="editarAluno.curso" label="Curso"></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { db } from '@/services/firebase'
import { getDocs, collection, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore'

  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Primeiro Nome',
          align: 'start',
          sortable: false,
          value: 'primeiroNome',
        },
        { text: 'Sobrenome', value: 'sobrenome' },
        { text: 'Data de Nascimento', value: 'dataNascimento' },
        { text: 'CPF', value: 'cpf' },
        { text: 'Telefone', value: 'telefone' },
        { text: 'E-mail', value: 'email' },
        { text: 'Sexo', value: 'sexo' },
        { text: 'Curso', value: 'curso' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      alunos: [],
      editedIndex: -1,
      editarAluno: {
        primeiroNome: '',
        sobrenome: '',
        dataNascimento: '',
        cpf: '',
        telefone: '',
        email: '',
        sexo: '',
        curso:''
      },
      defaultItem: {
        primeiroNome: '',
        sobrenome: '',
        dataNascimento: '',
        cpf: '',
        telefone: '',
        email: '',
        sexo: '',
        curso:''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Novo Aluno' : 'Editar Aluno'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.listarAlunos()
      },
      async listarAlunos(){
        this.alunos=[]

        const querySnapshot = await getDocs(collection(db, 'alunos'))
        querySnapshot.forEach((doc) =>{
          const data = {id: doc.id, ...doc.data()}
          this.alunos.push(data)
        })
      },
      editItem (item) {
        this.editedIndex = this.alunos.indexOf(item)
        this.editarAluno = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.alunos.indexOf(item)
        this.editarAluno = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        await deleteDoc(doc(db, 'alunos', this.editarAluno.id))
        this.listarAlunos()
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editarAluno = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editarAluno = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        if (this.editedIndex > -1) {
          await updateDoc(doc(db, 'alunos', this.editarAluno.id), this.editarAluno)
        } else {
          await addDoc(collection(db, 'alunos'), this.editarAluno)
        }
        this.listarAlunos()
        this.close()
      },
    },
  } 
</script>