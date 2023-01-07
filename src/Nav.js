import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul>
            <li><Link to='/simpleSpa'>02-SimpleSpa (single page application)</Link></li>
            <li><Link to='/jsx'>03-Jsx</Link></li>
            <li><Link to='/props'>04-Props</Link></li>
            <li><Link to='/styleSheet'>05-Style Sheet</Link></li>
        </ul>
    )
}

export default Nav;