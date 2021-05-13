<template>
    <div>
        <form @submit.prevent="Register">
            <label for="ID">username</label>
            <input type="text" v-model="username"/>
            <label for="ID">password</label>
            <input type="password" v-model="password"/>
            <button type="submit">Register</button>
        </form>     
      </div>
</template>

<script>
export default {
    data() {
        return {
            ID: null,
            username: '',
            password: '',
        };
    },
    methods: {
        Register() {
            this.$store.dispatch('user/Register', {
                username: this.username,
                password: this.password,
            });
        }
    }
}
</script>