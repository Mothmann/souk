import { createStore } from 'vuex';
import categoryModule from './modules/category';

const store = createStore({
    modules: {
        category: categoryModule,
    }
});

export default store;