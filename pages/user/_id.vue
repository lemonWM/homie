<template>
    <div>
        <p>name</p>
        <p>{{user.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'user',
    props: ['user']
}
</script>