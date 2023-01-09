import { Link } from "react-router-dom"
import './style.scss'
const Navbar = () => {
    return (
        <div className="Nav-style">
            <div className="logo">Logo</div>
            <ul>
                <li><Link to={'/Home'}>  Home  </Link> </li>
                <li><Link to={'/About'}>  About  </Link> </li>
                <li><Link to={'Home/Hello'}>  Hello  </Link> </li>
                <li><Link to={'Home/Hello2'}>  Hello  </Link> </li>


                <li><Link  to={'*'}>  Contact   </Link></li>
            </ul>
        </div>
    )
}

export default Navbar
