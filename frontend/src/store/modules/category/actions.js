export default {
    async addCategory(context,payload) {
        
        const category = {
            ID: parseInt(payload.categoryId),
            name: payload.categoryName,
            description: payload.categoryDescription,
        };
        console.log(JSON.stringify(category));

        const response = await fetch('http://localhost:3000/category/create',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(category),
        });
        console.log(response);

    },
    async fetchCategories(context) {

        const response = await fetch('http://localhost:3000/category/read');
        const responseData = await response.json();

        const categories = [];

        for(const key in responseData) {
            const category = {
                categoryId: responseData[key].ID,
                categoryName: responseData[key].name,
                categoryDescription: responseData[key].description,
            }
            categories.push(category);
        }
        console.log(categories)
        context.commit('setCategories',categories);

    },

    async updateCategory(context, payload){
        const category = {
            ID: parseInt(payload.categoryId),
            name: payload.categoryName,
            description: payload.categoryDescription,
        };
        console.log(JSON.stringify(category));

        const response = await fetch(`http://localhost:3000/category/update/${category.ID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify(category),
        });
        console.log(response);
    },
    async deleteCategory(context, payload, categoryId){
        const category = {
            ID: parseInt(payload.categoryId),
            name: payload.categoryName,
            description: payload.categoryDescription,
        };
        console.log(JSON.stringify(category));
        const response = await fetch(`http://localhost:3000/category/delete/${category.ID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'DELETE',
        });
        if (!response.ok) {
            const error = new Error ('Could not delete the category.');
            throw error;
        }
        
        const index = context.state.tweets.findIndex(category => category.id === categoryId);
        context.commit('deleteCategory',index);
    },
}
  