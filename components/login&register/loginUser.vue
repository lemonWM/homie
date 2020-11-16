<template>
<div class="main-content">
    <div class="title">
        <h2>Sign into your account</h2>
    </div>
    <form class="form">
        <div class="grid-container">
            <div class="column">
                <div class="medium-3 cell">
                    <label>
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="LOGIN" v-model.lazy="user" @input="$v.user.$touch()">
                        <p class="form-input-hint" v-if="!$v.user.required">Login required</p>
                    </label>
                </div>
                <div class="medium-3 cell">
                    <label>
                        <i class="fas fa-key"></i>
                        <input type="password" placeholder="PASSWORD" v-model="password" @blur="$v.password.$touch()">
                        <p class="form-input-hint" v-if="!$v.password.minLength">Required min. 5 signs</p>
                    </label>
                </div>
                <button type="button" class="button-generate" :disabled='$v.$invalid' @click="login">SIGN IN</button>
            </div>
        </div>
    </form>
    <div>
        <p>If you don't have an account, no problem.
            <router-link :to="{name: 'register'}"> Create now.</router-link>
        </p>
    </div>
    <div class="error" v-if="error">
        <p class="form-input-hint">{{error}}</p>
    </div>
</div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required,  minLength } from 'vuelidate/lib/validators';

export default {
    name: 'user-login',
    mixins: [validationMixin],
    data() {
        return {
            user: '',
            password: '',
            error: ''
        }
    },
    methods: {

        login() {

            this.$axios.post(this.$axios.defaults.baseURL + '/login', {
                    user: this.user,
                    password: this.password
                })
                .then(({ data }) => {

                    let user = data.findedUser

                    this.setLogged(user)

                    this.$router.push({ name: 'index' })
                })
                .catch(({err}) => { this.error = err })
        },
        setLogged(user) {

            this.$store.commit('loginUser', {
                user: user
            })
        }
    },
    validations: {
        user: {
            required
        },
        password: {
            required,
            minLength: minLength(5)
        }
    }
}
</script>
