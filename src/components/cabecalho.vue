<template>
  <div>
    <v-toolbar dark prominent src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-icon x-large>mdi-account-circle-outline</v-icon>
        Tela de Usuarios
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="navegar('/login')">
        <v-icon>mdi-export</v-icon>
      </v-btn>

      <v-navigation-drawer v-model="drawer" absolute bottom temporary 
      height="250px" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4"> 
          <v-list-item>
            <v-list-item-title>Cursos</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Calendario</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fórum</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Biblioteca</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
    methods:{
      navegar(path){
        this.$router.push(path)
      }
    }
  }
</script>