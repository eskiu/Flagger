import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function Navbar({ isDay, handleClick }) {

    return (
        <nav className={isDay ? "light-mode-elmnt navbar-container" : "dark-mode-elmnt navbar-container"}>
            <div className="navbar">
                <h3>FLAGGER</h3>
                {isDay ? <FontAwesomeIcon icon={faMoon} onClick={handleClick} /> : <FontAwesomeIcon icon={faSun} onClick={handleClick} />}
            </div>
        </nav>
    )
}


export default Navbar