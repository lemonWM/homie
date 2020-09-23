<template>
<div>
    <mainContent :single='single' />
</div>
</template>

<script>
import mainContent from '../../components/forSale/single/singleDetails'

export default {
    name: 'single-sale',
    data() {
        return {
            single: {},
            error: null
        }
    },
    components: {
        mainContent
    },
    created() {

        const reg = new RegExp("/forSale/", "i")

        let singleID = this.$route.path.replace(reg, '')

        this.$axios.get(`${this.$axios.defaults.baseURL}/single-sale/${singleID}`)
            .then(({
                data
            }) => {

                this.single = data
            })
            .catch(({
                error
            }) => {

                this.error = error
            })
    },
}
</script>
