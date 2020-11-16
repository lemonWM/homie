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
                                <input type="text" placeholder="LOGIN" v-model.trim="user" >
                                <p class="form-input-hint" v-if="!$v.user.required">Login is required</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="FIRST NAME" v-model.trim="firstName" >
                                <p class="form-input-hint" v-if="!$v.firstName.required">First name is required</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="LAST NAME" v-model.trim="lastName" >
                                <p class="form-input-hint" v-if="!$v.lastName.required">Last name is required</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-envelope"></i>
                                <input type="text" placeholder="EMAIL" v-model.lazy="email" @input="$v.email.$touch()">
                                <p class="form-input-hint" v-if="!$v.email.required">E-mail address required</p>
                                <p class="form-input-hint" v-if="!$v.email.email">Incorrect email form</p>
                            </label>
                        </div>
                        <div class="medium-3 cell">
                            <label>
                                <i class="fas fa-key"></i>
                                <input type="password" placeholder="PASSWORD" v-model="password" @blur="$v.password.$touch()">
                                <p class="form-input-hint" v-if="!$v.password.minLength">Required min. 5 signs</p>
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
                                <input type="text" placeholder="UPLOAD LOGO" v-model.trim="firstName" >
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
import { required,  minLength, email} from 'vuelidate/lib/validators';

export default {
    name: 'register-user-panel',
    mixins: [validationMixin],
    data() {
        return {
            user: '',
            firstName:'',
            lastName:'',
            password: '',
            email:'',
            phone: '',
            error: ''
        }
    },
    methods: {
        
        register(){

        }
    },
    validations: {
        user: {
            required
        },
        password: {
            required,
            minLength: minLength(5)
        },
        email: {
            required,
            email
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