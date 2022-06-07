import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function Navbar({ isDay, handleClick }) {

    return (
        <nav className={isDay ? "light-mode-elmnt navbar" : "dark-mode-elmnt navbar"}>
            <h3>FLAGGER</h3>
            {isDay ? <FontAwesomeIcon icon={faMoon} onClick={handleClick} /> : <FontAwesomeIcon icon={faSun} onClick={handleClick} />}
        </nav>
    )
}


export default Navbar