<template>
    <div class="section-content offers">
        <h3>Sale & rents offers</h3>
        <div v-if="!user.sales.length & !user.rents.length">
            <p>{{user.user}} not published any offer yet</p>
        </div>   
        <div v-else>
            <div v-if="user.sales.length">
                <h5>User sales offer</h5>
                <div v-for="(sale, index) in user.sales"  :key="index">
                    <p>{{sale}}</p>
                </div>  
            </div>
            <div v-if="user.rents.length">
                <h5>User rents offer</h5>
                <div v-for="(rent, index) in user.rents"  :key="index">
                    <p>{{rent}}</p>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'observe',
    props: ['user']
}
</script>