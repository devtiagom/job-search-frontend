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
		background: #ECE9E6;
		padding: 20px;
	}
</style>