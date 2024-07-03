import WeatherForm from './components/WeatherForm'
import WeatherDisplay from './components/WeatherDisplay'
import style from './styles/App.module.css'

function App() {

  return (
    <div className={style.container}>
      <div className={style.weather_box}>
        <h1>Weather App</h1>
        <WeatherForm />
        <WeatherDisplay />
      </div>
    </div>
  )
}

export default App
