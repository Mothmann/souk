<template>
<body>
    <div class="topnav" id="myTopnav">
        <router-link class="link" to="/" tag="button">Home</router-link>
        <router-link id="active" class="link" to="/register" tag="button">Register</router-link>
        <router-link class="link" to="/logout" tag="button">Logout</router-link>
        <router-link class="link"  to="/category" tag="button">Categories</router-link>
        <router-link class="link"  to="/product" tag="button">Products</router-link>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="title">Registration</div>
        <div class="container">
            <div class="body">
                <form @submit.prevent="Register">
                    <div class="user-details">
                        <div class="input-box">
                            <label for="ID" class="details">Username</label>
                            <input type="text" v-model="username"/>
                        </div>
                        <div class="input-box">
                            <label for="ID" class="details">Password</label>
                            <input type="password" v-model="password"/>
                        </div>
                    </div>
                    
                    <div class="button">
                        <button class="register" type="submit">Register</button>
                    </div>
                </form>     
            </div>
        </div>
            <footer class="footer">
            <div class="footer-left">
                <img src="../../../public/images/logo3.png" alt="">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada leo mauris, non ultricies nunc</p>
                <div class="socials">
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-dribbble"></i></a>
                    <a href="#"><i class="fa fa-youtube"></i></a>
                    <a href="#"><i class="fa fa-tumblr"></i></a>
                </div>
            </div>
            <ul class="footer-right">
                <li>
                    <h2>Product</h2>

                    <ul class="box">
                        <li><a href="#">Theme Design</a></li>
                        <li><a href="#">Plugin Design</a></li>
                        <li><a href="#">Wordpress</a></li>
                        <li><a href="#">Joomla Template</a></li>
                        <li><a href="#">HTML Template</a></li>
                    </ul>
                </li>
                <li class="features">
                    <h2>Useful Links</h2>

                    <ul class="box">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Tickets</a></li>
                        <li><a href="#">Customer Service</a></li>
                    </ul>
                </li>
                <li>
                    <h2>Address</h2>

                    <ul class="box">
                        <li><a href="#">8 ibnou khatima</a></li>
                        <li><a href="#">Rue Les Hopitaux</a></li>
                        <li><a href="#">Casablanca</a></li>
                        <li><a href="#">Maroc</a></li>
                    </ul>
                </li>
            </ul>

            <div class="footer-bottom">
                <p>All Rights Reserved By &copy;Souk 2021</p>
            </div>

        </footer>
</body>
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

<style>
.title{
    display: block;
    font-size: 50px;
    font-weight: 600;
    position: relative;
    text-align: center;
    color: white;
    margin-top: 5%;
}
.title::before{
    content: "";
    position: absolute;
    height: 5px;
    width: 30px;
    background: rgb(255, 183, 0);
}
.container.title::before{
    left: 0;
    bottom: 0;
}

.container{
    width: 100%;
    padding: 25px 30px;
}
.container form .user-details{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

form .user-details .input-box{
    margin: 20px 0px 12px 0px;
    width: calc(100% / 2 - 20px);
}

.user-details .input-box input{
    height: 45px;
    width: 100%;
}

.user-details .input-box .details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
    border: none;
    border-bottom: 5px solid rgb(255, 183, 0);
    padding-left: 15px;
    font-size: 16px;
    color: white;
    width: 100%;
    margin: auto;
    margin-bottom: 1%;
}

.category , .gender-title{
  color: white;
}

form .gender-details .gender-title{
  font-size: 20px;
  font-weight: 500;
}

form .gender-details .category{
  display: flex;
  width: 80%;
  margin: 14px 0;
  justify-content: space-between;
  margin: auto;
}

.gender-details .category label{
  display: flex;
  align-items: center;
}

.gender-details .category .dot-one, .dot-two, .dot-three{
  height: 18px;
  width: 18px;
  background: #d9d9d9;
  border-radius: 50%;
  margin-right: 10px;
  border: 5px solid transparent;
  transition: all 0.3s ease;
}

#dot-1:checked~ .category  label .dot-one,
#dot-2:checked~ .category  label .dot-two,
#dot-3:checked~ .category  label .dot-three{
  border-color: #d9d9d9;
  background-color:rgb(255, 183, 0);
}

form input[type="radio"]{
  display: none;
}

form .button{
  height: 45px;
  margin:  45px 0px;
}

.register{
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background: rgb(255, 183, 0);
  color: white;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 5px;
  margin: auto;
}

.register:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.5s ease-in-out;
    background: rgb(255, 183, 0);
}
@media (max-width: 584px){
  .container{
    max-width: 100%;
}

  form .user-details .input-box{
    margin-bottom: 15px;
    width: 100%;
  }
  form .gender-details .category{
    width: 100%;
  }
  .container form .user-details{
    max-height: 300px;
    overflow-y: hidden;
    margin-top: 15%;
  }
  .title{
    font-size: 20px;
    font-weight: 600;
    position: static;
    text-align: center;
    color: white;
  }
}
html {
  scrollbar-face-color: #646464;
  scrollbar-base-color: #646464;
  scrollbar-3dlight-color: #646464;
  scrollbar-highlight-color: #646464;
  scrollbar-track-color: #000;
  scrollbar-arrow-color: #000;
  scrollbar-shadow-color: #646464;
}

::-webkit-scrollbar { width: 8px; height: 3px;}
::-webkit-scrollbar-button {  background-color: #666; }
::-webkit-scrollbar-track {  background-color: #646464;}
::-webkit-scrollbar-track-piece { background-color: #000;}
::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
::-webkit-scrollbar-corner { background-color: #646464;}
::-webkit-resizer { background-color: #666;}
body{
    overflow-x: hidden;
}
</style>
