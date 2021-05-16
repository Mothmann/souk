<template>
    <div class="items">
        <img :src="productPicturePath">
        <h4>{{productName}}</h4> 
        <p>{{productPrice}} Dhs</p>
        <p><button class="add">Add To Cart</button></p>
    </div>     

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
            categories: [],
        };
    },
}
</script>
<style scoped>
.items img{
    width: 20%;
    margin-bottom :3%;
}
.items {
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;
}
.items h4, p{
    font-size: 2em;
}
.items button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background: rgb(255, 183, 0);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: 0.5s;
}
.items button:hover {
    transform: scale(1.1);
    background: rgb(255, 183, 0);
}
</style>
