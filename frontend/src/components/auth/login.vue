<template>
<body>
    <div class="topnav" id="myTopnav">
        <router-link class="link" to="/" tag="button">Home</router-link>
        <router-link class="link" to="/register" tag="button">Register</router-link>
        <router-link id="active" class="link" to="/login" tag="button">Login</router-link>
        <router-link class="link" to="/category" tag="button">Categories</router-link>
        <router-link class="link" to="/product" tag="button">Products</router-link>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <header>
        <div class="main-header">
            <h1>Login</h1>
            <hr />
            <h3>Please Enter Your Credentials</h3>
            <form @submit.prevent="Login">
                <p><label for="ID">username</label></p>
                <input type="text" v-model="username"/>
                <p><label for="ID">password</label></p>
                <input type="password" v-model="password"/>
                <p><button type="submit">login</button></p>
            </form> 
        </div>
    </header>
</body>
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
<style>
    header{
    height: 90vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    user-select: none;
}

.main-header{
    text-align: center;
}

.main-header h1{
    font-size: 3rem;
}

.main-header hr{
    width: 50%;
    margin: auto;
    padding:5px;
    background:rgb(255, 183, 0) ;
    border: none;
    border-radius: 50%;
    margin-bottom: 3%;
}

.main-header h3{
    font-size: 2rem;
}

.main-header input{
    width: 90%;
    padding: 1rem;
    margin: 20px 0px;
    border: none;
    border-bottom: 5px solid rgb(255, 183, 0);
}



.main-header button{
    padding: 1rem 3rem;
    font-size: 1.2rem;
    background: rgb(255, 183, 0);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
}

.main-header button:hover{
    transform: scale(1.2);
}
</style>