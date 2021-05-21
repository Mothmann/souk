<template>
  <li>
        <div class="results">
            <table>
                <div class="table">
                    <th><label>{{categoryId}}</label></th>
                    <th><label>{{categoryName}}</label></th>
                    <th><label>{{categoryDescription}}</label></th>
                </div>
            </table>
        </div>
        <form class="update" @submit.prevent="updateCategory(categoryId)">
            <label for="categoryId">Name</label>
            <input type="text" v-model="Name" />
            <label for="categoryId">Description</label>
            <input type="text" v-model="Description" />
            <button class="btn" type="submit">Edit category</button>
            <button class="delete" @click="deleteCategory(categoryId)" type="submit">Delete Category</button>
        </form> 
        
    </li>
</template>

<script>
export default {
    props: ['categoryId','categoryDescription','categoryName'],
    data() {
        return {
            Id: '',
            Name: '',
            Description:'',
        };
    },
    methods: {
        updateCategory(ID){
            console.log(ID);
            this.$store.dispatch('category/updateCategory', {
                categoryId: ID,
                categoryName: this.Name,
                categoryDescription: this.Description,
            });  
            location.reload();
        },
        deleteCategory(ID){
            console.log(ID);
            this.$store.dispatch('category/deleteCategory', {
                categoryId: ID,
            });
            setTimeout(function(){
                window.location.reload(1);
                }, 2000);
        },
       
}}
</script>
