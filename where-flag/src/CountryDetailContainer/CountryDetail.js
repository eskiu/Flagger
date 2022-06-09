import { Link } from "react-router-dom"
import { motion } from "framer-motion"


function CountryDetail({ country, isDay }) {

    return (
        <div className="country-main">
            <div className="button">
                <motion.button
                    className={isDay ? "light-mode-elmnt light-mode-text" : "dark-mode-elmnt dark-mode-text"}
                    whileHover={{ scale: 1.1 }}>
                    <Link to="/" className={isDay ? "light-mode-text" : "dark-mode-text"}>Back</Link>
                </motion.button>
            </div>
            <div className="country">
                <div className="country-img">
                    <motion.img
                        src={country.flags.svg}
                        alt={country.name}
                        whileHover={{ scale: 1 }}
                        whileTap={{ scale: 0.9 }} />
                </div>
                <div className="country-detail">
                    <div className="country-detail-title">
                        <h1>{country.name}</h1>
                    </div>
                    <div className="country-detail-body">
                        <p><strong>Native Name:</strong> &nbsp; {country.nativeName}</p>
                        <p><strong>Population:</strong> &nbsp; {country.population}</p>
                        <p><strong>Region:</strong> &nbsp; {country.region}</p>
                        <p><strong>Sub Region:</strong> &nbsp; {country.subregion}</p>
                        <p><strong>Capital:</strong> &nbsp; {country.capital}</p>
                        <p><strong>Top Level Domain:</strong> &nbsp; {country.topLevelDomain}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountryDetail