<template>
  <v-app>
    <v-main>
      <cabecalho/>
      <novoUsuario/>
      <tabelaUsuario :listaAlunos="listaAlunos"/>
      <rodape/>
    </v-main>
  </v-app>
</template>

<script>
  /**eslint-disable**/

  import cabecalho from './components/cabecalho.vue' 
  import rodape from './components/rodape.vue'
  import tabelaUsuario from './components/tabelaUsuario.vue'
  import novoUsuario from './components/botaoNovoUsuario.vue'

  export default{
    components:{
      cabecalho,
      novoUsuario,
      tabelaUsuario,
      rodape
    },
    data(){
      return{
        listaAlunos: [
          {id: 1, primeiroNome: 'Ryan', sobrenome:'Amaral',cpf:'547.567.990-86', dataNascimento:'16/01/2002', sexo: 'Masculino', email:'ryan@gmail.com', curso: 'Java POO'},
          {id: 2, primeiroNome: 'Felipe', sobrenome:'Silva',cpf:'116.824.530-30', dataNascimento:'19/09/2004', sexo: 'Masculino', email:'felipe@gmail.com', curso:'Java POO'},
          {id: 3, primeiroNome: 'Luiz', sobrenome:'Santos',cpf:'372.990.060-90', dataNascimento:'18/05/2006', sexo: 'Masculino', email:'Luiz@gmail.com', curso:'Desenvolvimento de Jogo'},
          {id: 4, primeiroNome: 'Larissa', sobrenome:'Almeida',cpf:'022.319.490-59', dataNascimento:'26/11/1999', sexo: 'Feminino', email:'larissa@gmail.com', curso:'Desenvolvimeto Web'},
          {id: 5, primeiroNome: 'Maria', sobrenome:'Silva',cpf:'319.767.430-87', dataNascimento:'17/10/2000', sexo: 'Feminino', email:'Silva@gmail.com', curso:'Java POO'},
          {id: 6, primeiroNome: 'Rafaela', sobrenome:'Amorin',cpf:'097.475.920-10', dataNascimento:'23/02/2001', sexo: 'Feminino', email:'rafaela@gmail.com', curso:'Teste - Manutenção e Análise de Sistemas'},
          {id: 7, primeiroNome: 'Jose', sobrenome:'Freitas',cpf:'312.272.300-01', dataNascimento:'21/06/1998', sexo: 'Masculino', email:'jose@gmail.com', curso:'Teste - Manutenção e Análise de Sistemas'},
          {id: 8, primeiroNome: 'Ana', sobrenome:'Santos',cpf:'935.021.630-22', dataNascimento:'22/12/2005', sexo: 'Feminino', email:'ana@gmail.com', curso:'Desenvolvimento de Jogo'},
          {id: 9, primeiroNome: 'Carlos', sobrenome:'Andrade',cpf:'927.141.220-60', dataNascimento:'25/04/1997', sexo: 'Masculino', email:'carlos@gmail.com', curso:'Desenvolvimeto Web'},
          {id: 10, primeiroNome: 'Liliane', sobrenome:'Carine', cpf:'475.999.640-02', dataNascimento:'20/08/2004', sexo: 'Feminino', email:'liliane@gmail.com', curso:'Java POO'},
          {id: 11, primeiroNome: 'Yris', sobrenome:'Lins', cpf:'112.106.450-76', dataNascimento:'24/11/2003', sexo: 'Feminino', email:'yris@gmail.com', curso:'Desenvolvimeto Web'}, 
          {id: 12, primeiroNome: 'Ruan', sobrenome:'Amaral', cpf:'596.227.710-41', dataNascimento:'18/08/2007', sexo: 'Masculino', email:'ruan@gmail.com', curso:'Desenvolvimento de Jogo'}
        ]
      }
    }

  }
</script>