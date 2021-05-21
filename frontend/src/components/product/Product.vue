<template>
<body>
     <div>
        <div class="topnav" id="myTopnav">
            <router-link class="link" to="/" tag="button">Home</router-link>
            <router-link class="link" to="/register" tag="button">Register</router-link>
            <router-link class="link" to="/login" tag="button">Login</router-link>
            <router-link class="link"  to="/category" tag="button">Categories</router-link>
            <router-link id="active" class="link"  to="/product" tag="button">Products</router-link>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
        <div>
            <ul class="test">
            <product-item v-for="product in fetchedProducts" 
            :key="product.productId" 
            :productId="product.productId"
            :productName="product.productName"
            :productDescription="product.productDescription"
            :productUnitsinstock="product.productUnitsinstock" 
            :productPicturePath="product.productPicturePath" 
            :productPrice="product.productPrice"
            :productCategories="product.productCategories"/>
          </ul>
        </div>
        <form class="form" @submit.prevent="addProduct">
            <label for="productId">productId</label>
            <input type="number" v-model="productId"/>
            <label for="productId">Name</label>
            <input type="text" v-model="productName"/>
            <label for="productId">Description</label>
            <input type="text" v-model="productDescription"/>
            <label for="productId">UnitsinStock</label>
            <input type="number" v-model="UnitsinStock" />
            <label for="productId">PicturePath</label>
            <input type="text" v-model="PicturePath	"/>  
            <label for="productId">Price</label>
            <input type="number" v-model="Price"/>
            <label for="productId">Categories</label>
            <input type="number" v-model="Categories"/>
            <button type="submit">Add product</button>
        </form>   
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
import productItem from '../product/ProductItem';
export default{
    components: {
        productItem,
    },
    data(){
        return {
            productId: null,
            productName: '',
            productDescription: '',
            productUnitsinStock: null,
            productPicturePath: '',
            productPrice: null,
            productCategories: [],
        };
    },
    created() {
        this.fetchProducts();
    },
    computed: {
        fetchedProducts() {
            return this.$store.getters['product/products'];
        },
    },
    methods: {
        addProduct() {
             this.$store.dispatch('product/addProduct',{
                productId: this.productId,
                productName: this.productName,
                productDescription: this.productDescription,
                productUnitsinStock: this.productUnitsinStock,
                productPicturePath: this.productPicturePath,
                productPrice: this.price,
            });
            //location.reload();
        },
        fetchProducts() {
            this.$store.dispatch('product/fetchProducts');
        }

    }
}
</script>

<style scoped>
input[type="text"], input[type="number"] {
    width: 60%;
    margin-bottom: 2%;
}
label{
    margin-bottom: 2%;
    font-size: 1.3rem;
}
form.form {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
}
</style>

