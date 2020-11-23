<template>
    <div class="main-content">
        <div class="title">
            <h2>Register new user in <span>homie</span></h2>
        </div>
        <div class="forms-wrapper">
            <form class="form">
                <div class="grid-container">
                    <div class="column">
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="LOGIN" v-model="user" >
                                <p class="form-input-hint" v-if="$v.user.$dirty && !$v.user.required">Login is required</p>
                                <p class="form-input-hint" v-if="! $v.user.$pending && !$v.user.unique">This user is already in use</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="FIRST NAME" v-model.lazy="firstName" >
                                <p class="form-input-hint" v-if="$v.firstName.$dirty && !$v.firstName.required">First name is required</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="LAST NAME" v-model.lazy="lastName" >
                                <p class="form-input-hint" v-if="$v.lastName.$dirty && !$v.lastName.required">Last name is required</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-envelope"></i>
                                <input type="text" placeholder="EMAIL" v-model.lazy="email" @input="$v.email.$touch()">
                                <p class="form-input-hint" v-if="$v.email.$dirty && !$v.email.required">E-mail address required</p>
                                <p class="form-input-hint" v-if="$v.email.$dirty && !$v.email.email">Incorrect email form</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-key"></i>
                                <input type="password" placeholder="PASSWORD" v-model="password" @blur="$v.password.$touch()">
                                <p class="form-input-hint" v-if="$v.password.$dirty && !$v.password.minLength">Required min. 5 signs</p>
                                <p class="form-input-hint" v-if="$v.password.$dirty && !$v.password.containsUppercase">Need to use upper case sign</p>
                                <p class="form-input-hint" v-if="$v.password.$dirty && !$v.password.containsLowercase">Need to use lower case sign</p>
                                <p class="form-input-hint" v-if="$v.password.$dirty && !$v.password.containsNumber">Need to use number sign</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-key"></i>
                                <input type="password" placeholder="PASSWORD" v-model="passwordConfirm" @blur="$v.passwordConfirm.$touch()">
                                <p class="form-input-hint" v-if="$v.passwordConfirm.$dirty && !$v.passwordConfirm.sameAs">Passwords are differents</p>
                            </label>
                        </div>
                    <p v-if="$v.$invalid == false">You complited required basic!<br> You want to update more profile details?</p>
                    </div>
                </div>
            </form>

            <form v-if="$v.$invalid == false" class="form">
                <div class="grid-container">
                    <div class="column">
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-phone-alt"></i>
                                <input type="text" placeholder="PHONE" v-model.trim="phone" >
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-portrait"></i>
                                <input type="text" placeholder="UPLOAD LOGO" v-model.trim="logo" >
                                <p class="form-input-hint" v-if="!$v.firstName.required">First name is required</p>
                            </label>
                        </div>   
                    </div>
                </div>
            </form>      
        </div>

        <button type="button" class=" button-generate" :disabled='$v.$invalid' @click="register">SIGN IN</button>

    </div>
</template>

<script>

import { validationMixin } from 'vuelidate';
import { required,  minLength, email, sameAs} from 'vuelidate/lib/validators';

export default {
    name: 'register-user-panel',
    mixins: [validationMixin],
    data() {
        return {
            user: '',
            firstName:'',
            lastName:'',
            password: '',
            passwordConfirm:'',
            email:'',
            phone: '',
            logo: '',
            error: '',
            registeredDate: '',
            error: ''
        }
    },
    created() {
        
        let d = new Date

        this.registeredDate = d.getDay() + ' '+ d.getMonth() + ' '+ d.getFullYear()
    },
    methods: {
        
        register(){

            let register_user = {
                user: this.user,
                first_name: this.firstName,
                last_name: this.lastName,
                password: this.password,
                logo: this.logo,
                email: this.email,
                phone: this.phone,
                sales: [],
                rents: [],
                favourite: [],
                registered: this.registeredDate
            }

            this.registerUser(register_user)
        },
        registerUser(user){

            this.$axios.post(this.$axios.defaults.baseURL + '/register-new-user', user)

            .then(({ data })=>{

                this.setLogged(data)

                this.$router.push({name: 'index'})
            })
            .catch(({ data })=>{

                this.error = data
            })
        },
        setLogged(user) {

            this.$store.commit('loginUser', {
                user: user
            })
        }
    },
    validations: {
        user: {
            required,
            unique(value){
                
                if( value === ''){
                    
                    return true

                } else {
                
                return this.$axios.post('/validate-user-login', {
                            
                           user: value
                        })            
                        .then(response => {
                      
                            return response.data.unique             
                        })
                }  
            }
        },
        password: {
            required,
            minLength: minLength(5),
            containsUppercase: function(value) {
            return /[A-Z]/.test(value)
            },
            containsLowercase: function(value) {
            return /[a-z]/.test(value)
            },
            containsNumber: function(value) {
            return /[0-9]/.test(value)
            }
        },
        passwordConfirm: {
            required,
            sameAs: sameAs('password')
        },
        email: {
            required,
            email,
        },
        firstName:{
            required
        },
        lastName:{
            required
        }
    }
}
</script>