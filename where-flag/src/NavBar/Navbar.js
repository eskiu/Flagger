import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar({ isDay, handleClick }) {

    return (
        <nav className={isDay ? "light-mode-elmnt navbar-container" : "dark-mode-elmnt navbar-container"}>
            <div className="navbar">
                <Link to="/"><h3 className={isDay ? "light-mode-text" : "dark-mode-text"}>FLAGGER</h3></Link>
                {isDay ? <FontAwesomeIcon icon={faMoon} onClick={handleClick} /> : <FontAwesomeIcon icon={faSun} onClick={handleClick} />}
            </div>
        </nav>
    )
}


export default Navbar