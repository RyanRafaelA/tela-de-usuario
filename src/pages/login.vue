<template>
    <div class="container">
        <section class="formulario">
            <form class="login" @submit.prevent>
                <h2>Login</h2>
                <input type="email" placeholder="E-mail" v-model="email" class="input-field">
                <input type="password" placeholder="Senha" v-model="senha" class="input-field">
                <input type="submit" value="Login" @click="login" class="btnLogin">
                <input type="submit" value="Registrar" @click="registrar" class="btnRegistro">
            </form>
        </section>
    </div>
</template>

<script>
import { auth } from '@/services/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            senha: ''
        };
    },
    methods: {
        async login() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.senha)
                console.log("Usuario existe:", this.email);
                this.$router.push('./telaUsuarios')
            } catch (error) {
                console.log(error.message)
            }
        },
        async registrar() {
            try{
                await createUserWithEmailAndPassword(auth, this.email, this.senha)
                console.log("Novo usuario registrado:", this.email);
                this.email = ''
                this.senha = ''
            }catch(error){
                console.log(error.message)
            }
        }
    }
};
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.formulario {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
}

.login h2 {
    margin-bottom: 20px;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.btnLogin,
.btnRegistro {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

.btnLogin {
    background-color: #007bff;
    color: #fff;
}

.btnLogin:hover {
    background-color: #0056b3;
}

.btnRegistro {
    background-color: #6c757d;
    color: #fff;
}

.btnRegistro:hover {
    background-color: #5a6268;
}
</style>