<template>
    <div class="user-login-register">
        <loginPanel />
    </div>
</template>

<script>

import loginPanel from '../components/login&register/loginUser'

export default {
    name: 'login',
    components: {
        loginPanel
    }
}
</script>