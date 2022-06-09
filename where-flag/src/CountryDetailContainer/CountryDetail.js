import { Link } from "react-router-dom"

function CountryDetail({ country, isDay }) {

    return (
        <div className="country-main">
            <div className="button">
                <button className={isDay ? "light-mode-elmnt light-mode-text" : "dark-mode-elmnt dark-mode-text"}><Link to="/" className={isDay ? "light-mode-text" : "dark-mode-text"}>Back</Link></button>
            </div>
            <div className="country">
                <div className="country-img">
                    <img src={country.flags.svg} alt={country.name} />
                </div>
                <div className="country-detail">
                    <div className="country-detail-title">
                        <h2>{country.name}</h2>
                    </div>
                    <div className="country-detail-body">
                        <p><strong>Native Name:</strong> {country.nativeName}</p>
                        <p><strong>Population:</strong> {country.population}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Sub Region:</strong> {country.subregion}</p>
                        <p><strong>Capital:</strong> {country.capital}</p>
                        <p><strong>Top Level Domain:</strong> {country.topLevelDomain}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountryDetail