<template>
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
            <ul>
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
        <form @submit.prevent="addProduct">
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