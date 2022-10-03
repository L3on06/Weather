import React from "react";
import '../App.css';

function WeatherWidget( props ){
    const handleIcon = () => {
        var url = ''
        switch (props.data.current.condition.text) {
            case "Clear" && "Sunny":
                url = './images/sun.png'
                break;
            case "Partly cloudy":
                url = './images/bigSun_smallCloud.png'
                break;
            case "Cloudy":
                url = './images/Cloudy.png'
                break;
            case "Overcast":
                url = './images/bigCloud_smallSun.png'
                break;
            case "Fog" || "Mist" || "Freezing fog":
                url = './images/fog.png'
                break;
            case "Patchy rain possible" && "Patchy sleet possible":
                url = './images/cloud_rain.png'
                break;
            case "Patchy snow possible" && "Patchy freezing drizzle possible" && "Blowing snow" && "Light snow" && 'Patchy moderate snow' && 'Moderate snow' && 'Patchy heavy snow' && 'Heavy snow' && 'Ice pellets' && 'Light snow showers' && 'Moderate or heavy snow showers' && 'Light showers of ice pellets' && 'Moderate or heavy showers of ice pellets' && 'Patchy light snow with thunder' && 'Moderate or heavy snow with thunder':
                url = './images/cloud_snow.png'
                break;
            case "Thundery outbreaks possible":
                url = './images/sun.png'
                break;
            case "Patchy light drizzle" && "Light drizzle" && "Freezing drizzle" && "Heavy freezing drizzle" && "Patchy light rain" && "Light rain" && "Moderate rain at times" && "Moderate rain" && "Heavy rain at times" && 'Heavy rain' && 'Light freezing rain' && 'Moderate or heavy freezing rain' && 'Light sleet' && 'Moderate or heavy sleet' && 'Patchy light snow' && 'Light rain shower' && 'Moderate or heavy rain shower' && 'Torrential rain shower' && 'Light sleet showers' && 'Moderate or heavy sleet showers':
                url = './images/sun.png'
                break;
            case "Patchy light rain with thunder" && "Moderate or heavy rain with thunder":
                url = './images/Cloudy.png'
                break;
            default:
        }
        return url;
    }
    const leon = props.bg;
    console.log(leon)

    return (
        <div className="widget" style={{boxShadow: leon ? '-22px -22px 40px #63a9e6, 22px 22px 40px #79cfff': "-31px -31px 62px #1b1b1b, 31px 31px 62px #272727"}}>
            <h1 className="widget-location">{props.data.location.country}/{props.data.location.name}</h1>
            <img className="widget-icon" src={handleIcon()} alt={props.data.current.condition.text}></img>
            <h1 className="widget-c">
                {props.data.current.temp_c}<sup>&bull;</sup>C
            </h1>
            <p className="widget-text">
                {/* <img src={data.current.condition.icon} alt='log2'></img> */}
                {props.data.current.condition.text}
            </p>
            <p className="widget-time">
                {props.data.location.localtime}
            </p>
        </div>
    )
}

export default WeatherWidget;
