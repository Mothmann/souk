<template>
    <div>
        <div>
            <ul>
            <product-item v-for="product in fetchedProducts" 
            :key="product.productId" 
            :productId="product.productId"
            :productName="product.productName"
            :productDescription="product.productDescription"
            :productUnitsinStock="product.productUnitsinStock" 
            :productPicturePath="product.productPicturePath" 
            :productPrice="product.productPrice"/>
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
            <input type="text" v-model="UnitsinStock" />
            <label for="productId">PicturePath</label>
            <input type="text" v-model="PicturePath	"/>  
            <label for="productId">Price</label>
            <input type="text" v-model="Price"/>
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
            location.reload();
        },
        fetchProducts() {
            this.$store.dispatch('product/fetchProducts');
        }

    }
}
</script>