<template>
	<div class="admin-bar" v-if="loggedUser" :class="{'show': adminBar}">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="4681 2492.23 72.096 18.84" width="73" height="19.06"><path class="a" d="M4705.658 2507.751v-3.246h7.314v-3.046h-7.314v-3.155h8.317v-3.028h-11.709v10.177l-7.733-10.177h-3.433v8.9c0 2.462-1.258 3.721-3.356 3.721-2.079 0-3.356-1.313-3.356-3.83v-8.791H4681v8.882c0 4.578 2.553 6.894 6.73 6.894s6.8-2.3 6.8-7v-3.414l2.079 2.718 5.672 7.441h11.712v-3.046zM4715.507 2493.762a1.526 1.526 0 0 1 1.514-1.532 1.51 1.51 0 0 1 1.514 1.514 1.522 1.522 0 0 1-1.514 1.514 1.5 1.5 0 0 1-1.514-1.496zm2.863-.018a1.32 1.32 0 0 0-1.331-1.35 1.343 1.343 0 0 0-1.331 1.35 1.332 1.332 0 1 0 2.663 0zm-2.006-.821h.766c.383 0 .675.164.675.547a.525.525 0 0 1-.328.511l.383.547h-.529l-.328-.474h-.182v.476h-.456zm.748.766c.164 0 .237-.073.237-.182 0-.128-.091-.182-.237-.182h-.292v.365z"></path><g opacity=".27"><path class="a" d="M4722.456 2511.069a4.9 4.9 0 0 1-2.134-.438 4.548 4.548 0 0 1-1.532-1.222 5.249 5.249 0 0 1-.93-1.86 9.012 9.012 0 0 1 0-4.687 5.933 5.933 0 0 1 .93-1.86 4.181 4.181 0 0 1 1.532-1.222 4.844 4.844 0 0 1 2.134-.438 4.6 4.6 0 0 1 2.918.894 3.843 3.843 0 0 1 1.4 2.59h-1.04a3.086 3.086 0 0 0-1.113-1.952 3.637 3.637 0 0 0-2.17-.6 3.757 3.757 0 0 0-1.751.383 3.2 3.2 0 0 0-1.186 1.076 4.8 4.8 0 0 0-.675 1.587 8.407 8.407 0 0 0 0 3.812 4.38 4.38 0 0 0 .693 1.568 3.349 3.349 0 0 0 1.185 1.076 3.6 3.6 0 0 0 1.714.383 3.3 3.3 0 0 0 2.389-.875 3.8 3.8 0 0 0 1.094-2.28h1a5.3 5.3 0 0 1-.456 1.66 4.427 4.427 0 0 1-.93 1.295 4.109 4.109 0 0 1-1.35.839 5.007 5.007 0 0 1-1.722.271zM4728.384 2499.561h1.058v1.77h.036a5.1 5.1 0 0 1 1.368-1.423 3.677 3.677 0 0 1 2.116-.547 3.458 3.458 0 0 1 1.879.511 2.676 2.676 0 0 1 1.167 1.55h.073a3.976 3.976 0 0 1 1.5-1.514 4.328 4.328 0 0 1 2.225-.547 3.968 3.968 0 0 1 1.313.219 2.951 2.951 0 0 1 1.076.657 3.21 3.21 0 0 1 .73 1.076 3.774 3.774 0 0 1 .274 1.5v8.025h-1.058v-7.957a2.566 2.566 0 0 0-.693-2.006 2.685 2.685 0 0 0-1.879-.62 4.131 4.131 0 0 0-1.258.2 2.978 2.978 0 0 0-1.04.62 2.813 2.813 0 0 0-.693 1.04 3.877 3.877 0 0 0-.255 1.423v7.259h-1.058v-7.916a2.507 2.507 0 0 0-.711-2.006 2.556 2.556 0 0 0-1.769-.62 3.3 3.3 0 0 0-1.258.255 3.365 3.365 0 0 0-1.787 1.733 3.113 3.113 0 0 0-.274 1.295v7.259h-1.058v-11.236zM4748.993 2511.07a5.58 5.58 0 0 1-1.933-.31 4.173 4.173 0 0 1-1.368-.8 3.239 3.239 0 0 1-.821-1.167 4.652 4.652 0 0 1-.328-1.387h1.094a2.735 2.735 0 0 0 1.021 2.079 3.777 3.777 0 0 0 2.334.693 3.407 3.407 0 0 0 2.225-.657 2.176 2.176 0 0 0 .8-1.769 2.021 2.021 0 0 0-.128-.784 1.434 1.434 0 0 0-.474-.584 3.674 3.674 0 0 0-.93-.474 12.434 12.434 0 0 0-1.514-.438 15.577 15.577 0 0 1-1.605-.438 5.526 5.526 0 0 1-1.277-.6 2.883 2.883 0 0 1-.839-.857 2.381 2.381 0 0 1-.31-1.258 2.664 2.664 0 0 1 .292-1.258 2.916 2.916 0 0 1 .821-.948 4.024 4.024 0 0 1 1.222-.6 4.944 4.944 0 0 1 1.5-.2 5.028 5.028 0 0 1 1.678.237 3.144 3.144 0 0 1 1.933 1.7 4.8 4.8 0 0 1 .383 1.258h-1.04a2.266 2.266 0 0 0-.894-1.678 3.29 3.29 0 0 0-2.061-.584 3.156 3.156 0 0 0-2.061.584 1.84 1.84 0 0 0-.693 1.459 1.608 1.608 0 0 0 .2.821 1.646 1.646 0 0 0 .6.565 4.688 4.688 0 0 0 1.04.438c.419.128.912.255 1.5.383a12.979 12.979 0 0 1 1.532.438 4.675 4.675 0 0 1 1.167.6 2.419 2.419 0 0 1 .766.894 2.883 2.883 0 0 1 .274 1.331 3.112 3.112 0 0 1-.274 1.295 2.76 2.76 0 0 1-.8 1.04 4.3 4.3 0 0 1-1.277.711 4.837 4.837 0 0 1-1.755.265z"></path></g></svg>
		<span class="greet"> Hello <b>{{loggedUser.first_name}} {{loggedUser.last_name}}</b></span>
		<div class="items">
			<a href="/admin/dashboard">
				<i class="admin-bar-home"></i> <span>Dashboard</span>
			</a>
			<a href="/admin/users">
				<i class="admin-bar-users"></i> <span>Users</span>
			</a>
			<a href="/admin/sections">
				<i class="admin-bar-sections"></i> <span>Sections</span>
			</a>
			<a href="/admin/pages">
				<i class="admin-bar-pages"></i> <span>Pages</span>
			</a>
			<a href="javascript:void(0)" v-on:click="logout">
				<i class="admin-bar-logout"></i> <span>Logout</span>
			</a>
		</div>
		<span class="admin-bar__toggler" @click="toggleAdminBar">
			<i class="admin-bar-cog-alt"></i>
		</span>
	</div>
</template>

<script>
	export default {
		mounted () {
			let isLogged
			if (user) {
				isLogged = JSON.parse(user)
			} else {
				isLogged = false
			}
			this.loggedUser = isLogged
		},
		data () {
			return {
				loggedUser: false,
				adminBar: false
			}
		},
		methods: {
			toggleAdminBar() {
				this.adminBar = !this.adminBar
			},
			logout() {
				axios.post('/logout').then(() => {
					this.loggedUser = false
				})
			}
		}
	}
</script>
