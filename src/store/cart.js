const cart = {
    state: {
        cart: {
            productId: [],
            quatityById: {}
        }
    },
    mutations: {
        addCart(state, id) {
            if (state.cart.productId.indexOf(id) === -1) {
                state.cart.productId.push(id)
                state.cart.quatityById[id] = 1
            } else {
                // 当改变对象下的某个属性时直接进行改变，vue认为没有修改，因为修改的都是同一个对象，因为指向的地址都是相同的，如果想要修改，就要对对象进行重新赋值
                state.cart.quatityById[id]++
                state.cart.quatityById = {
                    ...state.cart.quatityById
                }
            }
        },
        removeCart(state, id) {
            state.cart.productId = state.cart.productId.filter(e => e !== id)
            state.products.find(e => e.id == id).inventory += state.cart.quatityById[id]
            delete state.cart.quatityById[id]
        },
        cutNum(state, id) {
            if (state.cart.quatityById[id] > 1) {
                state.cart.quatityById[id]--
                state.cart.quatityById = {
                    ...state.cart.quatityById
                }
            } else {
                state.cart.productId = state.cart.productId.filter(e => e !== id)
                delete state.cart.quatityById[id]
            }
        },
    },
    actions: {
        addCart({
            commit,
            rootState
        }, id) {
            // if(rootState.products.products.find(e=>e.id == id).inventory>1)
            // rootState.products.products.find(e=>e.id == id).inventory--  
            // else{
            //     rootState.products.products.find(e=>e.id == id).inventory=0
            //   alert('无货');
            // }
            commit('addCart', id)
        },
        cutNum({
            commit
        }, id) {
            commit('cutNum', id)
        },
        removeCart({
            commit
        }, id) {
            commit('removeCart', id)
        }
    },
    getters: {
        total(state, getters, rootState) {
            return state.cart.productId.reduce(function (total, currentValue) {
                return total + rootState.products.products.find(e => e.id == currentValue).price * state.cart.quatityById[currentValue]
            }, 0)
        }
    }
}
export default cart