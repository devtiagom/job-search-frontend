<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<Header title="jobSearch" :hideToggle="!user" :hideNavbarMenu="!user" />
		<Menu v-if="user" />
		<Loading v-if="validatingLogin" />
		<Content v-else />
		<Footer />
	</div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';

import { baseURL, userKey } from '@/global';
import Header from '@/components/template/Header';
import Menu from '@/components/template/Menu';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';
import Loading from '@/components/template/Loading';

export default {
	name: 'App',
	components: { Header, Menu, Content, Footer, Loading },
	computed: mapState(['isMenuVisible', 'user']),
	data() {
		return {
			validatingLogin: true
		}
	},
	methods: {
		async validateLogin() {
			this.validatingLogin = true;
			this.$store.commit('setUser', null);

			const userData = JSON.parse(localStorage.getItem(userKey));

			if (!userData) {
				this.validatingLogin = false;
				this.$router.push({ name: 'auth' });
				return;
			}

			try {
				await axios.get(`${baseURL}/validateLogin`);

				this.$store.commit('setUser', userData);
			} catch (error) {
				localStorage.removeItem(userKey);
				this.$router.push({ name: 'auth' });
			}

			this.validatingLogin = false;
		}
	},
	created() {
		this.validateLogin();
	}
}
</script>

<style>
  * {
		font-family: sans-serif;
  }

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-auto-rows: 60px 1fr 100px;
		grid-template-columns: 250px 1fr;
		grid-template-areas:
			"header header"
			"menu content"
			"menu footer";
	}

	#app.hide-menu {
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}
</style>
