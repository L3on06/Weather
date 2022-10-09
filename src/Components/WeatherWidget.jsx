import React from "react";
import '../style/App.css';

function WeatherWidget(props) {
    const handleIcon = () => {
        var url = ''
        switch (props.data.current.condition.text) {
            case "Clear":
            case "Sunny":
                url = './images/sun.png'
                break;
            case "Partly cloudy":
                url = './images/bigSun_smallCloud.png'
                break;
            case "Cloudy":
                url = './images/Cloud.png'
                break;
            case "Overcast":
                url = './images/bigCloud_smallSun.png'
                break;
            case "Fog":
            case "Mist":
            case "Freezing fog":
                url = './images/fog.png'
                break;
            case "Patchy sleet possible":
            case "Freezing drizzle":
            case "Heavy freezing drizzle":
            case "Moderate rain at times":
            case "Moderate rain":
            case "Heavy rain at times":
            case 'Heavy rain':
            case 'Moderate or heavy freezing rain':
            case 'Moderate or heavy sleet':
            case 'Moderate or heavy rain shower':
            case 'Torrential rain shower':
            case 'Moderate or heavy sleet showers':
                url = './images/cloud_rain.png'
                break;
            case "Patchy rain possible":
            case "Patchy light rain":
            case "Patchy light drizzle":
            case "Light rain":
            case 'Light sleet':
            case "Light drizzle":
            case 'Light rain shower':
            case 'Light sleet showers':
                url = './images/sun_cloud_rain.png'
                break;
            case "Patchy snow possible":
            case 'Light freezing rain':
            case 'Patchy light snow':
            case "Patchy freezing drizzle possible":
            case "Blowing snow":
            case "Light snow":
            case 'Patchy moderate snow':
            case 'Moderate snow':
            case 'Patchy heavy snow':
            case 'Heavy snow':
            case 'Ice pellets':
            case 'Light snow showers':
            case 'Moderate or heavy snow showers':
            case 'Light showers of ice pellets':
            case 'Moderate or heavy showers of ice pellets':
            case 'Patchy light snow with thunder':
            case 'Moderate or heavy snow with thunder':
                url = './images/cloud_snow.png'
                break;
            case "Thundery outbreaks possible":
                url = './images/cloud_lightning.png'
                break;
            case "Patchy light rain with thunder":
            case "Moderate or heavy rain with thunder":
                url = './images/cloud_lightning_rain.png'
                break;
            default:
        }
        return url;
    }


    return (
        <div className="widget" style={{ boxShadow: props.bg ? '-22px -22px 40px #63a9e6, 22px 22px 40px #79cfff' : "-31px -31px 62px #1b1b1b, 31px 31px 62px #272727" }}>
            <h1 className="widget-location">{props.data.location.country}/{props.data.location.name}</h1>
            <img className="widget-icon" src={handleIcon()} alt={props.data.current.condition.text}></img>
            <h1 className="widget-c">
                {props.data.current.temp_c}<sup>&bull;</sup>C
            </h1>
            <p className="widget-text">
                {props.data.current.condition.text}
            </p>
            <p className="widget-time">
                {props.data.location.localtime}
            </p>
        </div>
    )
}

export default WeatherWidget;
