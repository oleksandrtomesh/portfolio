import { useState } from "react"
import { Link } from "react-router-dom"
import { NavItem } from "../components/common/nav-item/NavItem"


export const Navbar = ({ homeRef, skillsRef, projectsRef, contactRef }) => {

    const [navbarItems] = useState([
        { to: homeRef, title: "Home" },
        { to: skillsRef, title: "Skills" },
        { to: projectsRef, title: "Projects" },
        { to: contactRef, title: "Contact" }])

    return (
        <nav className="navbar navbar-expand-lg navbar-light shadow bg-light p-4 fixed-top menu">
            <div className="container">
                <span className="navbar-brand">Oleksandr Tomesh</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {navbarItems.map((item, index) => <NavItem key={index} to={item.to} title={item.title} />)}
                        <li className="nav-item">
                            <a href='https://drive.google.com/file/d/1Xc76IuoebG4zi1lB8DQ9NZVVvXyzo_FV/view?usp=sharing' className="nav-link">CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}