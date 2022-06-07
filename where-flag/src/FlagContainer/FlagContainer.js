import { useEffect, useState } from "react"

function FlagContainer() {
    const [countries, setCountries] = useState([]);

    const url = 'https://restcountries.com/v2/lang/es';

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
    }

    useEffect(() => {
        fetchCountryData();
    }, [])

    return (
        <div className="flag-container">

        </div>
    )
}
export default FlagContainer