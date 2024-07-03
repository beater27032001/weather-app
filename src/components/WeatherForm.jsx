import { useContext } from "react";
import { useState } from "react";
import { ApiContext } from "../context/ApiContext";
import style from '../styles/WeatherForm.module.css'

import search_icon from "../assets/search.png"


export default function WeatherForm() {
  const [city, setCity] = useState('')
  const { fetchWeather } = useContext(ApiContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      fetchWeather(city)
    }
    setCity('')
  }

  return (
    <form className={style.WeatherForm} onSubmit={handleSubmit}>
      <div className={style.search_bar}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Nome da cidade"
        />
        <img src={search_icon} className={style.search_button} onClick={handleSubmit} alt="" />
      </div>
    </form>
  )
}