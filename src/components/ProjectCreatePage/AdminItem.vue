<template>
	<div class="admin-item-container">
		<div class="avatar-container">
			<img
				:src="adminData.avatar"
				width="85"
				height="85"
				style="border-radius: inherit"
			/>
			<div class="overlay" v-if="adminData.status == 'inviting'">
				<div class="overlay-tag">待邀请</div>
			</div>
			<div
				class="cancel-button"
				v-if="adminData.status == 'inviting'"
				@click="this.$emit(`cancel-inviting`)"
			>
				<IconBase icon-color="red" width="30" height="30">
					<IconCancel> </IconCancel>
				</IconBase>
			</div>
		</div>

		<div style="text-align: center">{{ adminData.usrName }}</div>
	</div>
</template>

<script>
export default {
	props: {
		adminData: Object,
	},
};
</script>

<style scoped>
.admin-item-container {
	height: 110px;
	width: 85px;
	margin-right: 15px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	float: left;
}
.avatar-container {
	border-radius: 13px;
	position: relative;
}
img {
	position: absolute;
}
.overlay {
	position: absolute;
	width: 85px;
	height: 85px;
	top: 0;
	bottom: 0;
	border-radius: inherit;
	z-index: 3;
	display: flex;
	justify-content: center;
	background: #bfbfbf6e;
}
.overlay-tag {
	align-self: center;
	font-size: 16px;
	text-shadow: 0px 0px 5px black;
	color: white;
}
.cancel-button {
	position: absolute;
	z-index: 4;
	top: -10px;
	right: -10px;
	background: white;
	border-radius: 50%;
	cursor: pointer;
}
</style>
