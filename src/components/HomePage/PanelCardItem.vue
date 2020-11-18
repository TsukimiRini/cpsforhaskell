<template>
	<div class="container div-with-top-margin">
		<div class="item-title">
			<slot name="title"></slot>
		</div>
		<div class="item-context">
			<slot name="context"></slot>
		</div>
	</div>
</template>

<style scoped>
.container {
	background: #ececec;
	border-radius: 6px;
	padding: 15px 15px 15px 15px;
}

.item-title {
	font-weight: bold;
}
</style>
