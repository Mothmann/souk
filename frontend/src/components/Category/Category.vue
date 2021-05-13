<template>
  <div>
      <div>
          <ul>
            <category-item v-for="category in fetchedCategories" 
            :key="category.categoryId" 
            :categoryId="category.categoryId"
            :categoryName="category.categoryName"
            :categoryDescription="category.categoryDescription" />
          </ul>
      </div>
      <form @submit.prevent="addCategory">
        <label for="categoryId">categoryId</label>
        <input type="number" v-model="categoryId" />
        <label for="categoryId">Name</label>
        <input type="text" v-model="categoryName" />
        <label for="categoryId">Description</label>
        <input type="text" v-model="categoryDescription" />
        <button type="submit">Add category</button>
      </form>     
    
  </div>
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

<style scoped>

</style>