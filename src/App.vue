<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible}">
		<Header />
		<Menu v-if="isMenuVisible" />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/template/Header';
import Menu from '@/components/template/Menu';
import Content from '@/components/template/Content';
import Footer from '@/components/template/Footer';

export default {
	name: 'App',
	components: { Header, Menu, Content, Footer },
	data: function() {
		return {
			user: {},
			isMenuVisible: false
		}
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
		grid-auto-rows: 80px 1fr 115px;
		grid-template-columns: 330px 1fr;
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
