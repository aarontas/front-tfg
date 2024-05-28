import {defineStore} from 'pinia'
import ApiPokemon from "../composition/Api.js"

export const useStore = defineStore('User', {
    state: () => {
        return {
            logged: false,
            name: '',
            tokenId: '',
            city: '',
            country: '',
            email: '',
            phone: '',
            address: '',
            avatar: '',
        }
    },
    getters: {
        getName: (state) => state.name,
        getToken: (state) => state.tokenId,
        getCity: (state) => state.city,
        getCountry: (state) => state.country,
        getEmail: (state) => state.email,
        getPhone: (state) => state.phone,
        getAddress: (state) => state.address,
        getAvatar: (state) => state.avatar,
        isLogged: (state) => state.logged
    },
    actions: {
        async setUserData(email, password){
            this.tokenId  = await ApiPokemon.login(email, password)
            const result = await ApiPokemon.getUserInfo();

            this.logged = true
            this.mapUserInformation(result)
            console.log('User login: ' + this.name, this.tokenId, this.logged);
        },
        mapUserInformation(userInfo){
            this.name = userInfo.name
            this.tokenId = userInfo.tokenId
            this.city = userInfo.city
            this.country = userInfo.country
            this.email = userInfo.email
            this.phone = userInfo.phone
            this.address = userInfo.address
            this.avatar = userInfo.avatar
        }
    }
})