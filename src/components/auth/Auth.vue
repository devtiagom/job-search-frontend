<template>
	<div class="auth-content">
		<div class="auth-modal">
			<h1 class="auth-title">{{ showSignup ? 'Cadastro': 'Login' }}</h1>

			<hr/>

			<input
				v-if="showSignup"
				type="text"
				v-model="firstName"
				name="first-name"
				placeholder="Informe o nome..."
			>
			<input
				v-if="showSignup"
				type="text"
				v-model="lastName"
				name="last-name"
				placeholder="Informe o sobrenome..."
			>
			<input
				type="email"
				v-model="user.email"
				name="email"
				placeholder="Informe o e-mail..."
			>
			<input
				type="password"
				v-model="user.password"
				name="password" placeholder="Informe a senha..."
			>
			<input
				v-if="showSignup"
				type="password"
				v-model="user.password_confirmation"
				name="password_confirmation"
				placeholder="Confirme a senha..."
			>

			<button v-if="showSignup" @click="register">Cadastrar</button>
			<button v-else @click="authenticate">Entrar</button>

			<a href @click.prevent="showSignup = !showSignup">
                <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
                <span v-else>Não tem cadastro? Registre-se aqui!</span>
            </a>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { baseURL, showError, userKey } from '@/global';

export default {
	name: 'Auth',
	data() {
		return {
			showSignup: false,
			user: {},
			firstName: '',
			lastName: ''
		}
	},
	watch: {
		firstName: function () {
			this.user.name = `${this.firstName} ${this.lastName}`;
		},
		lastName: function () {
			this.user.name = `${this.firstName} ${this.lastName}`;
		}
	}, methods: {
		register() {
			axios.post(`${baseURL}/register`, this.user)
				.then(response => {
					this.$toasted.global.defaultSuccess();
					this.user = {};
					this.firstName = '';
					this.lastName = '';
					this.showSignup = false;
				})
				.catch(error => showError(error.response.data.msg));
		},
		authenticate() {
			axios.post(`${baseURL}/authenticate`, this.user)
				.then(response => {
					this.$store.commit('setUser', response.data);
					localStorage.setItem(userKey, JSON.stringify(response.data));
					this.$router.push({ path: '/' });
				})
				.catch(error => showError(error.response.data));
		}
	}
}
</script>

<style>
	.auth-content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.auth-modal {
		background-color: #FFF;
		width: 300px;
		padding: 40px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.auth-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: rgb(120, 120, 120);
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.auth-modal hr {
		border: 0;
		margin-top: 0px;
		margin-bottom: 15px;
		width: 100%;
		height: 1px;
		background-image: linear-gradient(to right,
			rgba(120, 120, 120, 0),
			rgba(120, 120, 120, 1),
			rgba(120, 120, 120, 0)
		);
	}

	.auth-modal input {
		border: 1px solid #BBB;
		border-radius: 3px;
		width: 100%;
		margin-bottom: 15px;
		padding: 3px 8px;
		/* outline: none; */
		font-size: 0.8rem;
	}

	.auth-modal button {
		align-self: flex-end;
		background: rgba(0, 131, 176, 0.85);
		color: #FFF;
		font-size: 1rem;
		font-weight: bold;
		padding: 5px 15px;
		border: none;
		border-radius: 3px;
		width: 100%;
		height: 35px;
		cursor: pointer;
	}

	.auth-modal button:hover {
		background: rgba(0, 131, 176, 1);
	}

	.auth-modal a {
		margin-top: 25px;
		font-size: 0.8rem;
	}
</style>