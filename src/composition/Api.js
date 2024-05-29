import axios from 'axios'
import { useStore } from "../store/user.js"
const ROOT = 'http://localhost:3000';
const currentTokenId = ''

export default {
    async login(email, password){
        const req = await axios({
            method: 'POST',
            url: ROOT + '/login',
            data: {
                email: email,
                password: password,
            }
        })

        this.checkErrorStatus(req.data)
        return req.data.data.tokenId;
    },

    async getUserInfo(){
        this.getCurrentToken()
        if(this.currentTokenId === '') {
            throw new Error('Token is empty. User not login')
        }
        const req = await axios({
            method: 'GET',
            url: ROOT + '/user',
            headers: {
                authorization: this.currentTokenId
            }
        })
        this.checkErrorStatus(req.data)
        return req.data.data;
    },
    async getPokedex(){
        this.getCurrentToken()
        const req = await axios({
            method: 'GET',
            url: ROOT + '/pokedex',
            headers: {
                authorization: this.currentTokenId
            }
        })

        this.checkErrorStatus(req.data)
        return req.data.data;
    },

    async getWeather(){
        const req = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:62377/api/v1/WeatherStatus?cityName=Barcelona&startDate=2023-10-01&endDate=2023-10-20'
        })
        console.log('Test coso: ' + req.data.cityName);

        return req.data;
    },

    async getCities(){
        const req = await axios({
            method: 'GET',
            url: 'http://127.0.0.1:62377/api/v1/WeatherStatus/cities'
        })

        console.log('Test Cities: ' + req.data[1].name);
        return req.data;
    },

    async addPokemon(pokemon){
        this.getCurrentToken()
        const req = await axios({
            method: 'POST',
            url: ROOT + '/pokemon',
            headers: {
                authorization: this.currentTokenId
            },
            data: {
                "id": pokemon.id,
                "name": pokemon.name,
                "description": pokemon.description,
                "species": pokemon.species,
                "types": pokemon.types,
                "height": pokemon.height,
                "weight": pokemon.weight,
                "sprite": pokemon.sprite,
                "captured": pokemon.captured
            }
        })
        
        this.checkErrorStatus(req.data)
    },

    async findPokemon(pokemonId){
        this.getCurrentToken()
        const req = await axios({
            method: 'GET',
            url: ROOT + '/pokemon',
            headers: {
                authorization: this.currentTokenId
            },
            params:{
                id: pokemonId
            }
        })

        this.checkErrorStatus(req.data)
        return req.data.data;
    },

    getCurrentToken() {
        const userStore = useStore();
        this.currentTokenId =  userStore.getToken;
    },
    checkErrorStatus(data){
        if(data.error){
            throw new Error(data.mensaje)
        }
    }
}