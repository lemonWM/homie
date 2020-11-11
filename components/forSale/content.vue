<template>
<div class="sales-wrapper">
    <div v-if="getLocalization">
        <div>
            <h3 class="title-result">Results match for {{getLocalization}}</h3>
        </div>
        <div class="module-map">
            <mapModule @pointered='setClass' />
        </div>
    </div>
    <div class="item-wrapper">
        <div class="single-wrapper columns small-3 " 
        
            v-for="(single, index) in sales" :key="single._id" 
            :class="{'active': (single._id === activeID)}" 
            @mouseleave="showDetails('')">

            <div class="single-sale-element ">
                <article @click='goToSingle(single._id) ' class="element-sale">
                    <div class="img-element " @mouseover="showDetails(index)">
                        <figure>
                            <img :src="single.photos[0]" alt="" class="img-single boxes">
                        </figure>
                    </div>
                    <div class="content-single-sale-element" v-bind:class="{'show': showItem === index}">
                        <div>
                            <h3 class="price">${{single.price}}</h3>
                        </div>
                        <div>
                            <p class="address">{{single.localization}} {{single.address}}</p>
                        </div>
                        <div>
                            <p class="details">{{single.schedulePlace.bedrooms}} bedrooms / {{single.schedulePlace.bathrooms}} bathrooms / {{single.totalArea}} &sup2</p>
                        </div>
                    </div>
                </article>
                <div class="add-to-observe" 
                    @mouseover="enableObserve(index)" 
                    @mouseleave="enableObserve('')" 
                    v-bind:class="{ active_button: active_add === index, 
                                    observed: items_favourite.indexOf(single._id) > -1, 
                                    temporary: temporaryClass === single._id}">
                    <button :disabled='!loggedUser' 
                            @click="add_to_observe(single._id)" 
                            @mouseover="generateTitle" 
                            :title="buttonAddTitle">
                        <i class="far fa-heart add-to-observe-icon"></i>
                    </button>
                </div>
                <div class="badge-element">
                    <div class="">
                        <div class="ribbon"><span>{{single.type}}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mapModule from '../gMapsModul/moduleMapGoogle'
import observeVue from '../user/observe.vue'

export default {
    name: 'main-content',
    data() {
        return {
            allSels: [],
            activeID: '',
            showItem: '',
            buttonAddTitle: '',
            active_add: '',
            items_favourite: [],
            temporaryClass: ''
        }
    },

    created() {

        this.items_favourite = []

        if (!this.$store.state.sales.length) {
            
            this.getSales()
        } 
        else if(Object.entries(this.$store.state.user).length) {
            
            this.getSales()
        }
    },
    computed: {

        sales() {

            if (this.$store.state.searchPlace === '') {

                return this.$store.state.sales
            } else {

                return this.$store.getters.getSelectedPlace(this.$store.state.searchPlace)
            }
        },
        getLocalization() {

            if(this.$store.state.searchPlace){

                return this.$store.state.localization.locality
            } else {

                return false
            }
        },
        loggedUser() {

            if (Object.entries(this.$store.state.user).length === 0) {

                return false
            } else {

                return true
            }
        },
        userDetails(){

            console.log(this.$store.state.user.favourite)
        }
    },
    methods: {

        getSales() {

            this.$axios.get(this.$axios.defaults.baseURL + '/sales')
                .then(({ data }) => {

                    this.allSels = data

                    this.setSales(data)
                    this.select_all_ID(data)  // selecting _id of all single    
                })
                .catch(({ error }) => {
                    this.error = error
                })
        },
        setSales(data) {

            this.$store.commit('setSales', {
                sales: data
            })
        },
        goToSingle(id) {

            this.$router.push(`/forSale/${id}`)
        },
        setClass(value) {

            this.activeID = value

        }, // add class active to item selected on google maps pin click
        showDetails(index) {

            this.showItem = index
        },
        generateTitle() {

            if (this.loggedUser) {

                this.buttonAddTitle = 'Add to observe'
            } else {

                this.buttonAddTitle = 'Login first'
            }
        },
        enableObserve(value) {

            if (this.loggedUser) {
                this.active_add = value
            }
        },
        add_to_observe(value) {

            let to_observe = this.$store.getters.get_selected_offer(value) // getter return single offer prom array of all

            let favourite_Single = {
                userID: this.$store.state.user._id,
                _id: to_observe[0]._id,
                icon: to_observe[0].photos[0],
                localization: to_observe[0].localization,
                address: to_observe[0].address,
                owner: to_observe[0].offer_owner
            } // created item on click favourite -> api to user favourite
   
            this.send_favourite(favourite_Single) 

            this.temporaryClass = value
        },
        send_favourite(item){ 

            // push to favourite array in user profile

            this.$axios.put(`${this.$axios.defaults.baseURL}/add-to-favourite`, item)

            .then(({ data }) =>{

                this.update_User(data.value) 

                this.select_all_ID(this.allSels) // chect array od id all items and favourited to match _id
            })
            .catch(({ err })=> {
                console.log(err)
            })
        },
        select_all_ID(salesAll){
            
            let all_items_ID = []

            salesAll.forEach((single) => {
                
                all_items_ID.push(single._id)
            });
        
            this.matched(all_items_ID) 
        }, // all _id for sales
        matched(all_items){

            let userFavourite = []

            if(Object.entries(this.$store.state.user).length){

                let arr = this.$store.state.user

                arr.favourite.forEach(function(single){
                    
                    userFavourite.push(single._id)
                })
            }
            
            this.items_favourite = []

            this.items_favourite = all_items.filter(element => userFavourite.includes(element));
            // if _id from sels and favourite match 
            // console.log(this.items_favourite)
        }, // matched idex from all items and from selected item by user - if matched to item added class observed - visible liked item
        update_User(user){

            this.$store.commit('loginUser',{
                user: user
            })
        } // after send to favourite update user obj in store
    },
    components: {
        mapModule
    }
}
</script>

<style scoped>
.hiden {
    display: none;
}

.show {
    display: block !important;
}



.element-sale {
    cursor: pointer;
}

.single-wrapper {
    background-color: #505767;
    margin: 20px;
    border-radius: 10px;
    border-radius: 30px;
    height: 100%;
    max-width: 350px !important;
    width: auto;
    transition: all ease-in .2s;
}
.single-wrapper:hover{
    -webkit-box-shadow: 0px -6px 11px -9px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -6px 11px -9px rgba(0,0,0,0.75);
    box-shadow: 0px -6px 11px -9px rgba(0,0,0,0.75);
}

.item-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0px;
    max-width: 1200px;
    margin: 0 auto;
}

.single-sale-element {
    padding-top: 15px;
    padding-bottom: 10px;
    position: relative;

}

.content-single-sale-element {
    min-height: 140px;
}

.img-single {
    border-radius: 20px;
}

.price {
    color: #c2f9df;
    font-size: 24px;
}

.address {
    color: #86959c;
    margin-bottom: 5px;
}

.details {
    font-size: 14px;
    margin-bottom: 5px;
    color: #86959c;
}

.add-to-observe {
    position: absolute;
    top: 26px;
    left: 10px;
    background-color: #505767;
    padding: 10px 15px;
    border-radius: 15px;
}

.add-to-observe-icon {
    color: #c2f9df;
    font-size: 18px;
}

.active_button, .observed, .temporary {
    background: #c2f9df;
}

.active_button .add-to-observe-icon, .observed .add-to-observe-icon, .temporary .add-to-observe-icon{
    color: black;
}

.active {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(193, 247, 221, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(193, 247, 221, 1);
    box-shadow: 0px 0px 5px 0px rgba(193, 247, 221, 1);
}

.boxes {
    position: relative;
}

.ribbon {
    position: absolute;
    right: -24px;
    top: -5px;
    z-index: 1;
    overflow: hidden;
    width: 75px;
    height: 75px;
    text-align: right;
}

.ribbon span {
    font-size: 12px;
    font-weight: bold;
    color: #FFF;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: #262626;
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
}

.ribbon span::before {
    content: "";
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #262626;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #262626;
}

.ribbon span::after {
    content: "";
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #262626;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #262626;
}
</style>
