<template>
  <div class="auth-content">
    <b-card
			class="auth-modal"
			header-tag="header"
			footer-tag="footer"
			header-bg-variant="white"
			footer-bg-variant="white"
		>
			<template v-slot:header>
				<h1 class="auth-title mb-0">{{ showSignup ? 'Cadastro': 'Login' }}</h1>
			</template>

			<b-form-input
				v-if="showSignup"
				type="text"
				v-model="firstName"
				name="first-name"
				required
				placeholder="Informe o nome..."
			></b-form-input>

			<b-form-input
				v-if="showSignup"
				type="text"
				v-model="lastName"
				name="last-name"
				placeholder="Informe o sobrenome..."
			></b-form-input>

			<b-form-input
				type="email"
				v-model="user.email"
				name="email"
				required
				placeholder="Digite seu e-mail..."
			></b-form-input>

			<b-form-input
				type="password"
				v-model="user.password"
				name="password"
				required
				placeholder="Informe a senha..."
			></b-form-input>

			<b-form-input
				v-if="showSignup"
				type="password"
				v-model="user.password_confirmation"
				name="password_confirmation"
				required
				placeholder="Confirme a senha..."
			></b-form-input>

      <b-button block v-if="showSignup" @click="register">Cadastrar</b-button>
      <b-button block v-else @click="authenticate">Entrar</b-button>

			<b-card-text v-if="!showSignup" class="auth-text">
				<a href="">Esqueceu a senha?</a>
			</b-card-text>

			<template v-slot:footer>
				<b-card-text v-if="showSignup" class="auth-text">
					Já tem cadastro? <a href @click.prevent="showSignup = !showSignup">Acesse o Login!</a>
				</b-card-text>
				<b-card-text v-else class="auth-text">
					Nao tem cadastro? <a href @click.prevent="showSignup = !showSignup">Registre-se aqui!</a>
				</b-card-text>
			</template>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import { baseURL, showError, userKey } from "@/global";

export default {
  name: "Auth",
  data() {
    return {
      showSignup: false,
      user: {},
      firstName: "",
      lastName: ""
    };
  },
  watch: {
    firstName: function() {
      this.user.name = `${this.firstName} ${this.lastName}`;
    },
    lastName: function() {
      this.user.name = `${this.firstName} ${this.lastName}`;
    }
  },
  methods: {
    register() {
      axios
        .post(`${baseURL}/register`, this.user)
        .then(response => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.firstName = "";
          this.lastName = "";
          this.showSignup = false;
        })
        .catch(error => showError(error.response.data.msg));
    },
    authenticate() {
      axios
        .post(`${baseURL}/authenticate`, this.user)
        .then(response => {
          this.$store.commit("setUser", response.data);
          localStorage.setItem(userKey, JSON.stringify(response.data));
          this.$router.push({ path: "/" });
        })
        .catch(error => showError(error.response.data));
    }
  }
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
	text-align: center;
}

.auth-modal {
  background-color: #fff;
  width: 300px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-title {
	width: 200px;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(120, 120, 120);
}

.auth-modal input {
  border: 1px solid #bbb;
  margin-bottom: 20px;
  font-size: 0.9rem;
	/* border-width: 0px 0px 1px 0px; */
}

.auth-modal button {
  background: rgba(0, 131, 176, 0.85);
	margin-bottom: 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.auth-modal button:hover {
  background: rgba(0, 131, 176, 1);
}

.auth-text {
	font-size: 0.8rem;
	color: rgb(120, 120, 120);
}

.auth-text a {
	color: rgb(0, 131, 176);
	text-decoration: none;
}
</style>