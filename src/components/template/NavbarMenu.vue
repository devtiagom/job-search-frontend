<template>
	<div class="navbar-menu">
		<div class="navbar-item">
			<router-link to="/" class="navbar-item-link">
				<i class="fa fa-lg fa-home"></i>
			</router-link>
			<span class="navbar-item-text">Início</span>
		</div>

		<div class="navbar-item">
			<router-link to="/notifications" class="navbar-item-link">
				<i class="fa fa-lg fa-bell"></i>
			</router-link>
			<span class="navbar-item-text">Notificações</span>
		</div>

		<div class="navbar-item">
			<router-link to="/oportunities" class="navbar-item-link">
				<i class="fa fa-lg fa-briefcase"></i>
			</router-link>
			<span class="navbar-item-text">Vagas</span>
		</div>

		<div class="navbar-item">			
			<router-link to="/network" class="navbar-item-link">
				<i class="fa fa-lg fa-users"></i>
			</router-link>
			<span class="navbar-item-text">Contatos</span>
		</div>

		<div class="navbar-item">			
			<router-link to="/messages" class="navbar-item-link">
				<i class="fa fa-lg fa-comments"></i>
			</router-link>
			<span class="navbar-item-text">Mensagens</span>
		</div>

		<div class="vertical-separator"></div>

		<div class="navbar-item">			
			<div class="user-dropdown" @click="toggleShowUserDropdownContent">
				<div class="user-dropdown-img">
					<Gravatar :email="user.email" />
				</div>

				<div class="user-dropdown-content-container" v-show="showUserDropdownContent">
					<div class="user-dropdown-content-box">
						<router-link to="/admin">
							<i class="fa fa-lg fa-cogs"></i>Administração
						</router-link>

						<router-link to="/profile">
							<i class="fa fa-lg fa-user"></i>Perfil
						</router-link>

						<router-link to="/settings">
							<i class="fa fa-lg fa-cog"></i>Configurações
						</router-link>

						<a href @click.prevent="logout"><i class="fa fa-lg fa-sign-out"></i>Sair</a>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Gravatar from 'vue-gravatar';

	import { userKey } from '@/global';

	export default {
		name: 'NavbarMenu',
		components: { Gravatar },
		data: function () {
			return {
				showUserDropdownContent: false
			}
		},
		computed: mapState(['user']),
		methods: {
			toggleShowUserDropdownContent() {
				this.showUserDropdownContent = !this.showUserDropdownContent;
			},
			logout() {
				localStorage.removeItem(userKey);
				this.$store.commit('setUser', null);
				this.$router.push({ name: 'signin' });
			}
		},
		mounted() {
			this.showUserDropdownContent = false;
		}
	}
</script>

<style>
	.navbar-menu {
		width: 500px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.navbar-item {
		min-width: 30px;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		padding-top: 5px;
		padding-bottom: 2px;
	}

	.navbar-item-link {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		color: #FFF;
		text-decoration: none;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.navbar-item-link:hover {
		color: #FFF;
		text-decoration: none;
		background-color: rgba(255, 255, 255, 0.3);
	}

	.navbar-item-text {
		color: #FFF;
		font-size: 0.9rem;
	}

	.vertical-separator {
		height: 50%;
		/* border-left: solid 2px #ECE9E6;
		border-right: solid 1px #FFF; */
		/* border-left: dashed 1px #FFF; */
		border-left: solid 1px #FFF;
	}

	.user-dropdown {
		position: relative;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.user-dropdown-img > img {
		max-height: 30px;
		border-radius: 50%;
	}

	.user-dropdown:hover {
		background-color: rgba(255, 255, 255, 0.3);
		border-radius: 50%;
	}

	/* .user-dropdown:hover .user-dropdown-content-container {
		visibility: visible;
        opacity: 1;
	} */

	.user-dropdown-content-container {
		position: absolute;
        right: 0px;
		top: 53px;

		background-color: transparent;
		min-width: 200px;
		min-height: 180px;

		font-size: 0.9rem;

		/* visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear; */
	}

	.user-dropdown-content-box {
		z-index: 1;
		position: relative;
		background-color: #FFF;
        width: 100%;
		height: 100%;
		border-radius: 5px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
        padding: 20px;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
		justify-content: space-around;
	}

	.user-dropdown-content-box::before {
		content: '';
		z-index: 2;

		width: 0px;
		height: 0px;
		border-top: 15px solid transparent;
		border-right: 15px solid transparent;
		border-bottom: 15px solid #FFF;
		border-left: 15px solid transparent;

		position: absolute;
		left: 83%;
		top: -15%;
	}

	.user-dropdown-content-box a {
        text-decoration: none;
        color: #727272;
		border-radius: 3px;
		padding: 5px;
    }

	.user-dropdown-content-box a:hover {
        text-decoration: none;
        color: #727272;
        /* background-color: #EDEDED; */
		background-color: #E0E0E0;
    }

	.user-dropdown-content-box a > i {
		width: 35px;
	}
</style>