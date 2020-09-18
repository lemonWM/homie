<template>
    <div>
        <contentContact :user='user'/>
    </div>
</template>

<script>

import contentContact from '../../../components/user/contact'

export default {
    name: 'user-panel-contact',
    props: ['user'],
    components: {
        contentContact
    }
}
</script>