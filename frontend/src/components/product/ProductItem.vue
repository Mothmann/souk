<template>
<li>
    <div>
        <label>{{productId}}</label></div>
    <div>
        <label>{{productName}}</label></div>    
    <div>
        <label>{{productDescription}}</label>
    </div>
    <div>
        <label>{{productUnitsinStock}}</label>
    </div>
    <div>
        <img :src="productPicturePath" style="max-width: 25%">
    </div>
    <div>
        <label>{{productPrice}}</label>
    </div>
    <div>
        <label for="">Cateogory: </label>
        <label v-for="productCategory in productCategories"
        :key="productCategory.productId" >{{productCategory.categoryID}}</label>
    </div>
    <form @submit.prevent="updateProduct(productId)">
        <label for="productId">Name</label>
        <input type="text" v-model="Name"/>
        <label for="productId">Description</label>
        <input type="text" v-model="Description"/>
        <label for="productId">UnitsinStock</label>
        <input type="text" v-model="UnitsinStock"/>
        <label for="productId">PicturePath</label>
        <input type="text" v-model="PicturePath	"/>  
        <label for="productId">Price</label>
        <input type="text" v-model="Price"/>
        <label for="productId">Categories</label>
        <input type="text" v-model="Categories"/>
        <button type="submit">Edit Product</button>
    </form> 
        <button @click="deleteProduct(productId)" type="submit">Delete Product</button>
</li>
</template>

<script>
export default {
    props: ['productId', 'productName', 'productDescription', 'productUnitsinStock', 'productPicturePath', 'productPrice', 'productCategories'],
    data() {
        return {
            Id: null,
            Name: '',
            Description: '',
            UnitsinStock: null,
            PicturePath: '',
            Price: null,
            Categories: null,
        };
    },
    methods: {
        updateProduct(ID){
            this.$store.dispatch('product/updateProduct', {
            productId: ID,
            productName: this.Name,
            productDescription: this.Description,
            productUnitsinStock: this.UnitsinStock,
            productPicturePath: this.PicturePath,
            productPrice: this.Price,
            productCategories: this.Categories,
            });  
            //location.reload();
        },
        deleteProduct(ID){
            console.log(ID);
            this.$store.dispatch('product/deleteProduct', {
                productId: ID,
            });
            location.reload();
        },
    }
}
</script>