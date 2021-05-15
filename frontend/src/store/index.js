import { createStore } from 'vuex';
import categoryModule from './modules/category';
import userModule from './modules/user';
import productModule from './modules/product';

const store = createStore({
    modules: {
        category: categoryModule,
        user: userModule,
        product: productModule,
    }
});

export default store;