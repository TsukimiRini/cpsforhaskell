<template>
	<div class="admin-container">
		<div class="admin-title">管理人列表</div>
		<div class="separator"></div>
		<div style="display: inline-block" v-for="(admin, idx) in adminData" :key="idx">
			<AdminItem
				:admin-data="admin"
				@cancel-inviting="adminData.splice(idx, 1)"
			></AdminItem>
		</div>
		<div style="display: inline-block">
			<NewAdmin></NewAdmin>
		</div>
	</div>
</template>

<script>
import { reactive } from "vue";
import AdminItem from "./AdminItem.vue";
import NewAdmin from "./NewAdminComponent";
export default {
	setup() {
		let adminData = reactive([
			{
				id: 1,
				usrName: "管理员",
				avatar:
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607628343822&di=d973a100b445a248cc822cefd5fae126&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn19%2F0%2Fw400h400%2F20180910%2F3391-hiycyfw5413589.jpg",
				status: "owner",
			},
			{
				id: 2,
				usrName: "ADMIN",
				avatar:
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607628540139&di=9dd5cabf0c2f6cf79705ee135ec3b606&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F600%2Fw700h700%2F20180424%2F514b-fzqvvsa3694420.jpg",
				status: "inviting",
			},
		]);

		return {
			adminData,
			AdminItem,
			NewAdmin,
		};
	},
};
</script>

<style scoped>
.admin-container {
	background: white;
	border-radius: 6px;
	padding: 15px;
	margin: 15px 0 15px 0;
	border: 1px solid #bbbbbb;
}
.admin-title {
	font-size: 18px;
	font-weight: bold;
}
.separator {
	background: #bbbbbb;
	height: 1px;
	margin-bottom: 25px;
}
</style>
