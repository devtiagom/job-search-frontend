<template>
  <div class="auth-content">
		<div class="auth-modal">
			<h1>Cadastro</h1>
			<input type="email" v-model="user.email" name="email" placeholder="Informe o e-mail..."><br>
			<input type="password" v-model="user.password" name="password" placeholder="Informe a senha..."><br>
			<button @click="create">Registrar</button>
		</div>
		<div class="auth-modal">
			<h1>Login</h1>
			<input type="email" v-model="user.email" name="email" placeholder="Informe o e-mail..."><br>
			<input type="password" v-model="user.password" name="password" placeholder="Informe a senha..."><br>
			<button @click="authenticate">Entrar</button>
		</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',
	data: function() {
		return {
			user: {}
		}
	}, methods: {
		create() {
			axios.post('http://localhost:3333/register', this.user)
				.then(data => console.log(data.data))
				.catch(data => console.log(data));
		},
		authenticate() {
			axios.post('http://localhost:3333/authenticate', this.user)
				.then(data => console.log(data.data))
				.catch(data => console.log(data));
		}
	}
}
</script>

<style>
	.auth-content {
		background: linear-gradient(to right, #1E469A, #49A7C1);
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
  }

	.auth-modal {
		background-color: #FFF;
		width: 300px;
		padding: 30px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
  }
</style>
