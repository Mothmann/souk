<template>
<body>
    <div class="topnav" id="myTopnav">
        <router-link class="link" to="/" tag="button">Home</router-link>
        <router-link class="link" to="/register" tag="button">Register</router-link>
        <router-link class="link" to="/login" tag="button">Login</router-link>
        <router-link id="active" class="link"  to="/category" tag="button">Categories</router-link>
        <router-link class="link"  to="/product" tag="button">Products</router-link>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    <div class="categories" id="">
        <h1>Categories</h1>
    </div>
    <div>
 
      <form class="added" @submit.prevent="addCategory">
        <label for="categoryId">categoryId</label>
        <input type="number" v-model="categoryId" />
        <label for="categoryId">Name</label>
        <input type="text" v-model="categoryName" />
        <label for="categoryId">Description</label>
        <input type="text" v-model="categoryDescription" />
        <button class="submit" type="submit">Add category</button>
      </form>     
        <div >
          <ul>
            <category-item v-for="category in fetchedCategories" 
            :key="category.categoryId" 
            :categoryId="category.categoryId"
            :categoryName="category.categoryName"
            :categoryDescription="category.categoryDescription" />
          </ul>
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
import CategoryItem from '../Category/CategoryItem.vue';
export default {
    components: {
        CategoryItem,
    },
    data() {
        return {
            categoryId: null,
            categoryName: '',
            categoryDescription:'',
        };
    },
    created() {
        this.fetchCategories();
    },
    computed: {
        fetchedCategories() {
            return this.$store.getters['category/categories'];
        },
    },
    methods: {
        addCategory() {
            this.$store.dispatch('category/addCategory',{
                categoryId: this.categoryId,
                categoryName: this.categoryName,
                categoryDescription: this.categoryDescription,
            });
            location.reload();
        },
        fetchCategories(){
            this.$store.dispatch('category/fetchCategories');
        },
        
    }

}
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
body{
    background: rgb(34, 34, 34);
    color: white;
}
form.added {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
}
label {
    margin-left: 2%;
    margin-right: 2%;
}
button {
    padding-right: 1em;
    padding-left: 1em;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    border-radius: 20px;
    border-style: none;
    background: #337ab7;
    color: white;
    transition: all 0.3s ease-in-out;
    margin: 2%;
}
button:hover{
    transform: scale(1.1);
    background: #0086fc;
}
.categories{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 2em;
}
.results{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
button.btn{
    background: rgb(236, 100, 22);
}
button.btn:hover{
    background: rgb(255, 94, 0);
}
button.delete{
    background: rgb(208,14,14);
}
button.delete:hover{
    background: red;
}
.update{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.table th{
    padding-right: 150px;
    padding-left: 150px;
    border: 2px solid;
}
</style>
<style>

footer{
    margin-top: 10%;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-flow: row wrap;
    padding: 50px;
    color: white;
    background-color: rgb(34, 34, 34);
}

.footer > *{
    flex: 1 100%;
}
.footer-left{
    margin-right: 1.25em;
    margin-bottom: 2em;

}
.footer-left img{
    width: 50%;
}

h2{
    font-weight: 600;
    font-size: 17px;
}

.footer ul{
    list-style: none;
    padding-left: 0;
}

.footer li{
    line-height: 2em;
}

.footer a{
    text-decoration: none;
}
.footer-right{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    flex-flow: row wrap;
}

.footer-right > * {
    flex: 1 50%;
    margin-right: 1.25en;
}

.box a {
    color: #999;
}

.footer-bottom{
    text-align: center;
    color: #999;
    padding-top: 50px;
}

.footer-left p{
    padding-right: 20%;
    color: #999;
}

.socials a i{
    color: #e7f2f4;
    padding: 10px 12px;
    font-size: 20px;
}

@media screen and (min-width: 600px) {
    .footer-right > * {
        flex: 1;
    }
    .footer-left{
        flex: 1 0px;
    }
    .footer-right{
        flex: 2 0px;
    }
}
</style>
<style>
    .topnav {
    background-color: rgb(34, 34, 34);
    overflow: hidden;
}
  /* Style the links inside the navigation bar */
  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}
  
  /* Change the color of links on hover */
  .topnav a:hover {
    background-color:goldenrod;
    color: black;
}
  
  /* Add an active class to highlight the current page */
  .topnav a#active {
    background-color: rgb(255, 183, 0);
    color: white;
}
  
  /* Hide the link that should open and close the topnav on small screens */
  .topnav .icon {
    display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
    .topnav a:not(:first-child) {display: none;}
    .topnav a.icon {
      float: right;
      display: block;
    }
  }
  
  /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
  @media screen and (max-width: 600px) {
    .topnav.responsive {position: relative;}
    .topnav.responsive a.icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
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
</style>
