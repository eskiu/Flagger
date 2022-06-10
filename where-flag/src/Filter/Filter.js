import { useEffect, useState } from "react"

function Filter({ isDay, setCountries }) {

    const [searching, setSearching] = useState([]);
    const [search, setSearch] = useState([]);
    const [continent, setContinent] = useState([]);

    const fetchCountryData = async () => {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setSearch(data);
    }

    useEffect(() => {
        fetchCountryData();
    }, [])

    useEffect(() => {
        setCountries(search.filter((country) => { return ((country.translations.es).toLowerCase()).includes(searching) }));

    }, [searching])

    useEffect(() => {
        if (continent !== "All") {
            setCountries(search.filter((country) => { return country.region === continent }));
        } else {
            setCountries(search);
        }
    }, [continent])


    return (
        <div className={isDay ? "filter-main-container light-mode-bckg" : "filter-main-container dark-mode-bckg"}>
            <div className="filter-container">
                <div className="filter-search">
                    <input type="text" name="text" onChange={(e) => setSearching(e.target.value.toLowerCase())} placeholder="Search" className={isDay ? "light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt"} />
                </div>
                <div className="filter-region">
                    <select onChange={(e) => setContinent(e.target.value)} className={isDay ? " light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt"}>
                        <option value="" disabled>Filter by Region</option>
                        <option value="All">All Regions</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter