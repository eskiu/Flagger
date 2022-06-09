import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Country({ country, isDay }) {


    return (
        <motion.div
            className={isDay ? "flag light-mode-elmnt" : "flag dark-mode-elmnt"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}>
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
        </motion.div>
    )
}

export default Country