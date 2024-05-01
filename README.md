# Tela de Usuario

## Proposta do projeto:
Permite a gestão de usuários com funcionalidades para adicionar, editar e remover inscrições de alunos nos cursos.

## Tecnologias Utilizadas:
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" width="40" height="40" /><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" width="40" height="40" />

## Components:
* botaoEditarUsuario
* botaoNovoUsuario
* cabecalho
* rodape
* tabelaUsuario 

## App.vue
É como se fosse um banco de dados, onde eu guardei os alunos.Nesse arquivo é onde tem as funções de deletar, adicionar, ler, e editar os alunos. E nesse arquivo vai conter todos os components e rodar cada uma das funções deles. 

### Cabecalho:
O cabeçalho(header), é onde fica o titulo do projeto e um botão de navegação, onde vai passar pelas outras telas do projeto.
### Botao Novo Usuario:
O botão de novo usuario, quando aperta nele vai mostra uma telinha, que vai receber as informações do novos alunos.
### Tabela Usuario:
A tabela de usuario vai receber através no arquivo pai(App.vue) a lista de alunos, e vai mostrar os alunos na tela utilizando o v-for.
### Botão de Editar:
O botão de editar, icone de lapis, vai mostrar uma telinha que via mostra quais informações podem ser modificadas. Vai passar essa modificações para o arquivo pai para ser modificado e mostrar na tabela a modioficação.
### Botão de Deletar:
O botão de deletar, icone de lixeira, com base no que o usuario aperta vai deletar o aluno, utilizando o id como base de deleção do aluno.