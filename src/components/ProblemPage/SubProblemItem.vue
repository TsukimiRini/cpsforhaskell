<template>
	<router-link to="/problem/sub" style="color: inherit">
		<div class="container">
			<div class="subprob-title p-text-nowrap p-text-truncate">
				<slot name="name"></slot>
			</div>
			<div class="subprob-context p-text-nowrap p-text-truncate">
				<slot name="content"></slot>
			</div>
		</div>
	</router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	background: #f7f7f7;
	border: solid 1px #bbbbbb;
	border-radius: 5px;
	width: 200px;
	height: 150px;
	padding: 8px 10px 8px 10px;
	margin-left: 10px;
	margin-bottom: 10px;
	display: inline-block;
	cursor: pointer;
}
.container:hover {
	border-color: black;
}

.subprob-title {
	font-weight: bold;
}
</style>
