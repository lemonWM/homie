<template>
    <div>
        <p>name</p>
        <p>{{current.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'user',
    props: ['current']
}
</script>