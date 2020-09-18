<template>
    <div>
        <contentObserve :user='user'/>
    </div>
</template>

<script>

import contentObserve from '../../../components/user/observe'

export default {
    name: 'user-panel-observe',
    props: ['user'],
    components: {
        contentObserve
    }
}
</script>