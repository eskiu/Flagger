import { Link } from "react-router-dom"

function Country({ country, isDay }) {


    return (
        <div className={isDay ? "flag light-mode-elmnt" : "flag dark-mode-elmnt"}>
            <Link to={`/${country.name}`}>
                <img src={country.flags.png} alt={country.name} />
                <div className={isDay ? "bodycard light-mode-text" : "bodycard dark-mode-text"}>
                    <h3>{country.translations.es}</h3>
                    <div className="textBodyCard">
                        <p>Population: {country.population}</p>
                        <p>Region: {country.region}</p>
                        <p>Capital: {country.capital}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Country