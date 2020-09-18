<template>
    <div>
        <contentOffers :user='user'/>
    </div>
</template>

<script>

import contentOffers from '../../../components/user/offers'

export default {
    name: 'user-panel-offers',
    props: ['user'],
    components: {
        contentOffers
    }
}
</script>