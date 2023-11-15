import { defineStore } from 'pinia';
import { setToken, getToken, removeToken } from '../utils/auth'
export const useUserStore = defineStore('user', {
    state: () => ({
        _token: getToken() || "",
        _name: localStorage.getItem("username") || "",
        _introduction: localStorage.getItem("introduction") || "",
        _avatar: localStorage.getItem("avatar") || "",
        _roles: localStorage.getItem("roles") || []
    }),
    getters: {
        token: state => state._token,
        name: state => state._name,
        introduction: state => state._introduction,
        avatar: state => state._avatar,
        roles: state => state._roles,
    },
    actions: {
        // user login
        login(userInfo) {
            const { username, password } = userInfo
            this._token = username
            this._roles = ['/home', '/']
            localStorage.setItem("roles", this._roles)
            setToken(this._token)
        },

        // get user info
        getInfo() {
            return { roles: this._roles, name: this._name, avatar: this._avatar, introduction: this._introduction }
        },

        // user logout
        logout() {
            removeToken()
            localStorage.removeItem("roles")
        },

        // remove token
        resetToken() {

        },


    }
});
