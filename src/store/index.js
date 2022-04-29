import {Store,commit} from 'vuex'

const state = {
    num:10
}

const actions = {
    addNum(a,b){
        // if (a.state.num % 2 === 0 ) {
            a.commit('addNumCommit',b)
        // }else{
            // return
        // }
    }
}

const mutations = {
    addNumCommit(state,newValue){
        state.num = newValue
    }
}

export default new Store({
    state,
    mutations,
    actions
})
