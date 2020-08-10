<template>
    <div>fdfdsfsd</div>
</template>

<script>
export default {
    name: 'single-details',
    data() {
        return {
            
        }
    },
    created() {

        const reg = new RegExp("/forSale/", "i")

        let singleID = this.$route.path.replace(reg,'')
        
        this.$axios.get(`http://localhost:5000/single-sale/${singleID}`)
            .then(({data})=>{
                
                console.log(data)
            })

    },

}
</script>