<template>
    <div>
        <p>name</p>
        <p>{{user.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'user',
    //props: ['current'],
    data() {
        return {
            user: {}
        }
    },
       mounted() {
        console.log(this.$route
        )
        this.user = this.$route.params.current
      }
}
</script>