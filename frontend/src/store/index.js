import { createStore } from 'vuex';
import categoryModule from './modules/category';
import userModule from './modules/user';

const store = createStore({
    modules: {
        category: categoryModule,
        user: userModule,
    }
});

export default store;