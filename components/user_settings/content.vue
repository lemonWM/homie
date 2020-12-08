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
                        <div v-if="!edit_mode">
                            <p><i class="fa fa fa-user"></i> {{user.first_name}} {{user.last_name}}</p>
                            <p><i class="fas fa-mobile"></i>{{user.phone}}</p>
                            <p><i class="fas fa-envelope"></i>{{user.email}}</p>

                            <button @click="edit_mode =! edit_mode" class="button-generate">edit information</button>
                        </div>
                        <div v-else>
                            <input type="text" :placeholder="user.last_name">
                            <input type="text" :placeholder="user.phone">
                            <input type="text" :placeholder="user.email">

                            <button @click="edit_mode =! edit_mode" class="button-generate">Skip</button>
                            <button  class="button-generate">Save</button>
                        </div>
                    </div>
                    <div class="user-header section-content--offers" style="margin-left:0px">

                        <h2>Added to observe</h2>
                        <div v-for="(favourite, index) in user.favourite" :key="favourite._id" class="single" v-if="user.favourite.length">
                            <div class="row">
                                <img :src="favourite.icon" alt="" class="logo-single">
                                    <div>
                                        <p>{{favourite.localization}}</p>
                                        <p>{{favourite.address}}</p>
                                    </div>
                                <div class="remove-content">
                                    <button class="button-generate" @click="remove_item(favourite._id, index)">remove from observe</button>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="!user.favourite.length">
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
    name: 'profile_settings',
    data() {
        return {
            user: {},
            edit_mode: false,
            error: null    
        }
    },
    created() {
		
        if(Object.entries(this.$store.state.user).length){
            
            const user = this.$store.state.user.first_name

            this.$axios.get(`${this.$axios.defaults.baseURL}/user/${user}`)
            
            .then(({ data }) => {
                
                this.user = data;

                this.set_User_Full(data)
            })
            .catch(({ error }) => {
                
                this.error = error;
            });

        } else {
            this.$router.push({name: 'login'})
        }
    },
    methods: {
        
        remove_item(offer_id, index){

            let item = this.user.favourite[index]

            if(item._id == offer_id){
                
                this.user.favourite.splice(index, 1)

                this.remove_observe(offer_id)
            }
        },
        remove_observe(offer_id){

            this.$axios.delete(`${this.$axios.defaults.baseURL}/remove-user-observed-offer`, { data:{
                    user: this.user._id,
                    _id: offer_id 
                }
            })
            .then(({data})=> {

             })
            .catch(({err})=>{

                console.log(err)
            })
        },
        set_User_Full(user){

            this.$store.commit('setUserDetails', {
                user: user
            })
        }        
    },
}
</script>

