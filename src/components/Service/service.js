import axios from "axios";
const cityURL = 'http://dataservice.accuweather.com/locations/v1/cities/search/'
const weatherURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/'
const locationURL = 'https://geolocation-db.com/json/'
const apiKEY= '3VSsZkYYQ60hxSGOIDSmvxCgdf3uWZTH'


const getCity = async (city)=>{
    const query = `?apikey=${apiKEY}&q=${city}`;
    const res =  await axios.get(cityURL + query);
    const data = res.data;
    return data[0];
}

const getWeather = async (id)=>{
    const query = `${id}?apikey=${apiKEY}`;
    const res = await axios.get(weatherURL + query);
    const data = res.data.DailyForecasts;
    return data[0];
}

const getCurrentLocation = ()=>{
    return axios.get(locationURL)
}

export default {getCity, getWeather, getCurrentLocation}