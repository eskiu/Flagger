import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CountryDetail from "./CountryDetail"
import Spinner from "../Spinner/Spinner"

function CountryDetailContainer({ isDay }) {

    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)

    const { name } = useParams()

    useEffect(() => {
        const pedido = fetch(`https://restcountries.com/v2/name/${name}`)

        pedido
            .then((res) => { return res.json() })
            .then((resolve) => {
                resolve.map((response) => {
                    setCountry(response)
                })
                setLoading(false)
            })
    }, [name])
    return (
        <div className={isDay ? "country-main-container light-mode-text" : "country-main-container dark-mode-text"}>
            {loading ? <Spinner isDay={isDay} /> : <CountryDetail country={country} isDay={isDay} />}
        </div>
    )
}
export default CountryDetailContainer