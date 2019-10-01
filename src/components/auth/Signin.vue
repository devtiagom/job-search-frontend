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

export default {
	name: 'Signin',
	data: function() {
		return {
			user: {}
		}
	},
	methods: {
		authenticate() {
			axios.post('http://localhost:3333/authenticate', this.user)
				.then(response => console.log(response.data))
				.catch(response => console.log(response));
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
		width: 400px;
		padding: 40px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.signin-title {
		font-size: 1.8rem;
		font-weight: 100;
		color: rgb(120, 120, 120);
		margin-top: 15px;
		margin-bottom: 15px;
	}

	.signin-modal hr {
		border: 0;
		margin-top: 0px;
		margin-bottom: 20px;
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
		/* margin-top: 10px; */
		padding: 3px 8px;
		/* outline: none; */
	}

	.signin-modal button {
		align-self: flex-end;
		background-color: rgba(0, 180, 219, 0.7);
		color: #FFF;
		padding: 5px 15px;
		border: none;
		border-radius: 3px;
		width: 100%;
		height: 40px;
		cursor: pointer;
	}

	.signin-modal button:hover {
		background-color: rgba(0, 180, 219, 1);
	}
</style>