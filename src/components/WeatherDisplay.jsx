import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";
import style from '../styles/WeatherDisplay.module.css'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'

export default function WeatherDisplay() {
  const { weather, loading, error } = useContext(ApiContext)

  if (loading) return <p className={style.loading}>Carregando...</p>
  if (error) return <p className={style.error}>Error: {error}</p>
  if (!weather) return null

  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className={style.weather_display}>
      {/* <p>{weather.weather[0].description}</p> */}
      <p className={style.temp}>{Math.floor(weather.main.temp)}°C</p>
      <img src={iconUrl} alt={weather.weather[0].description} />
      <p className={style.location}>{weather.name}</p>

      <div className={style.weather_data}>

        <div className={style.col}>
          <img src={humidity_icon} />
          <div>
            <p>{weather.main.humidity}%</p>
            <span>Humidade</span>
          </div>
        </div>

        <div className={style.col}>
          <img src={wind_icon} />
          <div>
            <p>{weather.wind.speed}m/s</p>
            <span>Vento</span>
          </div>
        </div>

      </div>

    </div>
  )
}