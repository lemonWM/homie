<template>
    <div class="section-content dashboard">
        <h3>User information</h3>
        <div class="user-information-wrapper">
            <div class="user-header row">
                <img :src="user.logo" alt="../../static/user-logo.png">
                <h2>{{user.user}}</h2>
            </div>
            <p>User name: {{user.user}}</p>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    props:['user']
}
</script>