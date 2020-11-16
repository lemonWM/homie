<template>
    <div class="main-content">
        <div class="title">
            <h2>Register new user in <span>homie</span></h2>
        </div>
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
                        <i class="fas fa-envelope"></i>
                        <input type="text" placeholder="EMAIL" v-model.lazy="email" @input="$v.email.$touch()">
                        <p class="form-input-hint" v-if="!$v.email.required">E-mail address required</p>
                    </label>
                </div>
                    <div class="medium-3 cell">
                        <label>
                            <i class="fas fa-key"></i>
                            <input type="password" placeholder="PASSWORD" v-model="password" @blur="$v.password.$touch()">
                            <p class="form-input-hint" v-if="!$v.password.minLength">Required min. 5 signs</p>
                        </label>
                    </div>
                    <button type="button" class=" button-generate" :disabled='$v.$invalid' @click="register">SIGN IN</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>

import { validationMixin } from 'vuelidate';
import { required,  minLength } from 'vuelidate/lib/validators';

export default {
    name: 'register-user-panel',
    mixins: [validationMixin],
    data() {
        return {
            user: '',
            password: '',
            email:'',
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
            required
        }
    }
}
</script>