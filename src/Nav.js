import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <li><Link to='/simpleSpa'>02-SimpleSpa (single page application)</Link></li>
            <li><Link to='/jsx'>03-Jsx</Link></li>
        </ul>
    )
}

export default Nav;