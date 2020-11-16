<template>
    <div class="user-login-register">
        <registerPanel />
    </div>
</template>

<script>

import registerPanel from '../components/login&register/registerUser'

export default {
    name: 'register',
    components: {
        registerPanel
    }
}
</script>