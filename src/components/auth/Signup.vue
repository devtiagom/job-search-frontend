<template>
	<div class="signup-content">
		<div class="signup-content">
		<div class="signup-modal">
			<h1 class="signup-title">Cadastro</h1><hr/>
			<input
				type="text"
				v-model="firstName"
				name="first-name"
				placeholder="Informe o nome..."
			>
			<input
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
				type="password"
				v-model="user.password_confirmation"
				name="password_confirmation"
				placeholder="Confirme a senha..."
			>
			<button @click="register">Cadastrar</button>
		</div>
	</div>
	</div>
</template>

<script>
import axios from 'axios';
import { baseURL, showError, userKey } from '@/global';

export default {
	name: 'Signup',
	data: function () {
		return {
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
	},
	methods: {
		register() {
			axios.post(`${baseURL}/register`, this.user)
				.then(response => {
					this.$toasted.global.defaultSuccess();
					this.$router.push({ path: '/signin' });
				})
				.catch(error => showError(error.response.data.msg));
		}
	}
}
</script>

<style>
	.signup-content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.signup-modal {
		background-color: #FFF;
		width: 300px;
		padding: 40px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.signup-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: rgb(120, 120, 120);
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.signup-modal hr {
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

	.signup-modal input {
		border: 1px solid #BBB;
		border-radius: 3px;
		width: 100%;
		margin-bottom: 15px;
		padding: 3px 8px;
		/* outline: none; */
		font-size: 0.8rem;
	}

	.signup-modal button {
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

	.signup-modal button:hover {
		background: rgba(0, 131, 176, 1);
	}
</style>