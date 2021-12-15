import React from "react";
 import { Link } from "react-router-dom";
 import './LinkNavbar.css';
const LinkNavbar = ({to, value}) => {
    return (
        <li className="navbar__links--link">
            <Link className="button" to={to}>{value}</Link>
        </li>
    );
}

export default LinkNavbar;