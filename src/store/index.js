import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
import products from './products'
Vue.use(Vuex)
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        products,
        cart
    }
})
export default store