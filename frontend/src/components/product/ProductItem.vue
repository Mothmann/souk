<template>
<li>
    <div class="test">
        <label class="test">{{productId}}</label></div>
    <div>
        <label class="test">{{productName}}</label></div>    
    <div class="test">
        <label class="test">{{productDescription}}</label>
    </div>
    <div class="test">
        <label class="test">{{productUnitsinstock}}</label>
    </div>
    <div class="test">
        <img :src="productPicturePath" style="max-width: 25%">
    </div>
    <div class="test">
        <label class="test">{{productPrice}}</label>
    </div>
    <div class="test">
        <label for="">Cateogory: </label>
        <label v-for="productCategory in productCategories"
        :key="productCategory.productId" >{{productCategory.categoryID}}</label>
    </div>
     <form class="form" @submit.prevent="updateProduct(productId)">
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
        <button type="submit">Edit product</button>
    </form> 
    <button @click="deleteProduct(productId)" type="submit">Delete Product</button>
</li>
</template>

<script>
export default {
    props: ['productId', 'productName', 'productDescription', 'productUnitsinstock', 'productPicturePath', 'productPrice', 'productCategories'],
    data() {
        return {
            Id: '',
            Name: '',
            Description: '',
            UnitsinStock: '',
            PicturePath: '',
            Price:'',
            Categories: [],
        };
    },
    methods: {
        updateProduct(ID){
            console.log(ID);
            this.$store.dispatch('product/updateProduct', {
            productId: ID,
            productName: this.Name,
            productDescription: this.Description,
            productUnitsinStock: this.UnitsinStock,
            productPicturePath: this.PicturePath,
            productPrice: this.Price,
            productCategories: this.Categories,
            });  
            location.reload();
        },
        deleteProduct(ID){
            console.log(ID);
            this.$store.dispatch('product/deleteProduct', {
                productId: ID,
            });
            setTimeout(function(){
                window.location.reload(1);
                }, 2000);
        },
    }
}
</script>
<style>

.test{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: center;
    margin-top: 1%;
    margin-bottom: 1%;
    list-style: none;
}
label .test{  
    border: 2px solid white;
}

</style>
<style scoped>
li{
    width: 80%;
}
input{
    margin-bottom: 2%;
    width: 75%;
}
label{
    margin-bottom: 2%;
    font-size: 1.3rem;
}
</style>
<style scoped>
form.form {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
}
</style>