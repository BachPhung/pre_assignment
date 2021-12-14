import './Card.css'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
export const Card = (props) => {
    if(props.weather===undefined) {return(<div></div>)}
    console.log(props)
    return (
        <div className="card-container">
            <div className='card-heading'>
                <span className='card-city'>{props.city.EnglishName}</span>
                <span><Avatar sx={{ bgcolor: deepOrange[500], width:40, height:40, fontSize:20 } }>{`${props.city.Country.ID}`}</Avatar></span>
            </div>
            <div className='card-content'>
                <div className='card-temp'>
                    <p>{Math.round((props.weather.Temperature.Maximum.Value-32)*5/9)} &#8451;</p>
                </div>
                <div className='card-img'>
                    <img alt='weather-icon' src={`https://www.accuweather.com/images/weathericons/${props.weather.Day.Icon}.svg`}></img>
                </div>
                <div className='card-decs'>
                    <p>{props.weather.Day.IconPhrase}</p>
                </div>
            </div>
            
        </div>
    )
}
