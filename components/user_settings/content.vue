<template>
    <div class="main_settings">
        <div class="user_content main-user-wrapper">
            <div class="personal section-content">
                <div class="user-information-wrapper">
                    <div class="user-header">
                        <img :src="user.logo" alt="" v-if="user.logo" class="user-header--logo">
                        <img src="../../static/user-logo.png" alt="" v-else class="user-header--logo">

                        <button class="button-generate">change logo</button>
                    </div>
                    <div class="user-header">
                        <p><i class="fa fa fa-user"></i> {{user.first_name}} {{user.last_name}}</p>
                        <p><i class="fas fa-mobile"></i>{{user.phone}}</p>
                        <p><i class="fas fa-envelope"></i>{{user.email}}</p>

                        <button class="button-generate">edit information</button>
                    </div>
                    <div class="user-header section-content--offers" style="margin-left:0px">

                        <h2>Added to observe</h2>

                        <div v-for="favourite in user.favourite" :key="favourite._id" class="single" v-if="user.favourite.length">

                            <div class="row">
                                <img :src="favourite.icon" alt="" class="logo-single">
                                <p>{{favourite.localization}}</p>
                                <p>{{favourite.address}}</p>

                                <div class="remove-content">
                                    <button class="button-generate">remove from observe</button>
                                </div>
                            </div>
                        
                        </div>
                        <div v-else>
                            <p>You not add to observe any offer</p>
                        </div>
                    </div>
                    <div class="user-header section-content--offers" style="margin-left:0px">

                        <h2>Created offers</h2>

                        <div v-for="sale in user.sales" :key="sale._id" class="single" v-if="user.sales.length">

                            <div class="row">
                                <img :src="sale.icon" alt="" class="logo-single">
                                <p>{{sale.localization}}</p>
                                <p>{{sale.address}}</p>

                                <div class="remove-content">
                                    <button class="button-generate">delete offer</button>
                                </div>
                            </div>
                        
                        </div>
                        <div v-else>
                            <p>You haven't create offer</p>
                        </div>
                    </div>
                </div>
            

            </div>
            <div class="activities"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile settings',
    data() {
        return {
            user: {}    
        }
    },
    created() {
        
        this.user = this.$store.state.user
    },
}
</script>

