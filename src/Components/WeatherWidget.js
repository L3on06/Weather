import React from "react";
import '../App.css';

function WeatherWidget({ data }) {
    const handleIcon = () => {
        var url = ''
        switch (data.current.condition.text) {
            case "Partly cloudy":
                url = './images/day.png'
                break;
            default:
                url = './images/day.png'
                break;
        }
                return url;
    }
    console.log(data.current.condition.text)
    console.log(data)

    return (
        <div className="widget">
            <h1 className="widget-location">{data.location.country}/{data.location.name}</h1>
            <img className="widget-icon" src={handleIcon()} alt={data.current.condition.text}></img>
            <h1 className="widget-c">
                {data.current.temp_c}<sup>&bull;</sup>C
            </h1>
            <p className="widget-text">
                {data.current.condition.text}
            </p>
            <p className="widget-time">
                {data.location.localtime}
            </p>
        </div>
    )
}

export default WeatherWidget;
