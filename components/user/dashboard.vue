<template>
	<div class="section-content dashboard">
		<h3>User information</h3>
		<div class="user-information-wrapper">
			<div class="user-header" v-if="user">
				<div class="row" >
					<img :src="user.logo" alt="../../static/user-logo.png" />
					<h2>{{ user.user }}</h2>
				</div>
				<div>
					<h3 class="under-name">{{ user.first_name }} {{user.last_name}}</h3>
				</div>
			</div>
			<div class="user-main">
				<h3>Contact options</h3>
				<div class="contact-wrapper">
					<a :href="`tel:${user.phone}`">
						<i class="fas fa-mobile"></i>
						{{ user.phone }}
					</a>
					<a :href="`mailto:${user.email}`">
						<i class="fas fa-envelope-open"></i>
						{{ user.email }}
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "dashboard",
	props: ["user"],
};
</script>