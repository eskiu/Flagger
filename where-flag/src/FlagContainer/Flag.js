function Flag({ country, isDay }) {

    return (
        <div className={isDay ? "flag light-mode-elmnt" : "flag dark-mode-elmnt"}>
            <img src={country.flags.png} alt={country.name} />
            <div className="bodycard">
                <h3>{country.translations.es}</h3>
                <div className="textBodyCard">
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>
        </div>
    )
}

export default Flag