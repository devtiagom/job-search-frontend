import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isMenuVisible: false,
        user: null
    },
    mutations: {
        toggleMenu(state, isVisible) {
            if (!state.user) {
                state.isMenuVisible = false;
                return;
            }

            if (isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible;
            } else {
                state.isMenuVisible = isVisible;
            }
        },
        setUser(state, user) {            
            if (user) {
                state.user = user;
                state.isMenuVisible = true;
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`;
            } else {
                state.user = null;
                state.isMenuVisible = false;
                delete axios.defaults.headers.common['Authorization'];
            }
        }
    }
});