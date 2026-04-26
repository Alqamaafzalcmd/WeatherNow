import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from "react"

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "17f0e18d3f73117ebe2ed4f8b8d6440f";

    let getWeatherInfo = async () => {
        try {
            let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonData = await data.json();
            console.log(jsonData);

            let result = {
                city: city,
                temp: jsonData.main.temp,
                tempMin: jsonData.main.temp_min,
                tempMax: jsonData.main.temp_max,
                humidity: jsonData.main.humidity,
                feelsLike: jsonData.main.feels_like,
                desc: jsonData.weather[0].description,
            }

            // console.log(result);
           
            return result;
            
        }
        catch  (err){
           if(err) throw err;
        }
    }




    let handleChange = (event) => {
        setCity(event.target.value);

    }


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            // console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
            setError(false);
        }
        catch {
            setError(true);
        }

    }


    return (

        <div className="SearchBox">


            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" value={city} required onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit" >
                    Search
                </Button>
                <br />
                {error && <p style={{color:"red"}}>** No such place found in our API try another place!</p> }

            </form>

        </div>
    )
}