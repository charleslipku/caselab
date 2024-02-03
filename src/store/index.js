import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

const actions = {
    login(context, user){
        axios.post('/user/login/', qs.stringify(user)).then(
            response=>{
                const {meta, data} = response.data
                if(meta.code != 201) return;
                window.localStorage.setItem('login_user', data.user.username)
                window.localStorage.setItem('token', data.token)
                context.commit('LOGIN', user.username)
            },
            error=>{
                console.log(error)
            }
        )
    },

    register(context, user){
        axios.post('/user/user/', qs.stringify(user)).then(
            response=>{
                const {meta, data} = response.data
                if(meta.code != 201) return;
                window.localStorage.setItem('login_user', data.user.username)
                window.localStorage.setItem('token', data.token)
                context.commit('REGISTER', user.username)
            },
            error=>{
                console.log(error)
            }
        )
    },

    checkLogin(context){
        context.commit('CHECK_LOGIN');
    }
}

const mutations = {
    LOGIN(state, value){
        state.loginUser = value
        console.log(state.loginUser)
    },
    REGISTER(state, value){
        state.loginUser = value
    },
    CHECK_LOGIN(state){
        const login_user =window.localStorage.getItem('login_user');
        if(login_user && state.loginUser == null){
            state.loginUser = login_user
        }
    },
    LOGOUT(state){
        window.localStorage.removeItem('login_user');
        window.localStorage.removeItem('token')
        state.loginUser = null
    }
}

const state = {
    loginUser: null,
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
})