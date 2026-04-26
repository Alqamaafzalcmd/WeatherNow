import "./WeatherApp.css"
import SearchBox from "./searchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"


export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        desc: "thunderstorm",
        feelsLike: 294.27,
        humidity: 94,
        temp: 294.2,
        tempMin: 294.5,
        tempMax: 294.1
    });


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return (
        <div className="weatherApp">
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <br /><br />
            <InfoBox info={weatherInfo} />
        </div>
    )

}