<template>
	<div class="content">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Content'
}
</script>

<style>
	.content {
		grid-area: content;
		/* background: transparent; */
		background: linear-gradient(to right, #ece9e6, #ffffff);
		padding: 20px;
	}
</style>