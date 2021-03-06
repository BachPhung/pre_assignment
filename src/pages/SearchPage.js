import React, {useState, useEffect} from 'react';
import Service from '../components/Service/service'
import { Card } from '../components/Card/Card';
import './SearchPage.css'
export const SearchPage = () => {
    const [text,setText] = useState('')
    const [city,setCity] = useState({});
    const [weather,setWeather] = useState();
    const [valid,setValid] = useState(false);
    const [firstRender,setFirstRender] = useState(true);
    useEffect(()=>{
     if(valid===false && firstRender===false){
         document.querySelector('.message').innerHTML=`<p>City Not Found</p>`
     }
     else{
        document.querySelector('.message').innerHTML=''
     }
    })
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setFirstRender(false);
        const resCity = await Service.getCity(text);
        if(resCity===undefined){
            setValid(false)
            return
        }
        else{
            setValid(true)
        }
        setCity(resCity);
        const resWeather = await Service.getWeather(resCity.Key);
        setWeather(resWeather);
    }
    const handleTextChange = (e)=>{   
        setText(e.target.value)
    }
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <div>
                <input  value={text} onChange={handleTextChange} placeholder='Enter the name of a city'></input>
                <button className='form-btn' type='submit'>Show weather info</button>
                <div className='message'></div>            
                </div>
            </form>
            <div style={{display:"flex", justifyContent:"center"}}>
            <Card city={city} weather={weather}></Card>
        </div>
        </div>
    )
}
