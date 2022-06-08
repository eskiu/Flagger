import { useEffect, useState } from "react"
import FlagList from "./FlagList"
import Spinner from '../Spinner/Spinner';
import Filter from "../Filter/Filter"

function FlagListContainer({ isDay }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = 'https://restcountries.com/v2/all';

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchCountryData();
    }, [])

    return (
        <>
            <Filter isDay={isDay} countries={countries} setCountries={setCountries} />
            <div className="flag-container">
                {loading ? <Spinner isDay={isDay} /> : <FlagList countries={countries} isDay={isDay} />}
            </div>
        </>
    )
}
export default FlagListContainer