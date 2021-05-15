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
        <label>{{productPrice}}</label>
    </div>
    <form @submit.prevent="updateProduct(productId)">
                    <label for="productId">Name</label>
                    <input type="text" v-model="Name" />
                    <label for="productId">Description</label>
                    <input type="text" v-model="Description"/>
                    <label for="productId">UnitsinStock</label>
                    <input type="text" v-model="UnitsinStock"/>
                    <label for="productId">PicturePath</label>
                    <input type="text" v-model="PicturePath	"/>  
                    <label for="productId">Price</label>
                    <input type="text" v-model="Price"/>
                    <button type="submit">Edit Product</button>
                </form> 
                <button @click="deleteProduct(productId)" type="submit">Delete Product</button>
</li>
</template>

<script>
export default {
    props: ['productId', 'productName', 'productDescription', 'productUnitsinStock', 'productPicturePath', 'produtctPrice'],
    data() {
        return {
            Id: '',
            Name: '',
            Description: '',
            UnitsinStock: '',
            PicturePath: '',
            Price:'',
        };
    },
    methods: {
        updateProduct(ID){
            console.log(ID);
            this.$store.dispatch('product/updateProduct', {
                            productId: null,
            productName: ID,
            productDescription: this.Name,
            productUnitsinStock: this.Description,
            productPicturePath: this.PicturePath,
            productPrice: this.Price,
            });  
            location.reload();
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