import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import "./InfoBox.css"


export default function InfoBox({ info }) {
    // let info = {
    //     city: "Agra",
    //     desc: "thunderstorm",
    //     feelsLike: 294.27,
    //     humidity: 94,
    //     temp: 294.2,
    //     tempMin: 294.5,
    //     tempMax: 294.1
    // }

    // const initial_img = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1697518725445-037f24d787b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (

        <div className="infoBox">
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            info.humidity > 80
                                ? RAIN_URL :
                                info.temp > 15 ? HOT_URL : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {(info.temp - 273.15).toFixed(3)}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min temperature = {(info.tempMin - 273.15).toFixed(3)}&deg;C</p>
                            <p>Max temperature = {(info.tempMax - 273.15).toFixed(3)}&deg;C</p>
                            <p>The weather can be described as <i> <b>{info.desc}</b>
                            </i> and feels like {info.feelsLike} </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}