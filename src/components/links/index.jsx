import {NavLink} from "react-router-dom";
import React from "react";
import RouteEnum from "../../router/enums/route.enum";

import './links.module.css';

const Links = () => (
    <nav>
        <ul>
            <li>
                <NavLink to={RouteEnum.HOME}>Home</NavLink>
            </li>
            <li>
                <NavLink to={RouteEnum.ARTICLES}>Articles</NavLink>
            </li>
        </ul>
    </nav>
);

export default Links;