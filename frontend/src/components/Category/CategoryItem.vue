<template>
  <li>
                <div>
                    <label>{{categoryId}}</label>
                    </div>
                    <div>
                    <label>{{categoryName}}</label>
                    </div>
                    <div>
                    <label>{{categoryDescription}}</label>
                    </div>
                
                <form @submit.prevent="updateCategory(categoryId)">
                    <label for="categoryId">Name</label>
                    <input type="text" v-model="Name" />
                    <label for="categoryId">Description</label>
                    <input type="text" v-model="Description" />
                    <button type="submit">Edit category</button>
                </form> 
                <button @click="deleteCategory(categoryId)" type="submit">Delete Category</button>
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
            location.reload();
        },
       
}}
</script>