import { Card } from "../components/Card/Card"
import React, {useState, useEffect} from 'react';
import Service from '../components/Service/service'
export const HomePage = () => {
    const [city,setCity] = useState({});
    const [weather,setWeather] = useState();
    useEffect(() => {
        const fetchData = async()=>{
          const res = await Service.getCurrentLocation();
          const data = res.data;
          const resCity = await Service.getCity(data.city);
          setCity(resCity);
          const resWeather = await Service.getWeather(resCity.Key);
          setWeather(resWeather);
        }
        fetchData()
     },[])
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Card city={city} weather={weather}></Card>
        </div>
    )
}
