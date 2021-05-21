export default {
    async addProduct(context, payload) {
        console.log(payload.productCategories);
        var results = payload.productCategories.split(',');
        var categoriesArray = results.map(result => {
            return result;
        });
        
        const product = {
            ID: parseInt(payload.productId),
            name: payload.productName,
            description: payload.productDescription,
            UnitsinStock: parseInt(payload.productUnitsinStock),
            PicturePath: payload.productPicturePath,
            price: parseInt(payload.productPrice),
            categories : categoriesArray
        };
        const response = await fetch('http://localhost:3000/product/create',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'POST',
            body: JSON.stringify(product)
                
        });
        console.log(response);
    },
    async fetchProducts(context) {

        const response = await fetch('http://localhost:3000/product/read');
        const responseData = await response.json();

        const products = [];
        for(const key in responseData) {
            const product = {
                productId: responseData[key].ID,
                productName: responseData[key].name,
                productDescription: responseData[key].description,
                productUnitsinstock: responseData[key].Unitsinstock,
                productPicturePath: responseData[key].PicturePath,
                productPrice: responseData[key].price,
                productCategories: responseData[key].categories,
            }
            console.log(product)
            products.push(product);
        }
        context.commit('setProducts',products);
    },
    async updateProduct(context, payload) {
        console.log(payload.productCategories);
        var results = payload.productCategories.split(',');
        var categoriesArray = results.map(result => {
            return result;
        });
        
        const product = {
            ID: parseInt(payload.productId),
            name: payload.productName,
            description: payload.productDescription,
            UnitsinStock: parseInt(payload.productUnitsinStock),
            PicturePath: payload.productPicturePath,
            price: parseInt(payload.productPrice),
            categories : categoriesArray
        };
        const response = await fetch(`http://localhost:3000/product/update/${product.ID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify(product),
        });
        console.log(response);
    },
    async deleteProduct(context, payload, productId){
        const product = {
            ID: parseInt(payload.productId),
            name: payload.productName,
            description: payload.productDescription,
            Unitsinstock: parseInt(payload.productUnitsinstock),
            PicturePath: payload.productPicturePath,
            price: parseInt(payload.productPrice),
            categories: payload.productCategories,
        };
        console.log(JSON.stringify(product));
        const response = await fetch(`http://localhost:3000/product/delete/${product.ID}`,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: 'DELETE',
        });
        if (!response.ok) {
            const error = new Error ('Could not delete the product.');
            throw error;
        }
        
        const index = context.state.product.findIndex(product => product.id === productId);
        context.commit('deleteProduct',index);
    }

}