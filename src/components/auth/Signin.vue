<template>
	<div class="signin-content">
		<div class="signin-modal">
			<h1 class="signin-title">Login</h1><hr/>
			<input
				type="email"
				v-model="user.email"
				name="email"
				placeholder="Informe o e-mail..."
			>
			<input
				type="password"
				v-model="user.password"
				name="password"
				placeholder="Informe a senha..."
			>
			<button @click="authenticate">Entrar</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { baseURL, showError, userKey } from '@/global';

export default {
	name: 'Signin',
	data: function() {
		return {
			user: {}
		}
	},
	methods: {
		authenticate() {
			axios.post(`${baseURL}/authenticate`, this.user)
				.then(response => {
					this.$store.commit('setUser', response.data);
					localStorage.setItem(userKey, JSON.stringify(response.data));
					this.$router.push({ path: '/' });
				})
				.catch(error => showError(error.response.data.msg));
		}
	}
}
</script>

<style>
	.signin-content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.signin-modal {
		background-color: #FFF;
		width: 300px;
		padding: 40px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.signin-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: rgb(120, 120, 120);
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.signin-modal hr {
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

	.signin-modal input {
		border: 1px solid #BBB;
		border-radius: 3px;
		width: 100%;
		margin-bottom: 15px;
		padding: 3px 8px;
		/* outline: none; */
		font-size: 0.8rem;
	}

	.signin-modal button {
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

	.signin-modal button:hover {
		background: rgba(0, 131, 176, 1);
	}
</style>