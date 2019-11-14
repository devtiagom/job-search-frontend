<template>
	<header class="header">
		<a class="toggle" @click="toggleMenu" v-if="!hideToggle">
			<i class="fa fa-lg fa-navicon"></i>
		</a>
		<h1 class="title">
			{{ title }}
		</h1>
		<NavbarMenu v-if="!hideNavbarMenu" />
	</header>
</template>

<script>
	import NavbarMenu from './NavbarMenu';

	export default {
		name: "Header",
		components: { NavbarMenu },
		props: {
			title: String,
			hideToggle: Boolean,
			hideNavbarMenu: Boolean
		},
		methods: {
			toggleMenu() {
				this.$store.commit('toggleMenu');
			}
		}
	};
</script>

<style>
	.header {
		grid-area: header;

		background: linear-gradient(
			to right,
			rgba(0, 131, 176, 1),
			rgba(0, 180, 219, 1)
		);
		box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);

		position: fixed;
		width: 100%;
		height: 60px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-size: 1.8rem;
		color: #FFF;
		font-weight: 900;
		flex-grow: 1;
		text-align: center;
	}

	.title a {
		color: #FFF;
		text-decoration: none;
	}

	header.header > a.toggle {
		width: 35px;
		height: 35px;
		color: #FFF;
		justify-self: flex-start;
		text-decoration: none;
		border-radius: 50%;
		cursor: pointer;
		margin-left: 10px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	header.header > a.toggle:hover {
		color: #FFF;
		background-color: rgba(255, 255, 255, 0.3);
	}
</style>