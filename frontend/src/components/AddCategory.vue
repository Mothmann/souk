<template>
  <div>
      <div>
          <ul>
            <li v-for="category in fetchedCategories"
              :key="category.categoryId"
              >
              {{category.categoryId}}
              {{category.categoryDescription}}
              {{category.categoryName}}
            </li>
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
export default {
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
            this.fetchCategories();
        },
        fetchCategories(){
            this.$store.dispatch('category/fetchCategories');
        }
    }

}
</script>

<style scoped>

</style>