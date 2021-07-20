import { Link } from "react-router-dom"

export const NavItem = ({title , to}) => {
    return(
    <li className="nav-item" onClick={() => (to.current.scrollIntoView({ behavior: 'smooth' }))}>
        <Link to='/' className="nav-link">{title}</Link>
    </li>)
}