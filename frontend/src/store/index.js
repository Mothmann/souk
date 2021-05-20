import { createStore } from 'vuex';
import categoryModule from './modules/category/index';
import userModule from './modules/user/index';
import productModule from './modules/product/index';

const store = createStore({
    modules: {
        category: categoryModule,
        user: userModule,
        product: productModule,
    }
});

export default store;