import { useEffect, useState } from "react"

function Filter({ isDay, countries, setCountries }) {

    const [searching, setSearching] = useState([]);
    const [search, setSearch] = useState([]);

    const url = 'https://restcountries.com/v2/all';

    const fetchCountryData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setSearch(data);
    }

    useEffect(() => {
        fetchCountryData();
    }, [])

    useEffect(() => {
        const resultado = search.filter((country) => { return ((country.translations.es).toLowerCase()).includes(searching) });

        if (searching.length === 0) {
            setCountries(countries)
        } else {
            setCountries(resultado);
        }

    }, [searching])



    return (
        <div className={isDay ? "filter-main-container light-mode-bckg" : "filter-main-container dark-mode-bckg"}>
            <div className="filter-container">
                <div className="filter-search">
                    <input type="text" name="text" onChange={(e) => setSearching(e.target.value.toLowerCase())} placeholder="Search" className={isDay ? "light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt"} />
                </div>
                <div className="filter-region">
                    <select className={isDay ? " light-mode-text light-mode-elmnt" : "dark-mode-text dark-mode-elmnt"}>
                        <option value="" disabled>Filter by Region</option>
                        <option value="">All Regions</option>
                        <option value="">Africa</option>
                        <option value="">America</option>
                        <option value="">Asia</option>
                        <option value="">Europe</option>
                        <option value="">Oceania</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Filter