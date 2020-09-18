<template>
    <div>
        <contentDashboard :user='user'/>
    </div>
</template>

<script>

import contentDashboard from '../../../components/user/dashboard'

export default {
    name: 'user-panel-dashboard',
    props: ['user'],
    components: {
        contentDashboard
    }
}
</script>