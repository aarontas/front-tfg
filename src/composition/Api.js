import axios from 'axios'
const ROOT = 'http://127.0.0.1:58722';

export default {

    async getWeather(name, start, end){
        const req = await axios({
            method: 'GET',
            url: ROOT +'/api/v1/WeatherStatus?cityName=' + name + '&startDate=' + start + '&endDate=' + end
        })

        return req.data;
    },

    async getCities(){
        const req = await axios({
            method: 'GET',
            url: ROOT +'/api/v1/WeatherStatus/cities'
        })

        return req.data;
    }
}