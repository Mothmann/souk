<template>

    <div>
        <div class="topnav" id="myTopnav">
        <router-link class="link" to="/" tag="button">Home</router-link>
        <router-link class="link" to="/register" tag="button">Register</router-link>
        <router-link id="active" class="link" to="/login" tag="button">Login</router-link>
        <router-link class="link"  to="/category" tag="button">Categories</router-link>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
        <form @submit.prevent="Login">
            <label for="ID">username</label>
            <input type="text" v-model="username"/>
            <label for="ID">password</label>
            <input type="password" v-model="password"/>
            <button type="submit">login</button>
        </form> 
    </div>
</template>
<script>
export default {
    data(){
        return{
                ID: null,
                username: '',
                password: '',
        };
    },
    methods: {
        Login(){
            this.$store.dispatch('user/Login', {
                username: this.username,
                password: this.password,
            });
        }
    }
}
</script>