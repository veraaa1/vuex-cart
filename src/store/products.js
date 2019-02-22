import axios from 'axios'
const products = {
    state:{
        products:[],
    },
    mutations:{
        getPros(state,products){
            state.products = products
        },
    },
    actions:{
        getPros({commit}){
            axios.get(`http://localhost:3008/products`).then(res=>{
                commit('getPros',res.data)
            })
        },
    },
}
export default products