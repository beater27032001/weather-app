import { useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext()

// eslint-disable-next-line react/prop-types
export default function ApiProvider({ children }) {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchWeather = async (city) => {
        setLoading(true)
        setError(null)

        try {
            const apiKey = "a7c31f614de08a53794d8b30e33c2ea7"
            if (!apiKey) {
                throw new Error('API key is missing');
            }

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
            // console.log('API Key:', apiKey);
            // console.log('API URL:', apiUrl);

            const response = await fetch(apiUrl);

            // console.log('Response:', response);

            if (!response) {
                throw new Error('No response from server');
            }

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'City not found');
            }

            const data = await response.json();
            // console.log('Weather Data:', data);
            setWeather(data);


        } catch (err) {
            // console.Error('Fetch error:', err);
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <ApiContext.Provider value={{ weather, loading, error, fetchWeather }}>
            {children}
        </ApiContext.Provider>
    )
}