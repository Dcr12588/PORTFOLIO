import './index.scss'
import { Link, NavLink} from 'react-router-dom'
import LogoD from '../../assets/images/logo-dr.png'
import danny from '../../assets/images/danny.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {

    return (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src ={LogoD} alt="logo"/>
            <img className="sub-logo" src ={danny} alt="Danny Ramirez" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/danny-ramirez-7845b6229">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Dcr12588">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)
}
export default Sidebar;